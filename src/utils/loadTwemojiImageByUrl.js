const { loadImage } = require("canvas");

module.exports = async function loadTwemojiImageByUrl(url) {
  return new Promise(async (res) => {
    const image = await loadImage(url);

    return res(image);
  });
};
