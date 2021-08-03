sudo apt update -y
sudo apt install curl unclutter openssh-server -y
sudo systemctl status ssh
sudo ufw allow ssh
sudo apt install npm
sudo npm i n
sudo n install 10.24.1
curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash
sudo apt install nodejs git git-lfs -y
sudo git lfs clone https://github.com/addoeventi/addo.tech-release.git /home/addo/addo-totem
sudo cp /home/addo/addo-totem/libautoreplyprint.so /usr/local/lib
sudo npm i -g pm2
sudo pm2 start /home/addo/addo-totem/server/index.js --name="Addo Totem API"
sudo pm2 save
sudo pm2 startup
sudo pm2 save
sudo chmod +x /home/addo/addo-totem/start.sh
sudo chmod +x /home/addo/addo-totem/startup.sh
sudo mkdir ~/.config/autostart
sudo cp /home/addo/addo-totem/start.sh.desktop ~/.config/autostart
sudo cp /home/addo/addo-totem/startup.sh.desktop ~/.config/autostart
sudo reboot