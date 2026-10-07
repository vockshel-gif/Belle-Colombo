@echo off
title Belle Colombo Local Server
echo ========================================================
echo   Belle Colombo - High Performance Local Web Server
echo ========================================================
echo.
echo Starting local web server on http://localhost:8080 ...
echo Opening Admin Studio in your browser...
echo.
start http://localhost:8080/admin.html
python -m http.server 8080
if %ERRORLEVEL% NEQ 0 (
  echo Python server ended or unavailable, falling back to npx serve...
  npx serve -l 8080 .
)
pause
