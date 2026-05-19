// ============================================================
// NOTE: GOOGLE_SHEETS_API_URL SEKARANG BERADA DI FILE "config.js"
// ============================================================
// ============================================================
// HERO DATABASE (UNTUK GAMBAR & SOUND DI DISPLAY)
// ============================================================
const heroes = [
    { name: 'idle', img: 'Assets/HeroPick/idle.png', sound: null },
    { name: 'aamon', img: 'Assets/HeroPick/aamon.png', sound: 'Assets/Sound/Aamon.select.ogg' },
    { name: 'akai', img: 'Assets/HeroPick/akai.png', sound: 'Assets/Sound/Akai.new.select.ogg' },
    { name: 'aldous', img: 'Assets/HeroPick/aldous.png', sound: 'Assets/Sound/Aldous.select.ogg' },
    { name: 'alice', img: 'Assets/HeroPick/alice.png', sound: 'Assets/Sound/Alice-v2-select.ogg' },
    { name: 'alpha', img: 'Assets/HeroPick/alpha.png', sound: 'Assets/Sound/Alpha.projnext.select.ogg' },
    { name: 'alucard', img: 'Assets/HeroPick/alucard.png', sound: 'Assets/Sound/Alucard.new.select.ogg' },
    { name: 'angela', img: 'Assets/HeroPick/angela.png', sound: 'Assets/Sound/Angela.select.ogg' },
    { name: 'argus', img: 'Assets/HeroPick/argus.png', sound: 'Assets/Sound/Argus.new.select.ogg' },
    { name: 'arlott', img: 'Assets/HeroPick/arlott.png', sound: 'Assets/Sound/arlott-select.ogg' },
    { name: 'atlas', img: 'Assets/HeroPick/atlas.png', sound: 'Assets/Sound/Atlas.select.ogg' },
    { name: 'aulus', img: 'Assets/HeroPick/aulus.png', sound: 'Assets/Sound/Aulus.select.ogg' },
    { name: 'aurora', img: 'Assets/HeroPick/aurora.png', sound: 'Assets/Sound/aurora-select.ogg' },
    { name: 'badang', img: 'Assets/HeroPick/badang.png', sound: 'Assets/Sound/Badang.select.ogg' },
    { name: 'balmond', img: 'Assets/HeroPick/balmond.png', sound: 'Assets/Sound/Balmond-select.ogg' },
    { name: 'bane', img: 'Assets/HeroPick/bane.png', sound: 'Assets/Sound/Bane.new.select.ogg' },
    { name: 'barats', img: 'Assets/HeroPick/barats.png', sound: 'Assets/Sound/Barats.select.ogg' },
    { name: 'baxia', img: 'Assets/HeroPick/baxia.png', sound: 'Assets/Sound/Baxia.select.ogg' },
    { name: 'beatrix', img: 'Assets/HeroPick/beatrix.png', sound: 'Assets/Sound/Beatrix.select.ogg' },
    { name: 'belerick', img: 'Assets/HeroPick/beleric.png', sound: 'Assets/Sound/Belerick.new.select.ogg' },
    { name: 'benedetta', img: 'Assets/HeroPick/benedetta.png', sound: 'Assets/Sound/Benedetta.select.ogg' },
    { name: 'brody', img: 'Assets/HeroPick/brody.png', sound: 'Assets/Sound/Brody.select.ogg' },
    { name: 'bruno', img: 'Assets/HeroPick/bruno.png', sound: 'Assets/Sound/Bruno -select.ogg' },
    { name: 'carmilla', img: 'Assets/HeroPick/carmila.png', sound: 'Assets/Sound/Carmilla.select.ogg' },
    { name: 'cecilion', img: 'Assets/HeroPick/cecilion.png', sound: 'Assets/Sound/Cecilion.select.ogg' },
    { name: 'change', img: 'Assets/HeroPick/chang_e.png', sound: 'Assets/Sound/Chang\'e.Rselect.ogg' },
    { name: 'chip', img: 'Assets/HeroPick/chip.png', sound: 'Assets/Sound/Chip-select.ogg' },
    { name: 'chou', img: 'Assets/HeroPick/chou.png', sound: 'Assets/Sound/Chou.select.ogg' },
    { name: 'cici', img: 'Assets/HeroPick/cici.png', sound: 'Assets/Sound/Cici-select.ogg' },
    { name: 'claude', img: 'Assets/HeroPick/claude.png', sound: 'Assets/Sound/Claude.new.select.ogg' },
    { name: 'clint', img: 'Assets/HeroPick/clint.png', sound: 'Assets/Sound/Clint.new.select.ogg' },
    { name: 'cyclops', img: 'Assets/HeroPick/cyclops.png', sound: 'Assets/Sound/Cyclops.select.ogg' },
    { name: 'diggie', img: 'Assets/HeroPick/diggie.png', sound: 'Assets/Sound/Diggie.select.ogg' },
    { name: 'dyrroth', img: 'Assets/HeroPick/dyroth.png', sound: 'Assets/Sound/dyroth-select.ogg' },
    { name: 'edith', img: 'Assets/HeroPick/edith.png', sound: 'Assets/Sound/Edith.select.ogg' },
    { name: 'esmeralda', img: 'Assets/HeroPick/esmeralda.png', sound: 'Assets/Sound/Esmeralda.select.ogg' },
    { name: 'estes', img: 'Assets/HeroPick/estes.png', sound: 'Assets/Sound/Estes.select.ogg' },
    { name: 'eudora', img: 'Assets/HeroPick/eudora.png', sound: 'Assets/Sound/Eudora.new.select.ogg' },
    { name: 'fanny', img: 'Assets/HeroPick/fanny.png', sound: 'Assets/Sound/Fanny.new.select.ogg' },
    { name: 'faramis', img: 'Assets/HeroPick/faramis.png', sound: 'Assets/Sound/faramis-select.ogg' },
    { name: 'floryn', img: 'Assets/HeroPick/floryn.png', sound: 'Assets/Sound/Floryn.select.ogg' },
    { name: 'franco', img: 'Assets/HeroPick/franco.png', sound: 'Assets/Sound/Franco.select.ogg' },
    { name: 'fredrinn', img: 'Assets/HeroPick/fredrinn.png', sound: 'Assets/Sound/Freddrin-select.ogg' },
    { name: 'freya', img: 'Assets/HeroPick/freya.png', sound: 'Assets/Sound/Freya-select.ogg' },
    { name: 'gatotkaca', img: 'Assets/HeroPick/gatotkaca.png', sound: 'Assets/Sound/Gatotkaca.select.ogg' },
    { name: 'gloo', img: 'Assets/HeroPick/gloo.png', sound: 'Assets/Sound/gloo-select.ogg' },
    { name: 'gord', img: 'Assets/HeroPick/gord.png', sound: 'Assets/Sound/Gord.select.ogg' },
    { name: 'granger', img: 'Assets/HeroPick/granger.png', sound: 'Assets/Sound/Grangger-select.ogg' },
    { name: 'grock', img: 'Assets/HeroPick/grock.png', sound: 'Assets/Sound/Grock-select.ogg' },
    { name: 'guinevere', img: 'Assets/HeroPick/guinevere.png', sound: 'Assets/Sound/Guinevere.select.ogg' },
    { name: 'gusion', img: 'Assets/HeroPick/gusion.png', sound: 'Assets/Sound/Gusion.new.select.ogg' },
    { name: 'hanabi', img: 'Assets/HeroPick/hanabi.png', sound: 'Assets/Sound/Hanabi-select.ogg' },
    { name: 'hanzo', img: 'Assets/HeroPick/hanzo.png', sound: 'Assets/Sound/Hanxo-v2-select.ogg' },
    { name: 'harith', img: 'Assets/HeroPick/harith.png', sound: 'Assets/Sound/Harith.select.ogg' },
    { name: 'harley', img: 'Assets/HeroPick/harley.png', sound: 'Assets/Sound/Harley.new.select.ogg' },
    { name: 'hayabusa', img: 'Assets/HeroPick/hayabusa.png', sound: 'Assets/Sound/Hayabusa.revamp.select.ogg' },
    { name: 'helcurt', img: 'Assets/HeroPick/helcurt.png', sound: 'Assets/Sound/Helcurt-select.ogg' },
    { name: 'hilda', img: 'Assets/HeroPick/hilda.png', sound: 'Assets/Sound/Hilda.newselect.ogg' },
    { name: 'hylos', img: 'Assets/HeroPick/hylos.png', sound: 'Assets/Sound/Hylos.select.ogg' },
    { name: 'irithel', img: 'Assets/HeroPick/irithel.png', sound: 'Assets/Sound/Irithel.select.ogg' },
    { name: 'ixia', img: 'Assets/HeroPick/ixia.png', sound: null },
    { name: 'jawhead', img: 'Assets/HeroPick/jawhead.png', sound: 'Assets/Sound/Jawhead.select.ogg' },
    { name: 'johnson', img: 'Assets/HeroPick/johnson.png', sound: 'Assets/Sound/Johnson-select.ogg' },
    { name: 'joy', img: 'Assets/HeroPick/joy.png', sound: 'Assets/Sound/Joy-select.ogg' },
    { name: 'julian', img: 'Assets/HeroPick/julian.png', sound: 'Assets/Sound/Julian.select.ogg' },
    { name: 'kadita', img: 'Assets/HeroPick/kadita.png', sound: 'Assets/Sound/Kadita.select.ogg' },
    { name: 'kagura', img: 'Assets/HeroPick/kagura.png', sound: 'Assets/Sound/Kagura.revamp.select.ogg' },
    { name: 'kaja', img: 'Assets/HeroPick/kaja.png', sound: 'Assets/Sound/Kaja.select.ogg' },
    { name: 'kalea', img: 'Assets/HeroPick/kalea.png', sound: 'Assets/Sound/Kalea-select.ogg' },
    { name: 'karina', img: 'Assets/HeroPick/karina.png', sound: 'Assets/Sound/Karina.projnext.select.ogg' },
    { name: 'karrie', img: 'Assets/HeroPick/karrie.png', sound: 'Assets/Sound/Karrie.select.ogg' },
    { name: 'khaleed', img: 'Assets/HeroPick/khaleed.png', sound: 'Assets/Sound/Khaleed.select.ogg' },
    { name: 'khufra', img: 'Assets/HeroPick/khufra.png', sound: 'Assets/Sound/Khufra.select.ogg' },
    { name: 'kimmy', img: 'Assets/HeroPick/kimmy.png', sound: 'Assets/Sound/Kimmy-select.ogg' },
    { name: 'lancelot', img: 'Assets/HeroPick/lancelot.png', sound: 'Assets/Sound/Lancelot-select.ogg' },
    { name: 'lapulapu', img: 'Assets/HeroPick/lapulapu.png', sound: 'Assets/Sound/Lapu-lapu.new.select.ogg' },
    { name: 'layla', img: 'Assets/HeroPick/layla.png', sound: 'Assets/Sound/Layla-select.ogg' },
    { name: 'leomord', img: 'Assets/HeroPick/leomord.png', sound: 'Assets/Sound/Leomord-select.ogg' },
    { name: 'lesley', img: 'Assets/HeroPick/lesley.png', sound: 'Assets/Sound/Lesley-select.ogg' },
    { name: 'ling', img: 'Assets/HeroPick/ling.png', sound: 'Assets/Sound/ling.ogg' },
    { name: 'lolita', img: 'Assets/HeroPick/lolita.png', sound: 'Assets/Sound/Lolita-select.ogg' },
    { name: 'lukas', img: 'Assets/HeroPick/lukas.png', sound: 'Assets/Sound/Lukas-select.ogg' },
    { name: 'lunox', img: 'Assets/HeroPick/lunox.png', sound: 'Assets/Sound/Lunox.select.ogg' },
    { name: 'luoyi', img: 'Assets/HeroPick/luoyi.png', sound: 'Assets/Sound/Luoyi.select02.ogg' },
    { name: 'lylia', img: 'Assets/HeroPick/lylia.png', sound: 'Assets/Sound/Lylia.select.ogg' },
    { name: 'marcel', img: 'Assets/HeroPick/marcel.png', sound: 'Assets/Sound/Marcel.selection.ogg' },
    { name: 'martis', img: 'Assets/HeroPick/martis.png', sound: 'Assets/Sound/Martis.select.ogg' },
    { name: 'masha', img: 'Assets/HeroPick/masha.png', sound: 'Assets/Sound/Masha.select.ogg' },
    { name: 'mathilda', img: 'Assets/HeroPick/mathilda.png', sound: 'Assets/Sound/Mathilda.select.ogg' },
    { name: 'melissa', img: 'Assets/HeroPick/melissa.png', sound: 'Assets/Sound/Melissa.select.ogg' },
    { name: 'minotaur', img: 'Assets/HeroPick/minotour.png', sound: 'Assets/Sound/Minotaur.projnext.select.ogg' },
    { name: 'minsitthar', img: 'Assets/HeroPick/minsitthar.png', sound: 'Assets/Sound/Minsithhar-select01.ogg' },
    { name: 'miya', img: 'Assets/HeroPick/miya.png', sound: 'Assets/Sound/Miya-v2-select.ogg' },
    { name: 'moskov', img: 'Assets/HeroPick/moskov.png', sound: 'Assets/Sound/Moskov-select.ogg' },
    { name: 'nana', img: 'Assets/HeroPick/nana.png', sound: 'Assets/Sound/Nana-select.ogg' },
    { name: 'natalia', img: 'Assets/HeroPick/natalia.png', sound: 'Assets/Sound/Natalia.select.ogg' },
    { name: 'natan', img: 'Assets/HeroPick/nathan.png', sound: null },
    { name: 'nolan', img: 'Assets/HeroPick/nolan.png', sound: null },
    { name: 'novaria', img: 'Assets/HeroPick/novaria.png', sound: null },
    { name: 'obsidia', img: 'Assets/HeroPick/obsidia.png', sound: null },
    { name: 'odette', img: 'Assets/HeroPick/odette.png', sound: null },
    { name: 'paquito', img: 'Assets/HeroPick/paquito.png', sound: null },
    { name: 'pharsa', img: 'Assets/HeroPick/parsha.png', sound: null },
    { name: 'phoveus', img: 'Assets/HeroPick/phoveus.png', sound: null },
    { name: 'popolandkupa', img: 'Assets/HeroPick/popolandkupa.png', sound: null },
    { name: 'rafaela', img: 'Assets/HeroPick/rafaela.png', sound: null },
    { name: 'roger', img: 'Assets/HeroPick/roger.png', sound: null },
    { name: 'ruby', img: 'Assets/HeroPick/ruby.png', sound: null },
    { name: 'saber', img: 'Assets/HeroPick/saber.png', sound: null },
    { name: 'selena', img: 'Assets/HeroPick/selena.png', sound: null },
    { name: 'silvanna', img: 'Assets/HeroPick/silvanna.png', sound: null },
    { name: 'sora', img: 'Assets/HeroPick/sora.png', sound: null },
    { name: 'sun', img: 'Assets/HeroPick/sun.png', sound: null },
    { name: 'suyou', img: 'Assets/HeroPick/suyou.png', sound: null },
    { name: 'terizla', img: 'Assets/HeroPick/terizla.png', sound: null },
    { name: 'thamuz', img: 'Assets/HeroPick/thamuz.png', sound: null },
    { name: 'tigreal', img: 'Assets/HeroPick/tigreal.png', sound: null },
    { name: 'uranus', img: 'Assets/HeroPick/uranus.png', sound: null },
    { name: 'vale', img: 'Assets/HeroPick/vale.png', sound: null },
    { name: 'valentina', img: 'Assets/HeroPick/valentina.png', sound: null },
    { name: 'valir', img: 'Assets/HeroPick/valir.png', sound: null },
    { name: 'vexana', img: 'Assets/HeroPick/vexana.png', sound: null },
    { name: 'wanwan', img: 'Assets/HeroPick/wanwan.png', sound: null },
    { name: 'xborg', img: 'Assets/HeroPick/xborg.png', sound: null },
    { name: 'xavier', img: 'Assets/HeroPick/xavier.png', sound: null },
    { name: 'yisunshin', img: 'Assets/HeroPick/yisunshin.png', sound: null },
    { name: 'yin', img: 'Assets/HeroPick/yin.png', sound: null },
    { name: 'yuzhong', img: 'Assets/HeroPick/yuzhong.png', sound: null },
    { name: 'yve', img: 'Assets/HeroPick/yve.png', sound: null },
    { name: 'zetian', img: 'Assets/HeroPick/zetian.png', sound: null },
    { name: 'zhask', img: 'Assets/HeroPick/zhask.png', sound: null },
    { name: 'zhuxin', img: 'Assets/HeroPick/zhuxin.png', sound: null },
    { name: 'zilong', img: 'Assets/HeroPick/zilong.png', sound: null },
];


// ============================================================
// TRACKING STATE — untuk deteksi perubahan slot
// ============================================================
let prevSlots = {};
for (let i = 1; i <= 20; i++) prevSlots[i] = null;

let oldStateStr = "";

// ============================================================
// POLLING SYSTEM
// ============================================================
async function fetchState() {
    if (!GOOGLE_SHEETS_API_URL || GOOGLE_SHEETS_API_URL.includes("YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL")) return;

    try {
        const response = await fetch(GOOGLE_SHEETS_API_URL);
        const state = await response.json();

        const newStateStr = JSON.stringify(state);
        if (newStateStr !== oldStateStr) {
            renderState(state);
            oldStateStr = newStateStr;
        }
    } catch (e) {
        console.warn('Polling error (Display):', e);
    }
}

function startPolling() {
    fetchState().finally(() => {
        setTimeout(startPolling, 2000); // Tunggu sampai fetch selesai, baru tunggu 2 detik lagi
    });
}

// Untuk mengatasi masalah Autoplay Sound di Browser (Suara tidak keluar sebelum layar diklik)
document.addEventListener('click', () => {
    // Memutar audio kosong sekali untuk unlock Autoplay Policy browser
    const unlockAudio = new Audio();
    unlockAudio.play().catch(() => { });
}, { once: true });

// ============================================================
// RENDER STATE — dipanggil setiap kali ada state baru
// ============================================================
function renderState(state) {
    // Pastikan data yang diterima sesuai dengan format dari Code.gs
    if (!state.settings || !state.blueSide || !state.redSide) return;

    // Helper to sanitize hero names
    const cleanHeroName = (val) => {
        if (!val) return null;
        let cleaned = val.toString().trim().toLowerCase();

        // Perbaikan otomatis untuk typo dari Google Sheets
        if (cleaned === 'lou yi' || cleaned === 'louyi') cleaned = 'luo yi';
        if (cleaned === 'soyou') cleaned = 'suyou';
        if (cleaned === 'arlot') cleaned = 'arlott';
        if (cleaned === 'beleric') cleaned = 'belerick';
        if (cleaned === 'carmila') cleaned = 'carmilla';
        if (cleaned === 'dyroth') cleaned = 'dyrroth';
        if (cleaned === 'fredrin') cleaned = 'fredrinn';
        if (cleaned === 'minotour') cleaned = 'minotaur';
        if (cleaned === 'nathan') cleaned = 'natan';
        if (cleaned === 'parsha') cleaned = 'pharsa';
        if (cleaned === 'yisunshin' || cleaned === 'yi shun shin') cleaned = 'yi sun-shin';

        // Ubah & jadi and
        cleaned = cleaned.replace(/&/g, 'and');

        // Hapus spasi, tanda hubung, titik, dan tanda kutip (misal "X.Borg" jadi "xborg")
        cleaned = cleaned.replace(/['\-\s\.]/g, '');
        if (cleaned === "" || cleaned === "idle") return null;
        return cleaned;
    };

    // 1. Memetakan Slots (Hero Picks & Bans)
    const slots = {};
    for (let i = 1; i <= 20; i++) slots[i] = null;

    // Blue Picks (1-5) dan Bans (6-10)
    for (let i = 0; i < state.blueSide.picks.length; i++) slots[i + 1] = cleanHeroName(state.blueSide.picks[i]);
    for (let i = 0; i < state.blueSide.bans.length; i++) slots[i + 6] = cleanHeroName(state.blueSide.bans[i]);

    // Red Picks (11-15) dan Bans (16-20) 
    for (let i = 0; i < state.redSide.picks.length; i++) slots[i + 11] = cleanHeroName(state.redSide.picks[i]);
    for (let i = 0; i < state.redSide.bans.length; i++) slots[i + 16] = cleanHeroName(state.redSide.bans[i]);

    renderSlots(slots);

    // 2. Memetakan Data Tim (Nama, Logo, Nickname, Skor)
    const teams = {
        BLUE: {
            name: state.blueSide.teamName,
            logo: state.blueSide.logoUrl,
            players: state.blueSide.nicknames,
            score: state.blueSide.currentScore
        },
        RED: {
            name: state.redSide.teamName,
            logo: state.redSide.logoUrl,
            players: state.redSide.nicknames,
            score: state.redSide.currentScore
        }
    };

    renderTeamNames(teams);
    renderNicknames(teams);
    renderLogos(teams);

    // Format "BO3", "BO5", ambil angkanya saja
    let bestOf = 3;
    if (state.settings.boMode) {
        bestOf = parseInt(state.settings.boMode.replace('BO', '')) || 3;
    }
    renderWins(teams, bestOf);

    // Tournament Name (Kosongkan jika tidak ada, karena Code.gs tidak mengirimkannya saat ini)
    renderTournamentName(state.settings.tournamentName || '');
}

// ============================================================
// RENDER SLOTS (hero pick/ban dengan animasi & SOUND)
// ============================================================
function renderSlots(slots) {
    for (let i = 1; i <= 20; i++) {
        const heroName = slots[i] || null;
        const prevName = prevSlots[i] || null;

        if (heroName === prevName) continue;

        const container = document.getElementById(`image-display-${i}`);
        if (!container) continue;

        if (heroName && !prevName) {
            // Hero baru dipick/ban -> Muncul & Bunyi!
            const hObj = heroes.find(h => h.name.toLowerCase().replace(/['\-\s\.]/g, '') === heroName);
            if (hObj) {
                addHeroImage(container, hObj);
            }
        } else if (heroName && prevName) {
            // Ditimpa hero lain
            const existing = container.querySelector('img');
            const hObj = heroes.find(h => h.name.toLowerCase().replace(/['\-\s\.]/g, '') === heroName);
            
            if (existing && hObj) {
                existing.classList.add('fly-out');
                setTimeout(() => addHeroImage(container, hObj), 500);
            } else if (hObj) {
                addHeroImage(container, hObj);
            } else if (existing) {
                // Jika salah ketik (hero tidak ada di database), hapus gambar lama agar slot kosong
                existing.classList.add('fly-out');
                setTimeout(() => { container.innerHTML = ''; }, 500);
            }
        } else if (!heroName && prevName) {
            // Direset/dihapus
            const existing = container.querySelector('img');
            if (existing) {
                existing.classList.add('fly-out');
                setTimeout(() => { container.innerHTML = ''; }, 500);
            } else {
                container.innerHTML = '';
            }
        }
    }

    for (let i = 1; i <= 20; i++) {
        prevSlots[i] = slots[i] ? slots[i] : null;
    }
}

function addHeroImage(container, hero) {
    if (hero.img) {
        container.innerHTML = `<img src="${hero.img}" alt="${hero.name}" class="fly-in">`;
    } else {
        container.innerHTML = ''; // Kosongkan slot agar tidak muncul ikon gambar error (broken image)
    }

    // PLAY SOUND DI DISPLAY OBS OTOMATIS
    if (hero.sound) {
        const audio = new Audio(hero.sound);
        audio.play().catch((err) => {
            console.warn(`[SUARA] Gagal memutar suara untuk ${hero.name}. Ini hal wajar di browser (Autoplay Policy) sebelum Anda mengklik layar minimal sekali. Detail:`, err);
        });
    }
}

// ============================================================
// RENDER TEAM NAMES
// ============================================================
function renderTeamNames(teams) {
    const d1 = document.getElementById('teamNameDisplay1');
    const d2 = document.getElementById('teamNameDisplay2');
    if (d1) d1.textContent = teams.BLUE.name || 'Blue Side';
    if (d2) d2.textContent = teams.RED.name || 'Red Side';
}

// ============================================================
// RENDER NICKNAMES
// ============================================================
function renderNicknames(teams) {
    for (let i = 0; i < 5; i++) {
        const blueEl = document.getElementById('output' + (i + 1));
        const redEl = document.getElementById('output' + (i + 6));
        if (blueEl) blueEl.textContent = ` ${teams.BLUE.players[i] || ''}`;
        if (redEl) redEl.textContent = ` ${teams.RED.players[i] || ''}`;
    }
}

// ============================================================
// RENDER TEAM LOGOS
// ============================================================
function renderLogos(teams) {
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    if (img1 && teams.BLUE.logo) img1.src = teams.BLUE.logo;
    if (img2 && teams.RED.logo) img2.src = teams.RED.logo;
}

// ============================================================
// RENDER WIN INDICATORS (Support Dinamis BO)
// ============================================================
function renderWins(teams, bestOf) {
    const winsReq = Math.ceil(bestOf / 2);

    for (let i = 1; i <= 3; i++) {
        const blueEl = document.getElementById(`extraImage${i}`);
        const redEl = document.getElementById(`extraImage${i + 3}`);

        if (i > winsReq) {
            if (blueEl) blueEl.parentElement.parentElement.style.display = 'none';
            if (redEl) redEl.parentElement.parentElement.style.display = 'none';
        } else {
            if (blueEl) blueEl.parentElement.parentElement.style.display = 'block';
            if (redEl) redEl.parentElement.parentElement.style.display = 'block';

            const blueWon = i <= teams.BLUE.score;
            const redWon = i <= teams.RED.score;

            if (blueEl) blueEl.style.display = blueWon ? 'block' : 'none';
            if (redEl) redEl.style.display = redWon ? 'block' : 'none';
        }
    }
}

// ============================================================
// RENDER TOURNAMENT NAME
// ============================================================
function renderTournamentName(name) {
    const el = document.getElementById('tournamentnameOutput');
    if (el) el.textContent = name || '';
}

// INIT POLLING
startPolling();
