function generator() {
  var Word = Picks[Math.floor(Math.random()*(Picks.length))]

  document.getElementById("WordInput").innerHTML = Word.trim()
}
