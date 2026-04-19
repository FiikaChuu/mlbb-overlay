const WebSocket = require('ws');

const PORT = 3000;
const wss = new WebSocket.Server({ port: PORT });

// Tangani error port konflik atau error lainnya
wss.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`\n❌ ERROR: Port ${PORT} sudah dipakai oleh program lain!`);
        console.error(`   Solusi: Tutup program yang memakai port ${PORT}, lalu jalankan ulang.\n`);
    } else {
        console.error('❌ Server error:', err.message);
    }
    process.exit(1);
});

// Simpan state terkini agar client baru (display) langsung dapat data
let lastState = null;

wss.on('connection', (ws) => {
    console.log(`[+] Client terhubung  (total: ${wss.clients.size})`);

    // Kirim state terkini ke client yang baru connect (e.g. display baru dibuka)
    if (lastState) {
        ws.send(JSON.stringify({ type: 'state', data: lastState }));
    }

    ws.on('message', (rawMessage) => {
        try {
            const msg = JSON.parse(rawMessage);

            if (msg.type === 'update') {
                lastState = msg.data;

                // Broadcast ke SEMUA client yang terhubung (display, dll)
                const payload = JSON.stringify({ type: 'state', data: lastState });
                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(payload);
                    }
                });
            }
        } catch (err) {
            console.error('Error parsing message:', err.message);
        }
    });

    ws.on('close', () => {
        console.log(`[-] Client terputus (total: ${wss.clients.size})`);
    });

    ws.on('error', (err) => {
        console.error('WebSocket client error:', err.message);
    });
});

console.log('');
console.log('╔══════════════════════════════════════════════╗');
console.log('║   MLBB Draft Pick — WebSocket Server         ║');
console.log(`║   Berjalan di: ws://localhost:${PORT}           ║`);
console.log('╠══════════════════════════════════════════════╣');
console.log('║  CARA PAKAI:                                 ║');
console.log('║  1. Buka index.html  → Control Panel        ║');
console.log('║  2. Buka display.html di vMix Web Browser   ║');
console.log('╚══════════════════════════════════════════════╝');
console.log('');
