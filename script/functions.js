export function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const dino = document.querySelector(".dino");
export function dinoJump() {
	if (dino.classList.contains("jump")) return;
	dino.classList.add("jump");
	setTimeout(function () {
		dino.classList.remove("jump");
	}, 500);
	console.log(random(1, 100));
}
