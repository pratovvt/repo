let name_inchat = document.querySelector('#name_inchat');
let name_bot_text = document.querySelector('#name_bot_text');
name_bot_text.textContent = name_inchat.value;

name_inchat.addEventListener('input', function() {
	name_bot_text.textContent = name_inchat.value;
});

window.addEventListener("load", startup, false);

function startup() {
	let backColorInput = document.querySelector("#backColorInput");
	backColorInput.value = "#ffffff";
	backColorInput.addEventListener("input", updateBackColor, false);
	backColorInput.select();

	let botTextInput = document.querySelector("#botTextInput");
	botTextInput.value = "#FFFFFF";
	botTextInput.addEventListener("input", updateBotText, false);
	botTextInput.select();

	let botBackInput = document.querySelector("#botBackInput");
	botBackInput.value = "#6E48AA";
	botBackInput.addEventListener("input", updateBotBackInput, false);
	botBackInput.select();

	let userTextInput = document.querySelector("#userTextInput");
	userTextInput.value = "#4A4A4A";
	userTextInput.addEventListener("input", updateUserText, false);
	userTextInput.select();

	let userBackInput = document.querySelector("#userBackInput");
	userBackInput.value = "#FFFFFF";
	userBackInput.addEventListener("input", updateUserBackInput, false);
	userBackInput.select();

	let backHeaderInput = document.querySelector("#backHeaderInput");
	backHeaderInput.value = "#6E48AA";
	backHeaderInput.addEventListener("input", updateChatBotHeader, false);
	backHeaderInput.select();


	let textHeaderInput = document.querySelector("#textHeaderInput");
	textHeaderInput.value = "#ffffff";
	textHeaderInput.addEventListener("input", updateChatBotHeaderText, false);
	textHeaderInput.select();
}

function updateBotText(event) {
	document.querySelectorAll(".message-bot-text").forEach((p) => {
		p.style.color = event.target.value;
	});
	document.querySelectorAll(".chatBotButton").forEach((p) => {
		p.style.color = event.target.value;
	});
}


function updateUserText(event) {
	document.querySelectorAll(".message-user-text").forEach((p) => {
		p.style.color = event.target.value;
	});
}

function updateUserBackInput(event) {
	document.querySelectorAll(".message-user-text").forEach((p) => {
		p.style.background = event.target.value;
	});
}

function updateChatBotHeader(event) {
	document.querySelectorAll(".chatBotHeader").forEach((p) => {
		p.style.background = event.target.value;
	});
}
function updateChatBotHeaderText(event) {
	document.querySelectorAll(".chatBotHeaderText").forEach((p) => {
		p.style.color = event.target.value;
	});
}

function updateBackColor(event) {
	document.querySelectorAll(".chat-bot-container").forEach((p) => {
		p.style.background = event.target.value;
	});
}

function updateBotBackInput(event) {
	document.querySelectorAll(".message-bot-text").forEach((p) => {
		p.style.background = event.target.value;
	});
	document.querySelectorAll(".chatBotButton").forEach((p) => {
		p.style.background = event.target.value;
	});
}



