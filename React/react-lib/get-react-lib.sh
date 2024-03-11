#!/bin/bash
#don't forget to make this script file executable by the comand
#chmod u+x ./file-name.sh

#now yo can execute by typing ./file-name.sh

#downloads rect and rectdom into current directory
curl -L https://unpkg.com/react/umd/react.development.js > ./react.js
curl -L https://unpkg.com/react-dom/umd/react-dom.development.js > ./react-dom.js
curl -L https://unpkg.com/prop-types/prop-types.js > ./prop-types.js


#For curl in windows powershell use below commands (without the #)
#curl.exe https://unpkg.com/react/umd/react.development.js > ./react.js
#curl.exe https://unpkg.com/react-dom/umd/react-dom.development.js > ./react-dom.js
#curl.exe https://unpkg.com/prop-types/prop-types.js > ./prop-types.js