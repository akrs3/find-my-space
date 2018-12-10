mkdir .\dist\dist

robocopy .\dist\ .\dist\dist /xf "dist" "index.html" /mov

copy .\src\firebase\firebaseManager.js .\dist\dist

REM MOVE .\index.html .\dist