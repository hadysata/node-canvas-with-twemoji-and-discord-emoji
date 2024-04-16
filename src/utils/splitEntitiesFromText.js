const { parse } = require('twemoji');

/*
 * Split Text
 * ex) 
 *  '君👼の味方🤝だよ'
 *  > ['君', TwemojiObj(👼), 'の味方', TwemojiObj(🤝), 'だよ']
 */

const discordEmojiPattern = "<a?:\\w+:(\\d{17,19})>";

function parseDiscordEmojis(textEntities) {
  const newTextEntities = [];

  for (const entity of textEntities) {
    if (typeof entity === "string")
      for (const word of entity.replace(new RegExp(discordEmojiPattern, "g"), "\u200b$&\u200b").split("\u200b")) {
        const match = word.match(new RegExp(discordEmojiPattern));
        newTextEntities.push(match ? { url: `https://cdn.discordapp.com/emojis/${match[1]}.png` } : word);
      }

    else newTextEntities.push(entity);
  }

  return newTextEntities;
}

module.exports = function splitEntitiesFromText(text) {
  const twemojiEntities = parse(text, { ext: ".png", base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/' });

  console.log(twemojiEntities);

  return parseDiscordEmojis([twemojiEntities.src]);
}
