// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var uploadCipherBtn = document.getElementById("uploadCipher");
var uploadKeyImage = document.getElementById("uploadKeyImage");
var uploadPlainBtn = document.getElementById("uploadPlain");
var encryptBtn = document.getElementById("encrypt")
var decryptBtn = document.getElementById("decrypt")
var inpRecAdd = document.getElementById("inputRecAdd")
var userAddress = document.getElementById("userAddress");


const electron = require("electron")
const ipc = electron.ipcRenderer


decryptBtn.addEventListener("click", function(e){
  	console.log(inputRecAdd.value)
  	ipc.send('decrypt')
});

uploadKeyImage.addEventListener("click", function(e){
  	ipc.send('uploadKeyImage')
});

uploadCipherBtn.addEventListener("click", function(e){
  	ipc.send('uploadCipherImage')
});

uploadPlainBtn.addEventListener("click", function(e){
	console.log("renere.js")
  	ipc.send('uploadPlainBtn')
});

ipc.send('generateAddress')


encryptBtn.addEventListener("click", function(e){
  	console.log(inputRecAdd.value)
  	ipc.send('encrypt')
});




ipc.on('plainImgPath', function(event, arg){
	console.log(arg)
})

ipc.on('generateAddress', function(event, arg){
	console.log(event)
	console.log(arg)
	console.log("sexy")
	userAddress.innerHTML = "My Address: " + arg
})