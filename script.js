// ============================================================
// CONFIGURATION: GOOGLE APPS SCRIPT WEB APP URL
// ============================================================
// PASTE URL DARI DEPLOYMENT GOOGLE APPS SCRIPT DI SINI
const GOOGLE_SHEETS_API_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";

// ============================================================
// HERO DATABASE
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
// DRAFT STATE MANAGER
// ============================================================
let appState = {
    match: {
        tournamentName: 'Tournament Name',
        bestOf: 3,
        mode: 'BAN10',
        firstPick: 'BLUE',
        currentTurnIndex: 0,
        phase: 'NOT_STARTED'
    },
    teams: {
        BLUE: { name: 'Blue Side', logo: '', players: ['', '', '', '', ''], score: 0 },
        RED: { name: 'Red Side', logo: '', players: ['', '', '', '', ''], score: 0 }
    },
    draft: {
        slots: {} // key 1-20 -> hero name
    }
};

let oldStateStr = "";
let isUpdating = false;
let pollingInterval = null;

// Slots map based on UI
// Blue Picks: 1, 2, 3, 4, 5
// Blue Bans: 6, 7, 8, 9, 10
// Red Picks: 11, 12, 13, 14, 15
// Red Bans: 16, 17, 18, 19, 20

// Draft Logic Orders mapping to slots
function getDraftOrder() {
    const fp = appState.match.firstPick; 
    const sp = fp === 'BLUE' ? 'RED' : 'BLUE'; 
    
    // Map side + role + internal slot (1-5) to absolute UI slot (1-20)
    const getUI = (side, type, s) => {
        if(side === 'BLUE' && type === 'PICK') return s;
        if(side === 'BLUE' && type === 'BAN') return s + 5;
        if(side === 'RED' && type === 'PICK') return s + 10;
        if(side === 'RED' && type === 'BAN') return s + 15;
    };

    if (appState.match.mode === 'BAN10') {
        return [
            { type: 'BAN', side: fp, slot: getUI(fp, 'BAN', 1) },
            { type: 'BAN', side: sp, slot: getUI(sp, 'BAN', 1) },
            { type: 'BAN', side: fp, slot: getUI(fp, 'BAN', 2) },
            { type: 'BAN', side: sp, slot: getUI(sp, 'BAN', 2) },
            { type: 'BAN', side: fp, slot: getUI(fp, 'BAN', 3) },
            { type: 'BAN', side: sp, slot: getUI(sp, 'BAN', 3) },
            
            { type: 'PICK', side: fp, slot: getUI(fp, 'PICK', 1) },
            { type: 'PICK', side: sp, slot: getUI(sp, 'PICK', 1) },
            { type: 'PICK', side: sp, slot: getUI(sp, 'PICK', 2) },
            { type: 'PICK', side: fp, slot: getUI(fp, 'PICK', 2) },
            { type: 'PICK', side: fp, slot: getUI(fp, 'PICK', 3) },
            { type: 'PICK', side: sp, slot: getUI(sp, 'PICK', 3) },
            
            { type: 'BAN', side: sp, slot: getUI(sp, 'BAN', 4) },
            { type: 'BAN', side: fp, slot: getUI(fp, 'BAN', 4) },
            { type: 'BAN', side: sp, slot: getUI(sp, 'BAN', 5) },
            { type: 'BAN', side: fp, slot: getUI(fp, 'BAN', 5) },
            
            { type: 'PICK', side: sp, slot: getUI(sp, 'PICK', 4) },
            { type: 'PICK', side: fp, slot: getUI(fp, 'PICK', 4) },
            { type: 'PICK', side: fp, slot: getUI(fp, 'PICK', 5) },
            { type: 'PICK', side: sp, slot: getUI(sp, 'PICK', 5) }
        ];
    } else { // BAN5
        return [
            { type: 'BAN', side: fp, slot: getUI(fp, 'BAN', 1) },
            { type: 'BAN', side: sp, slot: getUI(sp, 'BAN', 1) },
            { type: 'BAN', side: fp, slot: getUI(fp, 'BAN', 2) },
            { type: 'BAN', side: sp, slot: getUI(sp, 'BAN', 2) },
            { type: 'BAN', side: fp, slot: getUI(fp, 'BAN', 3) },
            { type: 'BAN', side: sp, slot: getUI(sp, 'BAN', 3) },
            { type: 'BAN', side: fp, slot: getUI(fp, 'BAN', 4) },
            { type: 'BAN', side: sp, slot: getUI(sp, 'BAN', 4) },
            { type: 'BAN', side: fp, slot: getUI(fp, 'BAN', 5) },
            { type: 'BAN', side: sp, slot: getUI(sp, 'BAN', 5) },
            
            { type: 'PICK', side: fp, slot: getUI(fp, 'PICK', 1) },
            { type: 'PICK', side: sp, slot: getUI(sp, 'PICK', 1) },
            { type: 'PICK', side: sp, slot: getUI(sp, 'PICK', 2) },
            { type: 'PICK', side: fp, slot: getUI(fp, 'PICK', 2) },
            { type: 'PICK', side: fp, slot: getUI(fp, 'PICK', 3) },
            { type: 'PICK', side: sp, slot: getUI(sp, 'PICK', 3) },
            { type: 'PICK', side: sp, slot: getUI(sp, 'PICK', 4) },
            { type: 'PICK', side: fp, slot: getUI(fp, 'PICK', 4) },
            { type: 'PICK', side: fp, slot: getUI(fp, 'PICK', 5) },
            { type: 'PICK', side: sp, slot: getUI(sp, 'PICK', 5) }
        ];
    }
}

function isHeroAvailable(heroName) {
    for (let i = 1; i <= 20; i++) {
        if (appState.draft.slots[i] === heroName) return false;
    }
    return true;
}

function getCurrentTurnSlot() {
    const order = getDraftOrder();
    if (appState.match.currentTurnIndex < order.length) {
        return order[appState.match.currentTurnIndex].slot;
    }
    return null; // finished
}

// ============================================================
// REALTIME SYNC (POLLING & PUSH)
// ============================================================
async function fetchState() {
    if (isUpdating || GOOGLE_SHEETS_API_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") return;
    try {
        const response = await fetch(GOOGLE_SHEETS_API_URL);
        const data = await response.json();
        
        const newStateStr = JSON.stringify(data);
        if (newStateStr !== oldStateStr) {
            updateDOM(data);
            appState = JSON.parse(newStateStr);
            oldStateStr = newStateStr;
        }
    } catch (e) {
        console.warn("Polling error:", e);
    }
}

async function pushState() {
    if (GOOGLE_SHEETS_API_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
        console.warn("API URL not configured. Local state updated only.");
        updateDOM(appState);
        return;
    }

    isUpdating = true;
    try {
        await fetch(GOOGLE_SHEETS_API_URL, {
            method: 'POST',
            body: JSON.stringify(appState),
            headers: { 'Content-Type': 'application/json' }
        });
        oldStateStr = JSON.stringify(appState);
        updateDOM(appState);
    } catch (e) {
        console.error("Push state error:", e);
    }
    isUpdating = false;
}

function startPolling() {
    fetchState();
    pollingInterval = setInterval(fetchState, 2000);
}

// ============================================================
// SMART DOM UPDATE
// ============================================================
function updateDOM(newState) {
    // 1. MATCH INFO
    document.getElementById('tournamentnameOutput').textContent = newState.match.tournamentName || '';
    document.getElementById('tournamentnamemid').value = newState.match.tournamentName || '';

    // 2. TEAM NAMES
    document.getElementById('teamNameDisplay1').textContent = newState.teams.BLUE.name || 'Blue Side';
    document.getElementById('teamNameDisplay2').textContent = newState.teams.RED.name || 'Red Side';
    document.getElementById('team1').value = newState.teams.BLUE.name || '';
    document.getElementById('team2').value = newState.teams.RED.name || '';

    // 3. TEAM LOGOS
    if (newState.teams.BLUE.logo) document.getElementById('image1').src = newState.teams.BLUE.logo;
    if (newState.teams.RED.logo) document.getElementById('image2').src = newState.teams.RED.logo;

    // 4. PLAYERS NICKNAME
    for (let i = 0; i < 5; i++) {
        // Blue
        document.getElementById(`output${i + 1}`).textContent = newState.teams.BLUE.players[i] || '';
        document.getElementById(`input${i + 1}`).value = newState.teams.BLUE.players[i] || '';
        // Red
        document.getElementById(`output${i + 6}`).textContent = newState.teams.RED.players[i] || '';
        document.getElementById(`input${i + 6}`).value = newState.teams.RED.players[i] || '';
    }

    // 5. WINS / SCORES
    const winsReq = Math.ceil(newState.match.bestOf / 2);
    for (let i = 1; i <= 3; i++) {
        const blueEl = document.getElementById(`extraImage${i}`);
        const redEl = document.getElementById(`extraImage${i + 3}`);
        const blueCb = document.getElementById(`checkbox${i}`);
        const redCb = document.getElementById(`checkbox${i + 3}`);
        
        // Hide if beyond BO limit
        if (i > winsReq) {
            if (blueEl) blueEl.style.display = 'none';
            if (redEl) redEl.style.display = 'none';
            if (blueCb) blueCb.parentElement.style.display = 'none';
            if (redCb) redCb.parentElement.style.display = 'none';
        } else {
            if (blueCb) blueCb.parentElement.style.display = 'inline-block';
            if (redCb) redCb.parentElement.style.display = 'inline-block';
            
            const blueWon = i <= newState.teams.BLUE.score;
            const redWon = i <= newState.teams.RED.score;
            
            if (blueEl) blueEl.style.display = blueWon ? 'block' : 'none';
            if (redEl) redEl.style.display = redWon ? 'block' : 'none';
            if (blueCb) blueCb.checked = blueWon;
            if (redCb) redCb.checked = redWon;
        }
    }

    // 6. HERO SLOTS
    const currentSlot = getCurrentTurnSlot(); // active slot for animation / logic
    
    for (let i = 1; i <= 20; i++) {
        const heroName = newState.draft.slots[i];
        const container = document.getElementById(`image-display-${i}`);
        const searchInput = document.getElementById(`search-${i}`);
        
        if (!container) continue;

        if (heroName) {
            const hObj = heroes.find(h => h.name === heroName);
            if (hObj) {
                // If it wasn't there before, add it
                if (!container.querySelector(`img[alt="${heroName}"]`)) {
                    container.innerHTML = `<img src="${hObj.img}" alt="${hObj.name}" class="fly-in">`;
                    if (searchInput) searchInput.value = hObj.name;
                    // Play sound if UI user picked it just now
                    // if (hObj.sound) new Audio(hObj.sound).play().catch(()=>{});
                }
            }
        } else {
            container.innerHTML = '';
            if (searchInput) searchInput.value = '';
        }

        // Disable input based on turn
        if (searchInput) {
            if (heroName) {
                searchInput.disabled = true;
            } else {
                searchInput.disabled = (currentSlot !== i);
            }
        }
    }
}

// ============================================================
// UI ACTIONS (TRIGGERED BY OPERATOR)
// ============================================================

// HERO DROPDOWN LOGIC
window.filterDropdown = function(id) {
    // Prevent filtering if not active turn
    if (getCurrentTurnSlot() !== id && appState.draft.slots[id] == null) {
        alert("Bukan giliran slot ini!");
        document.getElementById(`search-${id}`).value = '';
        return;
    }

    const searchInput = document.getElementById(`search-${id}`).value.toLowerCase();
    const dropdownItems = document.getElementById(`dropdown-items-${id}`);
    dropdownItems.innerHTML = '';

    heroes
        .filter(hero => hero.name.toLowerCase().includes(searchInput))
        .forEach(hero => {
            const item = document.createElement('div');
            item.classList.add('dropdown-item');
            item.textContent = hero.name;
            
            if (!isHeroAvailable(hero.name)) {
                item.style.opacity = "0.5";
                item.style.cursor = "not-allowed";
                item.textContent += " (Locked)";
            } else {
                item.onclick = () => selectHero(hero, id);
            }
            dropdownItems.appendChild(item);
        });
}

function selectHero(hero, id) {
    if (!isHeroAvailable(hero.name)) return;
    
    // Validasi turn
    if (getCurrentTurnSlot() !== id) return;

    appState.draft.slots[id] = hero.name;
    appState.match.currentTurnIndex++;
    
    if (appState.match.currentTurnIndex >= getDraftOrder().length) {
        appState.match.phase = 'FINISHED';
    } else {
        appState.match.phase = 'ONGOING';
    }

    // Play sound locally
    if (hero.sound) {
        new Audio(hero.sound).play().catch(() => {});
    }

    document.getElementById(`dropdown-items-${id}`).innerHTML = '';
    pushState();
}

// MATCH / NICKNAME UPDATES
window.updateOutput = function() {
    for (let i = 0; i < 5; i++) {
        appState.teams.BLUE.players[i] = document.getElementById(`input${i + 1}`).value;
        appState.teams.RED.players[i] = document.getElementById(`input${i + 6}`).value;
    }
    pushState();
}

window.updateTeamName = function() {
    appState.teams.BLUE.name = document.getElementById('team1').value;
    appState.teams.RED.name = document.getElementById('team2').value;
    pushState();
}

document.getElementById('tournamentnamemid').addEventListener('input', function() {
    appState.match.tournamentName = this.value;
    pushState();
});

window.toggleImage = function(imageId) {
    const idx = parseInt(imageId.replace('extraImage', ''));
    const checkbox = document.getElementById('checkbox' + idx);
    
    if (idx <= 3) {
        appState.teams.BLUE.score = countWins(1, 3);
    } else {
        appState.teams.RED.score = countWins(4, 6);
    }
    pushState();
}

function countWins(startIdx, endIdx) {
    let score = 0;
    for (let i = startIdx; i <= endIdx; i++) {
        if (document.getElementById('checkbox' + i).checked) score++;
    }
    return score;
}

// LOGO UPLOAD (CONVERT TO BASE64 AND SAVE TO STATE)
window.loadImage = function(event, imgId) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        if (imgId === 'image1') appState.teams.BLUE.logo = e.target.result;
        if (imgId === 'image2') appState.teams.RED.logo = e.target.result;
        pushState();
    };
    reader.readAsDataURL(file);
}

// ============================================================
// SYSTEM CONTROLS
// ============================================================
window.resetAllDropdowns = function() {
    appState.draft.slots = {};
    appState.match.currentTurnIndex = 0;
    appState.match.phase = 'NOT_STARTED';
    pushState();
}

window.resetInputs = function() {
    appState.teams.BLUE.players = ['', '', '', '', ''];
    appState.teams.RED.players = ['', '', '', '', ''];
    pushState();
}

window.switchInputs = function() {
    const temp = [...appState.teams.BLUE.players];
    appState.teams.BLUE.players = [...appState.teams.RED.players];
    appState.teams.RED.players = temp;
    pushState();
}

window.switchAll = function() {
    // Swap Teams completely
    const tempTeam = JSON.parse(JSON.stringify(appState.teams.BLUE));
    appState.teams.BLUE = JSON.parse(JSON.stringify(appState.teams.RED));
    appState.teams.RED = tempTeam;

    // Swap First Pick
    appState.match.firstPick = (appState.match.firstPick === 'BLUE') ? 'RED' : 'BLUE';
    
    pushState();
}

window.resetContent = function() {
    // Full Reset
    appState.match = {
        tournamentName: '',
        bestOf: 3,
        mode: 'BAN10',
        firstPick: 'BLUE',
        currentTurnIndex: 0,
        phase: 'NOT_STARTED'
    };
    appState.teams = {
        BLUE: { name: 'Blue Side', logo: '', players: ['', '', '', '', ''], score: 0 },
        RED: { name: 'Red Side', logo: '', players: ['', '', '', '', ''], score: 0 }
    };
    appState.draft.slots = {};
    pushState();
}

// Hides dropdown when clicked outside
document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('dropdown')) {
        const items = document.querySelectorAll('.dropdown-items');
        items.forEach(el => el.innerHTML = '');
    }
});

// START
startPolling();