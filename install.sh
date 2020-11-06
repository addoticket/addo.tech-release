sudo apt update
sudo apt install curl unclutter
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install nodejs
sudo apt install git
sudo git clone https://github.com/addoeventi/addo.tech-release.git /home/addo/
sudo npm i -g pm2
sudo pm2 start /home/addo/addo-totem/server/index.js name="Addo Totem API"
sudo cp /home/addo/addo-totem/start.sh.desktop ~/.config/autostart
sudo cp /home/addo/addo-totem/startup.sh.desktop ~/.config/autostart
sudo reboot