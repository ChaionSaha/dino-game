"use strict";

import { random, dinoJump } from "./functions.js";

const dino = document.querySelector(".dino");

document.addEventListener("keypress", (e) => {
	if (e.code == "Space") {
		dinoJump(dino);
	}
});

document.addEventListener("click", (e) => {
	dinoJump();
});
