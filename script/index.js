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

let startingPos = 0;

setInterval(() => {
	const obstacle = document.createElement("div");
	obstacle.classList.add("obstacle");
	startingPos = random(startingPos + 3, 10);
	obstacle.style.right = `-${startingPos}vw`;
	console.log(startingPos);
	const obstacleDiv = document.querySelector(".obstacle-div");
	obstacleDiv.appendChild(obstacle);
	setTimeout(function () {
		obstacleDiv.removeChild(obstacle);
	}, 4200);
}, 1500);
