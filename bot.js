require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client({
    partials: ["MESSAGE"]
})

const BOT_PREFIX = "!"
const FAM_ME_COMMAND = "fam-me"
//ARTIST PREFIXS
const UR_PREFIX = "ur-"
const SVB_PREFIX = "svb-"
//SOCIAL COMMANDS
const SC_COMMAND = "sc"
const TWT_COMMAND = "twt"
const FB_COMMAND = "fb"
const IG_COMMAND = "ig"
//HTTPS
const URL_PREFIX = "https://"
//Social Links
const SC_URL = "soundcloud.com/"
const TWT_URL = "twitter.com/"
const FB_URL = "facebook.com/"
const IG_URL = "instagram.com/"
//Unnecessary Roughness Links
const UR_SC = "unnecessary-roughness-yyc"
const UR_TWT = "unnecessaryrou4"
const UR_FB = "unnecessaryroughnessmusic"
const UR_IG = "unnecessary_roughness403/"
//SVBHERTZ Links
const SVB_SC = "svbhertz"
const SVB_FB = "SVBHERTZ"

client.on("ready", () => {
    console.log("Our bot is ready to go!!!!")
})

client.on("messageDelete", msg => {
    msg.channel.send("Stop deleting messages")
})

client.on("message", msg => {
    if (msg.content == "Fuck me up bass daddy") {
        msg.react("❤️")
    }

    if (msg.content == "svbhertz") {
        msg.react("❤️")
    }

    if (msg.content == "SVBHERTZ") {
        msg.react("❤️")
    }

    if (msg.content === `${BOT_PREFIX}${FAM_ME_COMMAND}`) {
        modUser(msg.member)
    }

    if (msg.content == `${UR_PREFIX}${SC_COMMAND}`) {
        msg.channel.send(`${URL_PREFIX}${SC_URL}${UR_SC}`)
    }

    if (msg.content == `${UR_PREFIX}${TWT_COMMAND}`) {
        msg.channel.send(`${URL_PREFIX}${TWT_URL}${UR_TWT}`)
    }

    if (msg.content == `${UR_PREFIX}${FB_COMMAND}`) {
        msg.channel.send(`${URL_PREFIX}${FB_URL}${UR_FB}`)
    }

    if (msg.content == `${UR_PREFIX}${IG_COMMAND}`) {
        msg.channel.send(`${URL_PREFIX}${IG_URL}${UR_IG}`)
    }

    if (msg.content == `${SVB_PREFIX}${SC_COMMAND}`) {
        msg.channel.send(`${URL_PREFIX}${SC_URL}${SVB_SC}`)
    }

    if (msg.content == `${SVB_PREFIX}${FB_COMMAND}`) {
        msg.channel.send(`${URL_PREFIX}${FB_URL}${SVB_FB}`)
    }
})

function modUser(member) {
    member.roles.add("857583956400799776")
}

client.login(process.env.BOT_TOKEN)