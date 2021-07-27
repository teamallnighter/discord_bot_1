require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client({
    partials: ["MESSAGE"]
})

const BOT_PREFIX = "!"
const FAM_ME_COMMAND = "fam-me"

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

    if (msg.content === `${BOT_PREFIX}${FAM_ME_COMMAND}`) {
        modUser(msg.member)
    }

    if (msg.content == "$Soundcloud") {
        msg.channel.send("soundcloud.com/unnecessary-roughness-yyc")
    }

    if (msg.content == "$Twitter") {
        msg.channel.send("twitter.com/unnecessaryrou4")
    }

    if (msg.content == "$Facebook") {
        msg.channel.send("facebook.com/unnecessaryroughnessmusic")
    }

    if (msg.content == "$Instagram") {
        msg.channel.send("instagram.com/unnecessary_roughness403/")
    }

    if (msg.content == "Give me socials") {
        msg.channel.send("Use the dollar sign and then whatever social site you want.")
    }
})

function modUser(member) {
    member.roles.add("857583956400799776")
}

client.login(process.env.BOT_TOKEN)