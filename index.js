require("./alive.js");
const { Client } = require("discord.js-selfbot-v13");

const client = new Client({
    checkUpdate: false,
});

const specificUserId = "1179811060606312642";
const sourceGuildId = "859129712030122025";
const targetGuildId = "1354922684739223632";

client.on("ready", async () => {
    console.log("Client is ready!");
});

client.on("messageCreate", async (message) => {
    if (
        message.guild &&
        message.guild.id === sourceGuildId &&
        message.author.id === specificUserId
    ) {
        try {
            const targetGuild = await client.guilds.fetch(targetGuildId);
            if (targetGuild) {
                const channel =
                    targetGuild.systemChannel || targetGuild.textChannels.cache.first();
                if (channel) {
                    await channel.send("@everyone Message from <@${specificUserId}>: ${message.content} !");
                } else {
                    console.log("No text channel found in target server!");
                }
            }
        } catch (err) {
            console.error("Error sending message to the target server:", err);
        }
    }
});

client.login(
    "MTE5NjU1MDY3NTIwMzYzNzI1OA.G3tM9t.w62QHLjngtf1fB8ch5aWCKbm4pjSMpQchT5beY",
);