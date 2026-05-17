@echo off
title MLBB Draft Pick - WebSocket Server
color 0A
echo.
echo  ================================================
echo   MLBB Draft Pick — WebSocket Server
echo  ================================================
echo.
echo  Menginstall dependencies (hanya sekali)...
call npm install
echo.
echo  Menjalankan server...
echo  Tekan Ctrl+C untuk menghentikan server
echo.
node server.js
pause
