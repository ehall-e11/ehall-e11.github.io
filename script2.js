alert(2)
console.log(parent.document.getElementsByTagName("a")[0])
parent.document.getElementsByTagName("body")[0].innerHTML = parent.document
  .getElementsByTagName("body")[0]
  .insertAdjacentHTML(
    "afterend",
    "<img src='https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg' alt = 'cow'></img>"
  )
alert(3)
