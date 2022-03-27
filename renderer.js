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
var uploadBtn = document.getElementById("upload");
const electron = require("electron")
const ipc = electron.ipcRenderer


if(uploadBtn !== null){
	uploadBtn.addEventListener("click", function(e){
	sendgui = document.getElementById("sendgui")

	var bottom = document.getElementById("bottom")

	if(bottom !== null){
		while(bottom.firstChild){
			bottom.removeChild(bottom.firstChild)
		}
		bottom.parentNode.removeChild((bottom.parentNode).lastChild)
	}

	var bottomsend = document.createElement("div")
	bottomsend.id = "bottom"
	bottomsend.className = "bottom"

	var bottomin = document.createElement("input")
	bottomin.type = "input"
	bottomin.placeholder="Recipient's Address"
	bottomin.name = "recipientAddress"
	bottomsend.appendChild(bottomin)

	var encrypt = document.createElement("button")
	encrypt.className="encrypt"
	encrypt.innerHTML="Encrypt"
	bottomsend.appendChild(encrypt)

	sendgui.appendChild(bottomsend)
	console.log("renere.js")
  	ipc.send('upload')
	  
	});
}

