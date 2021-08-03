# How to install Addo Tech
1. Install Ubuntu Mate
    **N.B.** Make sure to install the user with username **"addo"**
2. Install dependencies
    ```
    sudo apt update
    sudo apt install curl unclutter openssh-server
    sudo systemctl status ssh
    ```
2.  Install **NPM**
    ```
    sudo apt install npm
    ```
3. Install **NodeJS**
    ```
    sudo npm i n
    sudo n install 10.24.1
    ```
4. Install **Git**
    ```
    sudo apt install git
    ```
5. Clone the repository **"https://github.com/addoeventi/addo.tech-release.git"** in root folder
    ```
    sudo git lfs clone https://github.com/addoeventi/addo.tech-release.git /home/addo/
    ````
6. Install **PM2** 
    ```
    sudo npm i -g pm2
    ````
7. **Start server** on PM2
    ```
    sudo pm2 start /home/addo/addo-totem/server/index.js name="Addo Totem API"
    sudo pm2 save
    sudo pm2 startup
    ```
8. **Make executable on device startup** these files: "startup.sh" and "start.sh" 
    (you can find it in root of repository)
    ```
    sudo chmod +x /home/addo/addo-totem/start.sh
    sudo chmod +x /home/addo/addo-totem/startup.sh
    sudo cp /home/addo/addo-totem/start.sh.desktop ~/.config/autostart
    sudo cp /home/addo/addo-totem/startup.sh.desktop ~/.config/autostart
    ```
9. Copy printer library **libautoreplyprint.so** in **/usr/local/lib** 
    (you can find it in root of repository)
    ```
    sudo cp /home/addo/addo-totem/libautoreplyprint.so /usr/local/lib
    ```

# Automation
You can run this script after install Ubuntu Mate
```
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
```

**N.B.** You can run the file on root of repository named **"install.sh"** to run automed installation.
