function predictPartyVictory(senate) {
	if (senate.length <= 2) return senate[0] === "D" ? "Dire" : "Radiant";

	let voices = { D: 0, R: 0 };
	while (senate.includes("D") && senate.includes("R")) {
		let turn = "";
		voices = { D: 0, R: 0 };
		for (const letter of senate) {
			switch (letter) {
				case "D":
					if (voices.R != 0) {
						voices.R--;
						break;
					}
					voices.D++;
					turn += letter;
					break;

				case "R":
					if (voices.D != 0) {
						voices.D--;
						break;
					}
					voices.R++;
					turn += letter;
					break;
			}
		}
		while (voices.D != 0 || voices.R != 0) {
			for (const key in voices) {
				switch (key) {
					case "D":
						if (voices.D == 0) break;
						turn = turn.replace("R", "");
						voices.D--;

						break;
					case "R":
						if (voices.R == 0) break;
						turn = turn.replace("D", "");
						voices.R--;

						break;
				}
			}
		}
		senate = turn;
	}

	return senate.includes("D") ? "Dire" : "Radiant";

	// const stack = [];
	// const senateArray = senate.split("");
	// for (let i = 0; i < senateArray.length; i++) {
	// 	if (!stack.length || stack[stack.length - 1] === senateArray[i]) {
	// 		stack.push(senateArray[i]);
	// 	} else {
	// 		senateArray.push(stack.pop());
	// 	}
	// }
	// return stack[0] === "R" ? "Radiant" : "Dire";
}

console.log(predictPartyVictory("DRRDRDRDRDDRDRDR"));
