function idCookie(cookieName) {
inputId = 'List'
var input = document.getElementById(inputId).value
input = input.replace("\"", "");
Picks = input.split(",")
var cookieOutput = JSON.stringify(Picks)

createCookie(cookieName, "", -1)
createCookie(cookieName, cookieOutput, 30)
 generator()
}
