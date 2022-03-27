var send = document.getElementById("send");
var receive = document.getElementById("receive");

send.addEventListener("click", function(){

	console.log("send button")
	var sendgui = document.getElementById("sendgui")
	var receivegui = document.getElementById("receivegui")

	while(sendgui.firstChild){
		sendgui.removeChild(sendgui.firstChild)
	}

	while(receivegui.firstChild){
		receivegui.removeChild(receivegui.firstChild)
	}

	var sendbtn = document.getElementById("send")
	sendbtn.style.background = "rgb(0,150,0)"

	var receivebtn = document.getElementById("receive")
	receivebtn.style.background = "rgb(0,70,0)"

	var midsend = document.createElement("div")
	midsend.className = "middle"

	var midsendp = document.createElement("p")
	midsendp.innerHTML="Upload your super secret image"
	midsend.appendChild(midsendp)

	var senduploadbtn = document.createElement("button")
	senduploadbtn.id = "upload"
	senduploadbtn.className = "upload"
	senduploadbtn.innerHTML = "Upload"
	midsend.appendChild(senduploadbtn)

	sendgui.appendChild(midsend)

	// senduploadbtn.addEventListener("click", function(){
	// 	sendgui = document.getElementById("sendgui")

	// 	var bottom = document.getElementById("bottom")

	// 	if(bottom !== null){
	// 		while(bottom.firstChild){
	// 			bottom.removeChild(bottom.firstChild)
	// 		}
	// 		bottom.parentNode.removeChild((bottom.parentNode).lastChild)
	// 	}

	// 	var bottomsend = document.createElement("div")
	// 	bottomsend.id = "bottom"
	// 	bottomsend.className = "bottom"

	// 	var bottomin = document.createElement("input")
	// 	bottomin.type = "input"
	// 	bottomin.placeholder="Recipient's Address"
	// 	bottomin.name = "recipientAddress"
	// 	bottomsend.appendChild(bottomin)

	// 	var encrypt = document.createElement("button")
	// 	encrypt.className="encrypt"
	// 	encrypt.innerHTML="Encrypt"
	// 	bottomsend.appendChild(encrypt)

	// 	sendgui.appendChild(bottomsend)
	// })
})



receive.addEventListener("click", function(){
	console.log("receive button")

	var sendgui = document.getElementById("sendgui")
	var receivegui = document.getElementById("receivegui")

	while(sendgui.firstChild){
		sendgui.removeChild(sendgui.firstChild)
	}

	while(receivegui.firstChild){
		receivegui.removeChild(receivegui.firstChild)
	}
	
	var sendbtn = document.getElementById("send")
	sendbtn.style.background = "rgb(0,70,0)"

	var receivebtn = document.getElementById("receive")
	receivebtn.style.background = "rgb(0,150,0)"

	var midrec = document.createElement("div")
	midrec.className = "middle"

	var midrecp = document.createElement("p")
	midrecp.innerHTML="Upload your super secret image"
	midrec.appendChild(midrecp)

	var recuploadbtn = document.createElement("button")
	recuploadbtn.id = "upload"
	recuploadbtn.className = "upload"
	recuploadbtn.innerHTML = "Upload"
	midrec.appendChild(recuploadbtn)

	receivegui.appendChild(midrec)

	recuploadbtn.addEventListener("click", function(){
		receivegui = document.getElementById("receivegui")

		var bottom = document.getElementById("bottom")
		if(bottom !== null){
			while(bottom.firstChild){
				bottom.removeChild(bottom.firstChild)
			}
			bottom.parentNode.removeChild((bottom.parentNode).lastChild)
		}

		var bottomrec = document.createElement("div")
		bottomrec.id = "bottom"
		bottomrec.className = "bottom"

		var bottomin = document.createElement("input")
		bottomin.type = "input"
		bottomin.placeholder="Key"
		bottomin.name = "key"
		bottomrec.appendChild(bottomin)

		var decrypt = document.createElement("button")
		decrypt.className="decrypt"
		decrypt.innerHTML="Decrypt"
		bottomrec.appendChild(decrypt)

		receivegui.appendChild(bottomrec)

	})
})