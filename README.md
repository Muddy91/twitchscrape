# twitchscrape
app for scraping twitch.tv profile using RoR and ReactJS 

### Installation
Install the dependencies and devDependencies and start the server.

Require chrome driver for Watir gem browser access:
```sh
$ sudo apt-get install chromium-chromedriver
$ sudo ln -s /usr/lib/chromium-browser/chromedriver /usr/bin/chromedriver
```

Require xvfb for Headless gem:
```sh
sudo apt-get install xvfb
``` 
### Development
TwitchScrape uses Rails as backend and ReactJS as frontend.
Open your favorite Terminal and run these commands.

First Tab /twitchscrape:
```sh
$ rails s -p 3001
```

Second Tab /twitchscrape/client:
```sh
$ npm start
```

### Preview
![alt text](https://raw.githubusercontent.com/cvesh/twitchscrape/master/public/twitchscrape-screenshot.jpg)