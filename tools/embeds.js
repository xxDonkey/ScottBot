const { EmbedBuilder } = require("discord.js");

async function text_embed(text, client) {
    return new EmbedBuilder()
        .setDescription(text)
        .setColor('3498db');
}

function image_embed() {

}

module.exports = {
    text_embed,
    image_embed,
};