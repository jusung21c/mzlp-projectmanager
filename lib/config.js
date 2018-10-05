const remote = require('electron').remote
const main = remote.require('./mzlp-projectmanager.js')

var button = document.createElement('button')
button.textContent = "확인"
button.addEventListener('click',() => {
  main.openWindow('test')
},false)
document.body.appendChild(button)
