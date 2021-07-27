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

    if (msg.content == "Give me music") {
        msg.channel.send("soundcloud.com/unnecessary-roughness-yyc")
    }
})

function modUser(member) {
    member.roles.add("857583956400799776")
}

client.login(process.env.BOT_TOKEN)