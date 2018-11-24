mkdir .\dist\dist

robocopy .\dist\ .\dist\dist /xf "dist" "index.html" /mov

MOVE .\index.html .\dist