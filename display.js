// ============================================================
// CONFIGURATION: GOOGLE APPS SCRIPT WEB APP URL
// ============================================================
// PASTE URL DARI DEPLOYMENT GOOGLE APPS SCRIPT DI SINI
const GOOGLE_SHEETS_API_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";

// ============================================================
// HERO DATABASE (UNTUK GAMBAR & SOUND DI DISPLAY)
// ============================================================
const heroes = [
    { name: 'Aamon',          img: 'Assets/HeroPick/aamon.png',        sound: null },
    { name: 'Akai',           img: 'Assets/HeroPick/akai.png',         sound: null },
    { name: 'Aldous',         img: 'Assets/HeroPick/aldous.png',       sound: null },
    { name: 'Alice',          img: 'Assets/HeroPick/alice.png',        sound: null },
    { name: 'Alpha',          img: 'Assets/HeroPick/alpha.png',        sound: null },
    { name: 'Alucard',        img: 'Assets/HeroPick/alucard.png',      sound: null },
    { name: 'Angela',         img: 'Assets/HeroPick/angela.png',       sound: null },
    { name: 'Argus',          img: 'Assets/HeroPick/argus.png',        sound: null },
    { name: 'Arlot',          img: 'Assets/HeroPick/arlot.png',        sound: null },
    { name: 'Atlas',          img: 'Assets/HeroPick/atlas.png',        sound: null },
    { name: 'Aulus',          img: 'Assets/HeroPick/aulus.png',        sound: null },
    { name: 'Aurora',         img: 'Assets/HeroPick/aurora.png',       sound: null },
    { name: 'Badang',         img: 'Assets/HeroPick/badang.png',       sound: null },
    { name: 'Balmond',        img: 'Assets/HeroPick/balmond.png',      sound: null },
    { name: 'Bane',           img: 'Assets/HeroPick/bane.png',         sound: null },
    { name: 'Barats',         img: 'Assets/HeroPick/barats.png',       sound: null },
    { name: 'Baxia',          img: 'Assets/HeroPick/baxia.png',        sound: null },
    { name: 'Beatrix',        img: 'Assets/HeroPick/beatrix.png',      sound: null },
    { name: 'Beleric',        img: 'Assets/HeroPick/beleric.png',      sound: null },
    { name: 'Benedetta',      img: 'Assets/HeroPick/benedetta.png',    sound: null },
    { name: 'Brody',          img: 'Assets/HeroPick/brody.png',        sound: null },
    { name: 'Bruno',          img: 'Assets/HeroPick/bruno.png',        sound: null },
    { name: 'Carmila',        img: 'Assets/HeroPick/carmila.png',      sound: null },
    { name: 'Cecilion',       img: 'Assets/HeroPick/cecilion.png',     sound: null },
    { name: 'Chang\'e',       img: 'Assets/HeroPick/chang_e.png',      sound: null },
    { name: 'Chip',           img: 'Assets/HeroPick/chip.png',         sound: null },
    { name: 'Chou',           img: 'Assets/HeroPick/chou.png',         sound: null },
    { name: 'Cici',           img: 'Assets/HeroPick/cici.png',         sound: null },
    { name: 'Claude',         img: 'Assets/HeroPick/claude.png',       sound: null },
    { name: 'Clint',          img: 'Assets/HeroPick/clint.png',        sound: null },
    { name: 'Cyclops',        img: 'Assets/HeroPick/cyclops.png',      sound: null },
    { name: 'Diggie',         img: 'Assets/HeroPick/diggie.png',       sound: null },
    { name: 'Dyroth',         img: 'Assets/HeroPick/dyroth.png',       sound: null },
    { name: 'Edith',          img: 'Assets/HeroPick/edith.png',        sound: null },
    { name: 'Esmeralda',      img: 'Assets/HeroPick/esmeralda.png',    sound: null },
    { name: 'Estes',          img: 'Assets/HeroPick/estes.png',        sound: null },
    { name: 'Eudora',         img: 'Assets/HeroPick/eudora.png',       sound: null },
    { name: 'Fanny',          img: 'Assets/HeroPick/fanny.png',        sound: null },
    { name: 'Faramis',        img: 'Assets/HeroPick/faramis.png',      sound: null },
    { name: 'Floryn',         img: 'Assets/HeroPick/floryn.png',       sound: null },
    { name: 'Franco',         img: 'Assets/HeroPick/franco.png',       sound: null },
    { name: 'Fredrin',        img: 'Assets/HeroPick/fredrin.png',      sound: null },
    { name: 'Freya',          img: 'Assets/HeroPick/freya.png',        sound: null },
    { name: 'Gatotkaca',      img: 'Assets/HeroPick/gatotkaca.png',    sound: null },
    { name: 'Gloo',           img: 'Assets/HeroPick/gloo.png',         sound: null },
    { name: 'Gord',           img: 'Assets/HeroPick/gord.png',         sound: null },
    { name: 'Granger',        img: 'Assets/HeroPick/granger.png',      sound: null },
    { name: 'Grock',          img: 'Assets/HeroPick/grock.png',        sound: null },
    { name: 'Guinevere',      img: 'Assets/HeroPick/guinevere.png',    sound: null },
    { name: 'Gusion',         img: 'Assets/HeroPick/gusion.png',       sound: null },
    { name: 'Hanabi',         img: 'Assets/HeroPick/hanabi.png',       sound: null },
    { name: 'Hanzo',          img: 'Assets/HeroPick/hanzo.png',        sound: null },
    { name: 'Harith',         img: 'Assets/HeroPick/harith.png',       sound: null },
    { name: 'Harley',         img: 'Assets/HeroPick/harley.png',       sound: null },
    { name: 'Hayabusa',       img: 'Assets/HeroPick/hayabusa.png',     sound: null },
    { name: 'Helcurt',        img: 'Assets/HeroPick/helcurt.png',      sound: null },
    { name: 'Hilda',          img: 'Assets/HeroPick/hilda.png',        sound: null },
    { name: 'Hylos',          img: 'Assets/HeroPick/hylos.png',        sound: null },
    { name: 'Irithel',        img: 'Assets/HeroPick/irithel.png',      sound: null },
    { name: 'Ixia',           img: 'Assets/HeroPick/ixia.png',         sound: null },
    { name: 'Jawhead',        img: 'Assets/HeroPick/jawhead.png',      sound: null },
    { name: 'Johnson',        img: 'Assets/HeroPick/johnson.png',      sound: null },
    { name: 'Joy',            img: 'Assets/HeroPick/joy.png',          sound: null },
    { name: 'Julian',         img: 'Assets/HeroPick/julian.png',       sound: null },
    { name: 'Kadita',         img: 'Assets/HeroPick/kadita.png',       sound: null },
    { name: 'Kagura',         img: 'Assets/HeroPick/kagura.png',       sound: null },
    { name: 'Kaja',           img: 'Assets/HeroPick/kaja.png',         sound: null },
    { name: 'Karina',         img: 'Assets/HeroPick/karina.png',       sound: null },
    { name: 'Karrie',         img: 'Assets/HeroPick/karrie.png',       sound: null },
    { name: 'Khaleed',        img: 'Assets/HeroPick/khaleed.png',      sound: null },
    { name: 'Khufra',         img: 'Assets/HeroPick/khufra.png',       sound: null },
    { name: 'Kimmy',          img: 'Assets/HeroPick/kimmy.png',        sound: null },
    { name: 'Lancelot',       img: 'Assets/HeroPick/lancelot.png',     sound: null },
    { name: 'Lukas',          img: 'Assets/HeroPick/lukas.png',        sound: null },
    { name: 'Lapu Lapu',      img: 'Assets/HeroPick/lapulapu.png',     sound: null },
    { name: 'Layla',          img: 'Assets/HeroPick/layla.png',        sound: null },
    { name: 'Leomord',        img: 'Assets/HeroPick/leomord.png',      sound: null },
    { name: 'Lesley',         img: 'Assets/HeroPick/lesley.png',       sound: null },
    { name: 'Ling',           img: 'Assets/HeroPick/ling.png',         sound: 'Assets/Sound/ling.ogg' },
    { name: 'Lolita',         img: 'Assets/HeroPick/lolita.png',       sound: null },
    { name: 'Lunox',          img: 'Assets/HeroPick/lunox.png',        sound: null },
    { name: 'Luo Yi',         img: 'Assets/HeroPick/luoyi.png',        sound: null },
    { name: 'Lylia',          img: 'Assets/HeroPick/lylia.png',        sound: null },
    { name: 'Martis',         img: 'Assets/HeroPick/martis.png',       sound: null },
    { name: 'Masha',          img: 'Assets/HeroPick/masha.png',        sound: null },
    { name: 'Mathilda',       img: 'Assets/HeroPick/mathilda.png',     sound: null },
    { name: 'Melissa',        img: 'Assets/HeroPick/melissa.png',      sound: null },
    { name: 'Minotaur',       img: 'Assets/HeroPick/minotour.png',     sound: null },
    { name: 'Minsitthar',     img: 'Assets/HeroPick/minsitthar.png',   sound: null },
    { name: 'Miya',           img: 'Assets/HeroPick/miya.png',         sound: null },
    { name: 'Moskov',         img: 'Assets/HeroPick/moskov.png',       sound: null },
    { name: 'Nana',           img: 'Assets/HeroPick/nana.png',         sound: null },
    { name: 'Natalia',        img: 'Assets/HeroPick/natalia.png',      sound: null },
    { name: 'Nathan',         img: 'Assets/HeroPick/nathan.png',       sound: null },
    { name: 'Nolan',          img: 'Assets/HeroPick/nolan.png',        sound: null },
    { name: 'Novaria',        img: 'Assets/HeroPick/novaria.png',      sound: null },
    { name: 'Odette',         img: 'Assets/HeroPick/odette.png',       sound: null },
    { name: 'Paquito',        img: 'Assets/HeroPick/paquito.png',      sound: null },
    { name: 'Parsha',         img: 'Assets/HeroPick/parsha.png',       sound: null },
    { name: 'Phoveus',        img: 'Assets/HeroPick/phoveus.png',      sound: null },
    { name: 'Popol and Kupa', img: 'Assets/HeroPick/popolandkupa.png', sound: null },
    { name: 'Rafaela',        img: 'Assets/HeroPick/rafaela.png',      sound: null },
    { name: 'Roger',          img: 'Assets/HeroPick/roger.png',        sound: null },
    { name: 'Ruby',           img: 'Assets/HeroPick/ruby.png',         sound: null },
    { name: 'Saber',          img: 'Assets/HeroPick/saber.png',        sound: null },
    { name: 'Selena',         img: 'Assets/HeroPick/selena.png',       sound: null },
    { name: 'Silvanna',       img: 'Assets/HeroPick/silvanna.png',     sound: null },
    { name: 'Sun',            img: 'Assets/HeroPick/sun.png',          sound: null },
    { name: 'Suyou',          img: 'Assets/HeroPick/suyou.png',        sound: null },
    { name: 'Terizla',        img: 'Assets/HeroPick/terizla.png',      sound: null },
    { name: 'Thamuz',         img: 'Assets/HeroPick/thamuz.png',       sound: null },
    { name: 'Tigreal',        img: 'Assets/HeroPick/tigreal.png',      sound: null },
    { name: 'Uranus',         img: 'Assets/HeroPick/uranus.png',       sound: null },
    { name: 'Vale',           img: 'Assets/HeroPick/vale.png',         sound: null },
    { name: 'Valentina',      img: 'Assets/HeroPick/valentina.png',    sound: null },
    { name: 'Valir',          img: 'Assets/HeroPick/valir.png',        sound: null },
    { name: 'Vexana',         img: 'Assets/HeroPick/vexana.png',       sound: null },
    { name: 'Wanwan',         img: 'Assets/HeroPick/wanwan.png',       sound: null },
    { name: 'Xavier',         img: 'Assets/HeroPick/xavier.png',       sound: null },
    { name: 'Xborg',          img: 'Assets/HeroPick/xborg.png',        sound: null },
    { name: 'Yin',            img: 'Assets/HeroPick/yin.png',          sound: null },
    { name: 'Yisunshin',      img: 'Assets/HeroPick/yisunshin.png',    sound: null },
    { name: 'Yuzhong',        img: 'Assets/HeroPick/yuzhong.png',      sound: null },
    { name: 'Yve',            img: 'Assets/HeroPick/yve.png',          sound: null },
    { name: 'Zhask',          img: 'Assets/HeroPick/zhask.png',        sound: null },
    { name: 'Zhuxin',         img: 'Assets/HeroPick/zhuxin.png',       sound: null },
    { name: 'Zilong',         img: 'Assets/HeroPick/zilong.png',       sound: null }
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
    if (GOOGLE_SHEETS_API_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") return;
    
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
    fetchState();
    setInterval(fetchState, 2000);
}

// ============================================================
// RENDER STATE — dipanggil setiap kali ada state baru
// ============================================================
function renderState(state) {
    if (state.draft && state.draft.slots) renderSlots(state.draft.slots);
    if (state.teams) {
        renderTeamNames(state.teams);
        renderNicknames(state.teams);
        renderLogos(state.teams);
        renderWins(state.teams, state.match.bestOf);
    }
    if (state.match && state.match.tournamentName !== undefined) {
        renderTournamentName(state.match.tournamentName);
    }
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
            const hObj = heroes.find(h => h.name === heroName);
            if (hObj) {
                addHeroImage(container, hObj);
            }
        } else if (heroName && prevName) {
            // Ditimpa hero lain
            const existing = container.querySelector('img');
            const hObj = heroes.find(h => h.name === heroName);
            if (existing && hObj) {
                existing.classList.add('fly-out');
                setTimeout(() => addHeroImage(container, hObj), 500);
            } else if (hObj) {
                addHeroImage(container, hObj);
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
    container.innerHTML = `<img src="${hero.img}" alt="${hero.name}" class="fly-in">`;
    
    // PLAY SOUND DI DISPLAY OBS OTOMATIS
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
    if (d1) d1.textContent = teams.BLUE.name || 'Blue Side';
    if (d2) d2.textContent = teams.RED.name  || 'Red Side';
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
