# Bass Therapy Bot 

A Discord bot for my record label Bass Therapy. 

## Features

1. The user can enter an artist prefix and get the link for that particular artist. For example. If I wanted the Unnecessary Roughness SoundCloud Link I would use "ur-sc" and the bot will return that link. 

```javascript
const URL_PREFIX = "https://"
const SC_URL = "soundcloud.com/"
const UR_SC = "unnecessary-roughness-yyc"

    if (msg.content == `${UR_PREFIX}${SC_COMMAND}`) {
        msg.channel.send(`${URL_PREFIX}${SC_URL}${UR_SC}`)
    }
```

## SET UP 

### Download 

```bash
git clone https://github.com/teamallnighter/discord_bot_1.git

```

### INSTALL 

```bash
cd discord_bot_1
npm install 
```



### UP COMING FEATURES

#### RESOURCES 
