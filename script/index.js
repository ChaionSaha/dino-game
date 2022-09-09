"use strict";

import { random, dinoJump } from "./functions.js";

document.addEventListener("keypress", (e) => {
	if (e.key == " ") {
		dinoJump();
	}
});

document.addEventListener("click", (e) => {
	dinoJump();
});

setInterval(() => {
	const obstacle = document.createElement("div");
	obstacle.classList.add("obstacle");
	obstacle.style.right = `-${random(5, 10)}vw`;
	const obstacleDiv = document.querySelector(".obstacle-div");
	obstacleDiv.appendChild(obstacle);
	setTimeout(function () {
		obstacleDiv.removeChild(obstacle);
	}, 3500);
}, 1500);
