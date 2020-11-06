# How to install Addo Tech
1. Install Ubuntu Mate
    **N.B.** Make sure to install the user with username **"addo"**
2. Install dependencies
    ```
    sudo apt update
    sudo apt install curl unclutter
    ```
2. Install **NodeJS**
    ```
    curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt install nodejs
    ```
3. Install **Git**
    ```
    sudo apt install git
    ```
4. Clone the repository **"https://github.com/addoeventi/addo.tech-release.git"** in root folder
    ```
    sudo git clone https://github.com/addoeventi/addo.tech-release.git /home/addo/
    ````
5. Install **PM2** 
    ```
    sudo npm i -g pm2
    ````
6. **Start server** on PM2
    ```
    sudo pm2 start /home/addo/addo-totem/server/index.js name="Addo Totem API"
    sudo pm2 save
    sudo pm2 startup
    ```
7. **Make executable on device startup** these files: "startup.sh" and "start.sh" 
    (you can find it in root of repository)
    ```
    sudo chmod +x /home/addo/addo-totem/start.sh
    sudo chmod +x /home/addo/addo-totem/startup.sh
    sudo cp /home/addo/addo-totem/start.sh.desktop ~/.config/autostart
    sudo cp /home/addo/addo-totem/startup.sh.desktop ~/.config/autostart
    ```
8. Copy printer library **libautoreplyprint.so** in **/usr/local/lib** 
    (you can find it in root of repository)
    ```
    sudo cp /home/addo/addo-totem/libautoreplyprint.so /usr/local/lib
    ```

# Automation
You can run this script after install Ubuntu Mate
```
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
sudo reboot
```

**N.B.** You can run the file on root of repository named **"install.sh"** to run automed installation.