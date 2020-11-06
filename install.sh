sudo apt update
sudo apt install curl unclutter
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install nodejs
sudo apt install git
sudo git clone https://github.com/addoeventi/addo.tech-release.git /home/addo/
sudo npm i -g pm2
sudo pm2 start /home/addo/addo-totem/server/index.js name="Addo Totem API"
sudo pm2 save
sudo pm2 startup
sudo chmod +x /home/addo/addo-totem/start.sh
sudo chmod +x /home/addo/addo-totem/startup.sh
sudo cp /home/addo/addo-totem/start.sh.desktop ~/.config/autostart
sudo cp /home/addo/addo-totem/startup.sh.desktop ~/.config/autostart
sudo cp /home/addo/addo-totem/libautoreplyprint.so /usr/local/lib
sudo reboot