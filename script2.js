alert(2)
console.log(parent.document.getElementsByTagName("a")[0])
parent.document
  .getElementsByTagName("body")[0]
  .insertAdjacentHTML(
    "afterend",
    "<img src='https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg' alt = 'cow'></img><div class='tenor-gif-embed' data-postid='27509497' data-share-method='host' data-aspect-ratio='1' data-width='100%'><a href='https://tenor.com/view/brian-family-guy-tiktok-funny-clip-tasty-sand-gif-27509497'>Brian Family Guy GIF</a>from <a href='https://tenor.com/search/brian-gifs'>Brian GIFs</a></div> <script type='text/javascript' async src='https://tenor.com/embed.js'></script>"
  )
alert(3)
