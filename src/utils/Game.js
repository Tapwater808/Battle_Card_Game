import kaboom from "kaboom";

const k = kaboom({
	width: 300,
	height: 300,
	scale: 2,
	clearColor: [0,0,0,1],
});

function HelloWorld () {
    k.add([
		k.pos(k.width() * 0.5, k.height * 0.5),
		k.text('Hello World', 16),
		k.origin('center')
	])
}

export default function Scene () {
	k.scene('hello-world', HelloWorld)
}