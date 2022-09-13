const { EmbedBuilder } = require("discord.js");

function text_embed(text) {
    return new EmbedBuilder()
        .setDescription(text)
        .setColor('#2025c7');
}

function image_embed() {

}

module.exports = {
    text_embed,
    image_embed,
};