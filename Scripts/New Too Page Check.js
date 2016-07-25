      start()
      function start(){
      var LastPick = getCookie("LastPick")
      if (LastPick == null)
      {
        idCookie('LastPick')

      }
      else
      {
        var json_str = getCookie('LastPick')
        var Picks = JSON.parse(json_str)
        document.getElementById("List").value = Picks
        generator()
      }
      }
