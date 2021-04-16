const sleep = m => new Promise(r => setTimeout(r, m));
const alphabet = "abcdef";
var ChangeAuto = false;
var Frequency = 1;

function ChangeAutoCheck() {
	if (!ChangeAuto) { ChangeAuto = true; }
	else { ChangeAuto = false; }
}

function ChangeColor() {
	document.getElementById("colorbox").style.background='#' + RandomizeHex();
}

function ChangeColorAuto() {
(async () => {
	Frequency = document.querySelector("#Frequency").value;
    await sleep(Frequency * 1000)
	if(ChangeAuto) { ChangeColor(); }
	ChangeColorAuto();
})()
}

function RandomizeHex() {
	var Org = Math.floor(Math.random() * 25);
	var Hex;
	if (Org == 1) { Hex = Math.floor(Math.random() * 999999); }
	
	/* Script tests - 3 characters of a kind only using an alphabet var*/
	if (Org == 2) {
		var H3F = Math.floor(Math.random() * 999);
		var H3L = alphabet[Math.floor(Math.random() * alphabet.length)] + 
		alphabet[Math.floor(Math.random() * alphabet.length)] + 
		alphabet[Math.floor(Math.random() * alphabet.length)];
		
		Hex = H3F + "" + H3L;
	}
	
	if (Org == 3) {
		var H3L = Math.floor(Math.random() * 999);
		var H3F = alphabet[Math.floor(Math.random() * alphabet.length)] + 
		alphabet[Math.floor(Math.random() * alphabet.length)] + 
		alphabet[Math.floor(Math.random() * alphabet.length)];
		
		Hex = H3F + "" + H3L;
	}
	
	/* Completely random by Math.Random */
	if (Org > 3) { Hex = (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6); }
	
	return Hex;
}