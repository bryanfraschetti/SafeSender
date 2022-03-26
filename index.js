var send = document.getElementById("send");
var receive = document.getElementById("receive");


send.addEventListener("click", function(){

	console.log("send button")
	var sendgui = document.getElementById("sendgui")

	while(sendgui.firstChild){
		sendgui.removeChild(sendgui.firstChild)
	}

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

	senduploadbtn.addEventListener("click", function(){
		sendgui = document.getElementById("sendgui")

		var bottomsend = document.createElement("div")
		bottomsend.className = "bottom"

		var bottomin = document.createElement("input")
		bottomin.type = "input"
		bottomin.placeholder="Recipient's Address"
		bottomin.name = "recipientAddress"
		bottomsend.appendChild(bottomin)

		sendgui.appendChild(bottomsend)

	})
})





receive.addEventListener("click", function(){
	console.log("send button")
})


