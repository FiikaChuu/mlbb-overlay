// ============================================================
// KONFIGURASI
// Jika server berjalan di PC LAIN di jaringan LAN, ganti 'localhost'
// dengan IP PC server, contoh: 'ws://192.168.1.10:8080'
// ============================================================
const WS_URL = 'ws://localhost:3000';

// ============================================================
// TRACKING STATE — untuk deteksi perubahan slot
// ============================================================
let prevSlots = {};
for (let i = 1; i <= 20; i++) prevSlots[i] = null;

// ============================================================
// WEBSOCKET CLIENT
// ============================================================
let ws = null;

function initWebSocket() {
    try {
        ws = new WebSocket(WS_URL);

        ws.onopen = () => {
            console.log('✅ Display terhubung ke WebSocket server');
        };

        ws.onmessage = (event) => {
            try {
                const msg = JSON.parse(event.data);
                if (msg.type === 'state') {
                    renderState(msg.data);
                }
            } catch (e) {
                console.error('Error parsing state:', e);
            }
        };

        ws.onclose = () => {
            console.warn('⚠️ Koneksi terputus, reconnect dalam 3 detik...');
            setTimeout(initWebSocket, 3000);
        };

        ws.onerror = () => {
            // Error handled by onclose
        };

    } catch (e) {
        console.warn('Gagal connect WebSocket, retry...');
        setTimeout(initWebSocket, 5000);
    }
}

// ============================================================
// RENDER STATE — dipanggil setiap kali ada state baru dari server
// ============================================================
function renderState(state) {
    if (state.slots)         renderSlots(state.slots);
    if (state.teams)         renderTeamNames(state.teams);
    if (state.nicknames)     renderNicknames(state.nicknames);
    if (state.logos)         renderLogos(state.logos);
    if (state.wins)          renderWins(state.wins);
    if (state.tournamentName !== undefined) renderTournamentName(state.tournamentName);
}

// ============================================================
// RENDER SLOTS (hero pick/ban dengan animasi)
// ============================================================
function renderSlots(slots) {
    for (let i = 1; i <= 20; i++) {
        const hero     = slots[i]    || null;
        const prev     = prevSlots[i] || null;
        const heroName = hero ? hero.name : null;
        const prevName = prev ? prev.name : null;

        // Tidak ada perubahan — skip
        if (heroName === prevName) continue;

        const container = document.getElementById(`image-display-${i}`);
        if (!container) continue;

        if (heroName && !prevName) {
            // Slot kosong → ada hero (fly-in)
            addHeroImage(container, hero);

        } else if (heroName && prevName) {
            // Hero lama → hero baru (fly-out, lalu fly-in)
            const existing = container.querySelector('img');
            if (existing) {
                existing.classList.add('fly-out');
                setTimeout(() => addHeroImage(container, hero), 500);
            } else {
                addHeroImage(container, hero);
            }

        } else if (!heroName && prevName) {
            // Hero → kosong (fly-out, lalu hapus)
            const existing = container.querySelector('img');
            if (existing) {
                existing.classList.add('fly-out');
                setTimeout(() => { container.innerHTML = ''; }, 500);
            } else {
                container.innerHTML = '';
            }
        }
    }

    // Update tracking state
    for (let i = 1; i <= 20; i++) {
        prevSlots[i] = slots[i] ? { ...slots[i] } : null;
    }
}

function addHeroImage(container, hero) {
    container.innerHTML = `<img src="${hero.img}" alt="${hero.name}" class="fly-in">`;

    // Play suara hero jika tersedia
    if (hero.sound) {
        const audio = new Audio(hero.sound);
        audio.play().catch(() => {});
    }
}

// ============================================================
// RENDER TEAM NAMES
// ============================================================
function renderTeamNames(teams) {
    const d1 = document.getElementById('teamNameDisplay1');
    const d2 = document.getElementById('teamNameDisplay2');
    if (d1) d1.textContent = teams.blue || 'Blue Side';
    if (d2) d2.textContent = teams.red  || 'Red Side';
}

// ============================================================
// RENDER NICKNAMES
// ============================================================
function renderNicknames(nicknames) {
    for (let i = 1; i <= 10; i++) {
        const el = document.getElementById('output' + i);
        if (el) el.textContent = ` ${nicknames[i] || ''}`;
    }
}

// ============================================================
// RENDER TEAM LOGOS
// ============================================================
function renderLogos(logos) {
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    if (img1 && logos.image1) img1.src = logos.image1;
    if (img2 && logos.image2) img2.src = logos.image2;
}

// ============================================================
// RENDER WIN INDICATORS
// ============================================================
function renderWins(wins) {
    for (let i = 1; i <= 6; i++) {
        const el = document.getElementById('extraImage' + i);
        if (el) el.style.display = wins[i] ? 'block' : 'none';
    }
}

// ============================================================
// RENDER TOURNAMENT NAME
// ============================================================
function renderTournamentName(name) {
    const el = document.getElementById('tournamentnameOutput');
    if (el) el.textContent = name || '';
}

// ============================================================
// INIT
// ============================================================
initWebSocket();

// ============================================================
// COUNTDOWN RENDER LOOP — update timer + bars tiap 100ms
// ============================================================
setInterval(() => {
    const cd = currentCountdown;
    if (!cd) return;

    let remainingMs;
    if (cd.running && cd.startedAt !== null) {
        remainingMs = (cd.totalSeconds * 1000) - (Date.now() - cd.startedAt);
    } else {
        remainingMs = cd.pausedAt !== null ? cd.pausedAt : cd.totalSeconds * 1000;
    }
    remainingMs = Math.max(0, remainingMs);

    const totalMs  = cd.totalSeconds * 1000;
    const percent  = totalMs > 0 ? (remainingMs / totalMs) * 100 : 0;

    // Format m:ss
    const totalSecs = Math.ceil(remainingMs / 1000);
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    const timeStr = `${m}:${s.toString().padStart(2, '0')}`;

    const timeEl = document.getElementById('countdownTime');
    const fillL  = document.getElementById('countdownFillLeft');
    const fillR  = document.getElementById('countdownFillRight');
    const dot    = document.getElementById('countdownDot');

    if (timeEl) timeEl.textContent = timeStr;
    if (fillL)  fillL.style.width  = percent + '%';
    if (fillR)  fillR.style.width  = percent + '%';

    // Dot urgent berkedip saat < 10 detik
    if (dot) {
        if (remainingMs <= 10000 && cd.running) {
            dot.classList.add('urgent');
        } else {
            dot.classList.remove('urgent');
            dot.style.backgroundColor = remainingMs <= 10000 ? '#ff0000' : '#ff2200';
            dot.style.boxShadow       = remainingMs <= 10000 ? '0 0 10px #ff0000' : '0 0 6px #ff3300';
        }
    }
}, 100);
