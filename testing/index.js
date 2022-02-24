const { generateCard, Options } = require('../lib');
const { writeFileSync } = require('fs');
const { join } = require('path');

function path(...s) {
  return join(__dirname, ...s);
}

(async () => {
  /** @type {Options} */
  const opts = {
    name: 'Plasma',
    tag: '3518',
    description:
      'Easy to setup • Reliable • FREE! - create a giveaway in your server, manage peoples invites, and use our FREE levelling system!',
    status: 'streaming',
    guilds: 254434,
    votes: 89123,
    library: 'discord.js',
    botList: 'yourBotList.xyz',
  };

  try {
    var card = await generateCard('small', opts);
    writeFileSync(path('images/small.png'), card.toBuffer('image/png'));
  } catch (e) {
    writeFileSync(path('images/small.png'), e + '');
  }

  try {
    card = await generateCard('long', opts);
    writeFileSync(path('images/long.png'), card.toBuffer('image/png'));
  } catch (e) {
    writeFileSync(path('images/long.png'), e + '');
  }

  try {
    card = await generateCard('big', opts);
    writeFileSync(path('images/big.png'), card.toBuffer('image/png'));
  } catch (e) {
    writeFileSync(path('images/big.png'), e + '');
  }
})();
