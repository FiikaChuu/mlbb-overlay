// ============================================================
// HERO DATABASE
// Kolom `sound`: isi path file audio jika ada, atau null jika belum ada
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
// STATE APLIKASI
// Semua data di sini yang akan di-sync ke display via WebSocket
// ============================================================
const appState = {
    slots:         {},   // key: 1-20 → { name, img, sound } atau null
    teams:         { blue: 'Blue Side', red: 'Red Side' },
    logos:         { image1: null, image2: null }, // base64 data URL
    nicknames:     {},   // key: 1-10 → string
    wins:          {},   // key: 1-6  → boolean
    tournamentName: ''
};

// Inisialisasi nilai default
for (let i = 1; i <= 20; i++) appState.slots[i]     = null;
for (let i = 1; i <= 10; i++) appState.nicknames[i]  = '';
for (let i = 1; i <= 6;  i++) appState.wins[i]       = false;

// ============================================================
// WEBSOCKET CLIENT (Control Panel → Server → Display)
// Ganti 'localhost' dengan IP PC server jika berbeda jaringan
// ============================================================
const WS_URL = 'ws://localhost:3000';
let wsClient = null;

function initWebSocket() {
    try {
        wsClient = new WebSocket(WS_URL);

        wsClient.onopen = () => {
            console.log('✅ Control terhubung ke WebSocket server');
            sendState(); // Kirim state awal saat connect
        };

        wsClient.onclose = () => {
            console.warn('⚠️ WebSocket terputus, reconnect dalam 3 detik...');
            setTimeout(initWebSocket, 3000);
        };

        wsClient.onerror = () => {
            // Ditangani oleh onclose
        };

    } catch (e) {
        console.warn('WebSocket tidak bisa connect, pastikan server.js berjalan');
        setTimeout(initWebSocket, 5000);
    }
}

function sendState() {
    if (wsClient && wsClient.readyState === WebSocket.OPEN) {
        wsClient.send(JSON.stringify({ type: 'update', data: appState }));
    }
}

// ============================================================
// DROPDOWN FILTER
// ============================================================
function filterDropdown(id) {
    const searchInput  = document.getElementById(`search-${id}`).value.toLowerCase();
    const dropdownItems = document.getElementById(`dropdown-items-${id}`);
    dropdownItems.innerHTML = '';

    heroes
        .filter(hero => hero.name.toLowerCase().includes(searchInput))
        .forEach(hero => {
            const item = document.createElement('div');
            item.classList.add('dropdown-item');
            item.textContent = hero.name;
            item.onclick = () => selectHero(hero, id);
            dropdownItems.appendChild(item);
        });
}

// ============================================================
// HERO SELECTION
// ============================================================
function selectHero(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    const existingImage = imageDisplay.querySelector('img');

    if (existingImage) {
        existingImage.classList.add('fly-out');
        setTimeout(() => updateHeroImage(hero, id), 500);
    } else {
        updateHeroImage(hero, id);
    }
}

function updateHeroImage(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    imageDisplay.innerHTML = `<img src="${hero.img}" alt="${hero.name}" class="fly-in">`;
    document.getElementById(`search-${id}`).value = hero.name;
    document.getElementById(`dropdown-items-${id}`).innerHTML = '';

    // Play suara hero jika tersedia
    if (hero.sound) {
        const audio = new Audio(hero.sound);
        audio.play().catch(() => {});
    }

    // Update state & kirim ke display
    appState.slots[id] = { name: hero.name, img: hero.img, sound: hero.sound };
    sendState();
}

// ============================================================
// RESET
// ============================================================
function resetAllDropdowns() {
    for (let i = 1; i <= 20; i++) {
        const imageDisplay = document.getElementById(`image-display-${i}`);
        const img = imageDisplay.querySelector('img');
        if (img) img.classList.add('fly-out');

        setTimeout(() => {
            document.getElementById(`search-${i}`).value = '';
            imageDisplay.innerHTML = '';
            document.getElementById(`dropdown-items-${i}`).innerHTML = '';
        }, 500);

        appState.slots[i] = null;
    }
    sendState();
}

// ============================================================
// NICKNAME
// ============================================================
function updateOutput() {
    for (let i = 1; i <= 10; i++) {
        const val = document.getElementById('input' + i).value;
        document.getElementById('output' + i).textContent = ` ${val}`;
        appState.nicknames[i] = val;
    }
    sendState();
}

function resetInputs() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById('input' + i).value = '';
        document.getElementById('output' + i).textContent = ' ';
        appState.nicknames[i] = '';
    }
    sendState();
}

function switchInputs() {
    for (let i = 1; i <= 5; i++) {
        const temp = document.getElementById('input' + i).value;
        document.getElementById('input' + i).value = document.getElementById('input' + (i + 5)).value;
        document.getElementById('input' + (i + 5)).value = temp;
    }
    updateOutput(); // sudah include sendState
}

// ============================================================
// TEAM INFO
// ============================================================
function swapContent() {
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;

    const tempLogo = appState.logos.image1;
    appState.logos.image1 = appState.logos.image2;
    appState.logos.image2 = tempLogo;

    const d1 = document.getElementById('teamNameDisplay1');
    const d2 = document.getElementById('teamNameDisplay2');
    const tempName = d1.textContent;
    d1.textContent = d2.textContent;
    d2.textContent = tempName;

    sendState();
}

function loadImage(event, imgId) {
    const img  = document.getElementById(imgId);
    const file = event.target.files[0];
    if (!file) return;

    // Konversi ke base64 agar bisa dikirim via WebSocket ke display
    const reader = new FileReader();
    reader.onload = function(e) {
        img.src = e.target.result;
        appState.logos[imgId] = e.target.result;
        sendState();
    };
    reader.readAsDataURL(file);
}

function updateTeamName() {
    const t1 = document.getElementById('team1').value;
    const t2 = document.getElementById('team2').value;
    document.getElementById('teamNameDisplay1').textContent = t1 || 'Blue Side';
    document.getElementById('teamNameDisplay2').textContent = t2 || 'Red Side';
    appState.teams.blue = t1 || 'Blue Side';
    appState.teams.red  = t2 || 'Red Side';
    sendState();
}

function resetContent() {
    document.getElementById('team1').value = '';
    document.getElementById('team2').value = '';
    document.getElementById('teamNameDisplay1').textContent = 'Blue Side';
    document.getElementById('teamNameDisplay2').textContent = 'Red Side';
    appState.teams = { blue: 'Blue Side', red: 'Red Side' };

    document.getElementById('image1').src = 'https://via.placeholder.com/300x200?text=Image+1';
    document.getElementById('image2').src = 'https://via.placeholder.com/300x200?text=Image+2';
    document.getElementById('file1').value = '';
    document.getElementById('file2').value = '';
    appState.logos = { image1: null, image2: null };

    for (let i = 1; i <= 6; i++) {
        document.getElementById('checkbox' + i).checked = false;
        document.getElementById('extraImage' + i).style.display = 'block';
        appState.wins[i] = false;
    }
    sendState();
}

function toggleImage(imageId) {
    const idx      = parseInt(imageId.replace('extraImage', ''));
    const image    = document.getElementById(imageId);
    const checkbox = document.getElementById('checkbox' + idx);
    image.style.display  = checkbox.checked ? 'block' : 'none';
    appState.wins[idx]   = checkbox.checked;
    sendState();
}

function switchAll() {
    // Swap nama tim
    const t1 = document.getElementById('team1');
    const t2 = document.getElementById('team2');
    const tempName = t1.value;
    t1.value = t2.value;
    t2.value = tempName;
    updateTeamName(); // include sendState

    // Swap logo visual
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;

    const tempLogo = appState.logos.image1;
    appState.logos.image1 = appState.logos.image2;
    appState.logos.image2 = tempLogo;

    // Swap checkbox & wins
    for (let i = 1; i <= 3; i++) {
        const cbA  = document.getElementById('checkbox' + i);
        const cbB  = document.getElementById('checkbox' + (i + 3));
        const imgA = document.getElementById('extraImage' + i);
        const imgB = document.getElementById('extraImage' + (i + 3));

        const tempChecked = cbA.checked;
        cbA.checked = cbB.checked;
        cbB.checked = tempChecked;

        imgA.style.display  = cbA.checked ? 'block' : 'none';
        imgB.style.display  = cbB.checked ? 'block' : 'none';
        appState.wins[i]     = cbA.checked;
        appState.wins[i + 3] = cbB.checked;
    }
    sendState();
}

// ============================================================
// TOURNAMENT NAME
// ============================================================
const tournamentnameInput  = document.getElementById('tournamentnamemid');
const tournamentnameOutput = document.getElementById('tournamentnameOutput');

tournamentnameInput.addEventListener('input', function() {
    tournamentnameOutput.textContent = tournamentnameInput.value;
    appState.tournamentName = tournamentnameInput.value;
    sendState();
});

// ============================================================
// START — inisialisasi WebSocket saat halaman dimuat
// ============================================================
initWebSocket();

// ============================================================
// COUNTDOWN DISPLAY LOOP — update angka + bar di control panel (tiap 100ms)
// ============================================================
setInterval(() => {
    const cd = appState.countdown;
    if (!cd) return;

    let remainingMs;
    if (cd.running && cd.startedAt !== null) {
        remainingMs = (cd.totalSeconds * 1000) - (Date.now() - cd.startedAt);
    } else {
        remainingMs = cd.pausedAt !== null ? cd.pausedAt : cd.totalSeconds * 1000;
    }
    remainingMs = Math.max(0, remainingMs);

    const totalMs = cd.totalSeconds * 1000;
    const percent = totalMs > 0 ? (remainingMs / totalMs) * 100 : 0;
    const secs    = Math.ceil(remainingMs / 1000);

    // Update angka detik
    const secsEl = document.getElementById('ctrlCountdownSecs');
    if (secsEl) secsEl.textContent = secs;

    // Update bar kiri & kanan
    const fillL = document.getElementById('ctrlFillLeft');
    const fillR = document.getElementById('ctrlFillRight');
    if (fillL) fillL.style.width = percent + '%';
    if (fillR) fillR.style.width = percent + '%';

    // Dot: urgent saat < 10 detik dan sedang berjalan
    const dot = document.getElementById('ctrlDot');
    if (dot) {
        if (secs <= 10 && cd.running) {
            dot.classList.add('urgent');
            secsEl && secsEl.classList.add('urgent');
        } else {
            dot.classList.remove('urgent');
            secsEl && secsEl.classList.remove('urgent');
            dot.style.backgroundColor = secs <= 10 ? '#ff0000' : '#ff2200';
            dot.style.boxShadow       = secs <= 10 ? '0 0 10px #ff0000' : '0 0 6px #ff3300';
        }
    }
}, 100);