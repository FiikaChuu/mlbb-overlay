/**
 * GOOGLE APPS SCRIPT (MASTER CONTROL PANEL - MPL STANDARD)
 * ----------------------------------------------------
 * 1. Hapus script sebelumnya, dan paste kode ini.
 * 2. Jalankan fungsi `setupTournamentSheets`.
 * 3. Deploy sebagai Web App untuk mendapatkan JSON API URL.
 */

// ==========================================
// KUMPULAN FUNGSI HELPER 
// ==========================================

// Fungsi menghasilkan struktur urutan draft berdasarkan Mode dan First Pick
function getDraftPhases(draftMode, firstPick) {
  const isBlue = (firstPick === 'Blue');
  
  // Fungsi swap untuk Red First Pick
  const swap = (cell) => {
    if (!isBlue) {
       if (cell.startsWith('A')) return 'G' + cell.slice(1);
       if (cell.startsWith('B')) return 'H' + cell.slice(1);
       if (cell.startsWith('G')) return 'A' + cell.slice(1);
       if (cell.startsWith('H')) return 'B' + cell.slice(1);
    }
    return cell;
  };

  if (draftMode === 'Ban 3') {
    return [
      [swap('A13')], [swap('G13')], 
      [swap('A14')], [swap('G14')], 
      [swap('A15')], [swap('G15')], 
      [swap('B13')], 
      [swap('H13'), swap('H14')], 
      [swap('B14'), swap('B15')], 
      [swap('H15'), swap('H16')], 
      [swap('B16'), swap('B17')], 
      [swap('H17')]
    ];
  } else { // Ban 5 (MPL Standard - Ban 2nd phase starts with team closing pick 3)
    return [
      [swap('A13')], [swap('G13')], 
      [swap('A14')], [swap('G14')], 
      [swap('A15')], [swap('G15')], 
      [swap('B13')], 
      [swap('H13'), swap('H14')], 
      [swap('B14'), swap('B15')], 
      [swap('H15')], 
      [swap('G16')], [swap('A16')],  // MPL Rule: G16 (Red) starts 2nd ban phase if Blue First Pick
      [swap('G17')], [swap('A17')], 
      [swap('H16')], 
      [swap('B16'), swap('B17')], 
      [swap('H17')]
    ];
  }
}

// Fungsi pewarnaan dan manajemen Data Validation area Draft
function updateDraftUI(matchSheet, draftMode, firstPick) {
  const phases = getDraftPhases(draftMode, firstPick);
  
  // Reset seluruh area draft menjadi putih
  matchSheet.getRange('A13:B17').setBackground('white');
  matchSheet.getRange('G13:H17').setBackground('white');
  
  // Re-apply Data Validation
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const heroSheet = ss.getSheetByName('HERO_DB');
  if(heroSheet) {
    const heroRule = SpreadsheetApp.newDataValidation().requireValueInRange(
       heroSheet.getRange('A2:A')
    ).setAllowInvalid(false).build();
    matchSheet.getRange('A13:B17').setDataValidation(heroRule);
    matchSheet.getRange('G13:H17').setDataValidation(heroRule);
  }
  
  // Terapkan Pewarnaan (Color-Coding)
  phases.forEach(phase => {
     // Single = Pastel Green, Double = Pastel Blue
     const color = phase.length === 1 ? '#d9ead3' : '#cfe2f3'; 
     phase.forEach(cell => matchSheet.getRange(cell).setBackground(color));
  });
  
  // Nonaktifkan Ban 4 & Ban 5 jika Draft Mode adalah Ban 3
  if (draftMode === 'Ban 3') {
     const disabledCells = ['A16', 'A17', 'G16', 'G17'];
     disabledCells.forEach(c => {
        const range = matchSheet.getRange(c);
        range.setBackground('#999999'); // Dark grey
        range.clearContent();
        range.clearDataValidations();
     });
  }
}

// ==========================================
// 1. SETUP TOURNAMENT SHEETS
// ==========================================
function setupTournamentSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  let settingsSheet = ss.getSheetByName('SETTINGS') || ss.insertSheet('SETTINGS');
  let matchSheet = ss.getSheetByName('MATCH_CONTROL') || ss.insertSheet('MATCH_CONTROL');
  let heroSheet = ss.getSheetByName('HERO_DB') || ss.insertSheet('HERO_DB');
  
  settingsSheet.clear();
  matchSheet.clear();
  heroSheet.clear();
  
  // SETUP "HERO_DB"
  heroSheet.getRange('A1').setValue("HERO LIST").setFontWeight("bold");
  const heroList = ["idle", "aamon", "akai", "aldous", "alice", "alpha", "alucard", "angela", "argus", "atlas", "aulus", "aurora", "badang", "balmond", "bane", "barats", "baxia", "beatrix", "beleric", "benedetta", "brody", "bruno", "carmila", "cecilion", "chang'e", "chip", "chou", "cici", "claude", "clint", "cyclops", "diggie", "dyroth", "edith", "esmeralda", "estes", "eudora", "fanny", "faramis", "floryn", "franco", "fredrin", "freya", "gatotkaca", "gloo", "gord", "granger", "grock", "guinevere", "gusion", "hanabi", "hanzo", "harith", "harley", "hayabusa", "helcurt", "hilda", "hylos", "irithel", "ixia", "jawhead", "johnson", "joy", "julian", "kadita", "kagura", "kaja", "karina", "karrie", "khaleed", "khufra", "kimmy", "lancelot", "lapu lapu", "layla", "leomord", "lesley", "lolita", "lunox", "luo yi", "lylia", "martis", "masha", "mathilda", "melissa", "minotour", "minsitthar", "miya", "moskov", "nana", "natalia", "nathan", "nolan", "novaria", "odette", "paquito", "parsha", "phoveus", "popol and kupa", "rafaela", "roger", "ruby", "saber", "selena", "silvanna", "sun", "suyou", "terizla", "thamuz", "tigreal", "uranus", "vale", "valentina", "valir", "vexana", "wanwan", "xavier", "xborg", "yin", "yisunshin", "yuzhong", "yve", "zhask", "zhuxin", "zilong"];
  const heroData = heroList.map(h => [h]);
  heroSheet.getRange(2, 1, heroData.length, 1).setValues(heroData);
  
  // SETUP "SETTINGS"
  settingsSheet.getRange('A1:B4').setValues([
    ["TOURNAMENT SETTINGS", ""],
    ["BO Mode", "BO3"],
    ["Draft Mode", "Ban 5"],
    ["First Pick", "Blue"]
  ]);
  settingsSheet.getRange('A1:B1').setFontWeight('bold').setBackground('#4c8bf5').setFontColor('white');
  settingsSheet.getRange('B2').setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(['BO1', 'BO3', 'BO5', 'BO7']).build());
  settingsSheet.getRange('B3').setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(['Ban 5', 'Ban 3']).build());
  settingsSheet.getRange('B4').setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(['Blue', 'Red']).build());
  settingsSheet.autoResizeColumns(1, 2);
  
  // SETUP "MATCH_CONTROL"
  // Blue Side Info
  matchSheet.getRange('A1:E1').merge().setValue("BLUE TEAM").setFontWeight('bold').setBackground('#4c8bf5').setFontColor('white').setHorizontalAlignment('center');
  matchSheet.getRange('A2:B3').setValues([["Team Name", "Team A"], ["Logo URL", ""]]);
  matchSheet.getRange('A4').setValue("Win Check");
  matchSheet.getRange('B4:C4').insertCheckboxes(); // Default BO3
  matchSheet.getRange('A6:B10').setValues([["Nickname 1", ""], ["Nickname 2", ""], ["Nickname 3", ""], ["Nickname 4", ""], ["Nickname 5", ""]]);
  
  // Red Side Info
  matchSheet.getRange('G1:K1').merge().setValue("RED TEAM").setFontWeight('bold').setBackground('#e04c4c').setFontColor('white').setHorizontalAlignment('center');
  matchSheet.getRange('G2:H3').setValues([["Team Name", "Team B"], ["Logo URL", ""]]);
  matchSheet.getRange('G4').setValue("Win Check");
  matchSheet.getRange('H4:I4').insertCheckboxes(); // Default BO3
  matchSheet.getRange('G6:H10').setValues([["Nickname 1", ""], ["Nickname 2", ""], ["Nickname 3", ""], ["Nickname 4", ""], ["Nickname 5", ""]]);
  
  // Draft Layout
  matchSheet.getRange('A12:B12').setValues([["BLUE BANS", "BLUE PICKS"]]).setFontWeight('bold').setBackground('#4c8bf5').setFontColor('white');
  matchSheet.getRange('G12:H12').setValues([["RED BANS", "RED PICKS"]]).setFontWeight('bold').setBackground('#e04c4c').setFontColor('white');
  
  matchSheet.getRange('A13:B17').clearContent();
  matchSheet.getRange('G13:H17').clearContent();

  // Actions Tabs
  matchSheet.getRange('M1:N1').merge().setValue("ACTIONS").setFontWeight('bold').setBackground('#f1c232');
  matchSheet.getRange('M2:M4').setValues([["Swap Team"], ["Reset Draft"], ["Reset All"]]);
  matchSheet.getRange('N2:N4').insertCheckboxes();
  
  // Format Layout widths
  matchSheet.setColumnWidths(1, 1, 120); matchSheet.setColumnWidths(2, 1, 120); matchSheet.setColumnWidths(3, 1, 40);
  matchSheet.setColumnWidths(4, 1, 40); matchSheet.setColumnWidths(5, 1, 40); matchSheet.setColumnWidths(6, 1, 40); 
  matchSheet.setColumnWidths(7, 1, 120); matchSheet.setColumnWidths(8, 1, 120); matchSheet.setColumnWidths(9, 1, 40);
  matchSheet.setColumnWidths(10, 1, 40); matchSheet.setColumnWidths(11, 1, 40);
  
  // Apply initial Color Coding for Draft
  updateDraftUI(matchSheet, 'Ban 5', 'Blue');
}

// ==========================================
// 2. ON-EDIT TRIGGERS (SMART LOGIC)
// ==========================================
function onEdit(e) {
  if (!e || !e.range) return;
  const sheet = e.range.getSheet();
  const sheetName = sheet.getName();
  const row = e.range.getRow();
  const col = e.range.getColumn();
  const val = e.value;
  const a1 = e.range.getA1Notation();

  // --- TUGAS 5: DYNAMIC BO & DRAFT MODE UI ---
  if (sheetName === 'SETTINGS') {
    const matchSheet = e.source.getSheetByName('MATCH_CONTROL');
    if (!matchSheet) return;

    if (a1 === 'B2') { // BO Mode berubah
      matchSheet.getRange('B4:E4').clearDataValidations().clearContent();
      matchSheet.getRange('H4:K4').clearDataValidations().clearContent();
      
      if (val === 'BO1') {
        matchSheet.getRange('B4').insertCheckboxes(); matchSheet.getRange('H4').insertCheckboxes();
      } else if (val === 'BO3') {
        matchSheet.getRange('B4:C4').insertCheckboxes(); matchSheet.getRange('H4:I4').insertCheckboxes();
      } else if (val === 'BO5') {
        matchSheet.getRange('B4:D4').insertCheckboxes(); matchSheet.getRange('H4:J4').insertCheckboxes();
      } else if (val === 'BO7') {
        matchSheet.getRange('B4:E4').insertCheckboxes(); matchSheet.getRange('H4:K4').insertCheckboxes();
      }
    } else if (a1 === 'B3' || a1 === 'B4') { // Draft Mode atau First Pick berubah
      const draftMode = sheet.getRange('B3').getValue();
      const firstPick = sheet.getRange('B4').getValue();
      updateDraftUI(matchSheet, draftMode, firstPick);
    }
  }

  // Hanya proses kode di bawah jika berada di sheet MATCH_CONTROL
  if (sheetName !== 'MATCH_CONTROL') return;

  // --- TUGAS 6: SMART PHASE-BASED AUTO-MOVE ---
  const isDraftCell = (col === 1 || col === 2 || col === 7 || col === 8) && (row >= 13 && row <= 17);
  
  if (isDraftCell && val && val !== "") {
    const settingsSheet = e.source.getSheetByName('SETTINGS');
    const draftMode = settingsSheet.getRange('B3').getValue();
    const firstPick = settingsSheet.getRange('B4').getValue();
    const draftPhases = getDraftPhases(draftMode, firstPick);
    
    // Tentukan fase dari cell yang baru saja diedit
    let editedPhaseIndex = -1;
    for (let i = 0; i < draftPhases.length; i++) {
      if (draftPhases[i].includes(a1)) {
        editedPhaseIndex = i;
        break;
      }
    }
    
    // Cari fase AKTIF PERTAMA yang masih memiliki sel kosong
    let activePhaseIndex = -1;
    for (let i = 0; i < draftPhases.length; i++) {
      let hasEmpty = false;
      for (let j = 0; j < draftPhases[i].length; j++) {
        // Abaikan validasi jika cellnya didisabled (Ban 3 greyed out) 
        if (sheet.getRange(draftPhases[i][j]).getValue() === "") {
          hasEmpty = true;
          break;
        }
      }
      if (hasEmpty) {
        activePhaseIndex = i;
        break;
      }
    }

    // Jika operator menembak sel yang BUKAN berada di activePhaseIndex (fase yang belum saatnya)
    if (editedPhaseIndex > activePhaseIndex && activePhaseIndex !== -1) {
      sheet.getRange(a1).clearContent();
      SpreadsheetApp.getUi().alert("SALAH GILIRAN! Selesaikan slot sebelumnya terlebih dahulu.");
      
      // Kembalikan kursor paksa ke sel kosong pertama di fase yang benar
      for (let j = 0; j < draftPhases[activePhaseIndex].length; j++) {
        if (sheet.getRange(draftPhases[activePhaseIndex][j]).getValue() === "") {
          sheet.getRange(draftPhases[activePhaseIndex][j]).activate();
          return;
        }
      }
    } else if (activePhaseIndex !== -1) {
      // Input benar, di fase yang sama. Cek apakah keseluruhan fase sekarang PENUH.
      let isPhaseFull = true;
      let nextEmptyInSamePhase = null;
      for (let j = 0; j < draftPhases[editedPhaseIndex].length; j++) {
        if (sheet.getRange(draftPhases[editedPhaseIndex][j]).getValue() === "") {
          isPhaseFull = false;
          nextEmptyInSamePhase = draftPhases[editedPhaseIndex][j];
          break;
        }
      }
      
      if (isPhaseFull) {
        // Lompati ke fase berikutnya (jika ada)
        if (editedPhaseIndex + 1 < draftPhases.length) {
          sheet.getRange(draftPhases[editedPhaseIndex + 1][0]).activate();
        }
      } else {
        // Jika belum full (terjadi saat double pick baru terisi 1), pindah ke sebelahnya
        sheet.getRange(nextEmptyInSamePhase).activate();
      }
    }
  }

  // --- TUGAS 7: CHECKBOX ACTIONS (Kolom 14 / N atau Kolom 12 / L fallback) ---
  // Kita menargetkan Checkbox di N2, N3, N4 sesuai Tugas 4.
  if (val === "TRUE" && (col === 14 || col === 12)) { 
    const checkCol = sheet.getRange(row, col).getA1Notation(); // Get cell ID to reset it
    
    if (row === 2) {
      // Swap Team
      const blueTeamData = sheet.getRange('B2:B10').getValues();
      const redTeamData = sheet.getRange('H2:H10').getValues();
      sheet.getRange('B2:B10').setValues(redTeamData);
      sheet.getRange('H2:H10').setValues(blueTeamData);
      
      const blueWins = sheet.getRange('B4:E4').getValues();
      const redWins = sheet.getRange('H4:K4').getValues();
      sheet.getRange('B4:E4').setValues(redWins);
      sheet.getRange('H4:K4').setValues(blueWins);
      
      const settingsSheet = e.source.getSheetByName('SETTINGS');
      if (settingsSheet) {
        const fp = settingsSheet.getRange('B4').getValue();
        settingsSheet.getRange('B4').setValue(fp === 'Blue' ? 'Red' : 'Blue');
      }
      sheet.getRange(checkCol).setValue(false);
      
    } else if (row === 3) {
      // Reset Draft
      sheet.getRange('A13:B17').clearContent();
      sheet.getRange('G13:H17').clearContent();
      
      // Kembalikan cursor ke first ban
      const settingsSheet = e.source.getSheetByName('SETTINGS');
      if (settingsSheet) {
        const draftMode = settingsSheet.getRange('B3').getValue();
        const firstPick = settingsSheet.getRange('B4').getValue();
        const phases = getDraftPhases(draftMode, firstPick);
        sheet.getRange(phases[0][0]).activate();
      } else {
        sheet.getRange('A13').activate();
      }
      
      sheet.getRange(checkCol).setValue(false);
      
    } else if (row === 4) {
      // Reset All
      sheet.getRange('B2').setValue("Team A");
      sheet.getRange('B3').setValue("");
      sheet.getRange('B4:E4').setValue(false);
      sheet.getRange('B6:B10').clearContent();
      
      sheet.getRange('H2').setValue("Team B");
      sheet.getRange('H3').setValue("");
      sheet.getRange('H4:K4').setValue(false);
      sheet.getRange('H6:H10').clearContent();
      
      sheet.getRange('A13:B17').clearContent();
      sheet.getRange('G13:H17').clearContent();
      
      const settingsSheet = e.source.getSheetByName('SETTINGS');
      if (settingsSheet) settingsSheet.getRange('B4').setValue("Blue");
      
      sheet.getRange('A13').activate();
      sheet.getRange(checkCol).setValue(false);
    }
  }
}

// ==========================================
// 3. JSON ENDPOINT API (doGet)
// ==========================================
function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sSheet = ss.getSheetByName('SETTINGS');
  const mSheet = ss.getSheetByName('MATCH_CONTROL');
  
  if (!mSheet) {
    return ContentService.createTextOutput(JSON.stringify({error: "Belum disetup"}))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  const settingsData = sSheet ? sSheet.getRange('B2:B4').getValues() : [["BO3"], ["Ban 5"], ["Blue"]];
  const boMode = settingsData[0][0];
  const draftMode = settingsData[1][0];
  const firstPick = settingsData[2][0];
  const winsNeeded = Math.ceil(parseInt(boMode.replace('BO', '')) / 2);
  
  const blueInfo = mSheet.getRange('B2:B10').getValues();
  const redInfo = mSheet.getRange('H2:H10').getValues();
  const blueWinsArr = mSheet.getRange('B4:E4').getValues()[0];
  const redWinsArr = mSheet.getRange('H4:K4').getValues()[0];
  
  // Hitung Current Score (Hanya yang terceklis TRUE)
  let blueScore = 0;
  blueWinsArr.forEach(v => { if (v === true) blueScore++ });
  
  let redScore = 0;
  redWinsArr.forEach(v => { if (v === true) redScore++ });
  
  const blueDraft = mSheet.getRange('A13:B17').getValues();
  const redDraft = mSheet.getRange('G13:H17').getValues();
  const extract = (data, col) => data.map(row => row[col] || "");
  
  let blueBans = extract(blueDraft, 0);
  let redBans = extract(redDraft, 0);
  
  // --- TUGAS 8: BUANG DATA BAN 4 & 5 JIKA DRAFT MODE = BAN 3 ---
  if (draftMode === 'Ban 3') {
    blueBans = blueBans.slice(0, 3);
    redBans = redBans.slice(0, 3);
  }
  
  const state = {
    settings: {
      boMode: boMode,
      draftMode: draftMode,
      firstPick: firstPick,
      winsNeeded: winsNeeded
    },
    blueSide: {
      teamName: blueInfo[0][0],
      logoUrl: blueInfo[1][0],
      winCheck: blueWinsArr.map(v => v === true),
      currentScore: blueScore,
      isMatchWinner: blueScore >= winsNeeded,
      nicknames: [blueInfo[4][0], blueInfo[5][0], blueInfo[6][0], blueInfo[7][0], blueInfo[8][0]],
      bans: blueBans,
      picks: extract(blueDraft, 1)
    },
    redSide: {
      teamName: redInfo[0][0],
      logoUrl: redInfo[1][0],
      winCheck: redWinsArr.map(v => v === true),
      currentScore: redScore,
      isMatchWinner: redScore >= winsNeeded,
      nicknames: [redInfo[4][0], redInfo[5][0], redInfo[6][0], redInfo[7][0], redInfo[8][0]],
      bans: redBans,
      picks: extract(redDraft, 1)
    }
  };
  
  return ContentService.createTextOutput(JSON.stringify(state))
    .setMimeType(ContentService.MimeType.JSON);
}
