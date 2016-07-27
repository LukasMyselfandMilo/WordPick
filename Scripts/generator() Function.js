function generator() {
  var Word = Picks[Math.floor(Math.random()*(Picks.length))]
  Word = Word.replace(" ", "")
  document.getElementById("WordInput").innerHTML = Word.trim()
}
