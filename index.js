function kataEkspresiRandom() {
  let kata = ['marah', 'senang', 'sedih', 'kecewa', 'takut'];
  return kata[Math.floor(Math.random()*kata.length)];
}

module.exports = kataEkspresiRandom;
