var spinList = [];
var bestNumber = null;

function addSpin() {
	var spinInput = document.getElementById("spin").value;
	spinList.push(parseInt(spinInput));
	document.getElementById("spinList").innerHTML += "<li>" + spinInput + "</li>";
	document.getElementById("spin").value = "";
}

function calculateBestNumber() {
	if (spinList.length == 0) {
		document.getElementById("bestNumber").innerHTML = "Please enter at least one spin.";
		return;
	}
	
	var spinCounts = {};
	for (var i = 0; i < spinList.length; i++) {
		var spin = spinList[i];
		if (spinCounts[spin] == undefined) {
			spinCounts[spin] = 1;
		} else {
			spinCounts[spin]++;
		}
	}
	
	var maxCount = 0;
	for (var spin in spinCounts) {
		if (spinCounts[spin] > maxCount) {
			maxCount = spinCounts[spin];
			bestNumber = spin;
		}
	}
	
	document.getElementById("bestNumber").innerHTML = "The best number to bet on is " + bestNumber + ".";
}
