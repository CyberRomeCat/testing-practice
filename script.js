function capitalize(word) {
  let capitalize = word[0].toUpperCase() + word.slice(1);
  return capitalize;
}

module.exports = capitalize;
