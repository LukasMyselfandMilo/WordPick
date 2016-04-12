function generator() {
  var Word = Picks[Math.floor(Math.random()*(Picks.length - 1))]
  document.getElementById("WordInput").innerHTML = Word
}
