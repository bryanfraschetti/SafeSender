var send = document.getElementById("send");
var receive = document.getElementById("receive");
var bottomSend = document.getElementById("bottomSend");
var middleSend = document.getElementById("middleSend");
var bottomReceive = document.getElementById("bottomReceive");
var middleReceive = document.getElementById("middleReceive");

function activateSend(){
	bottomSend.style.display = "block"
	middleSend.style.display = "block"
	send.style.backgroundColor = "rgb(0,200,0)"
}

function deactivateSend(){
	bottomSend.style.display = "none"
	middleSend.style.display = "none"
	send.style.backgroundColor = "rgb(0,150,0)"
}

function activateReceive(){
	bottomReceive.style.display = "block"
	middleReceive.style.display = "block"
	receive.style.backgroundColor = "rgb(0,200,0)"
}

function deactivateReceive(){
	bottomReceive.style.display = "none"
	middleReceive.style.display = "none"
	receive.style.backgroundColor = "rgb(0,150,0)"
}

send.addEventListener("click", function(){
	console.log("send button")
	activateSend()
	deactivateReceive()

})


receive.addEventListener("click", function(){
	activateReceive()
	deactivateSend()
})



