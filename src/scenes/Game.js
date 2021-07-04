import kaboom from "kaboom";

function HelloWorld () {
    k.add([
		k.pos(k.width() * 0.5, k.height * 0.5),
		k.text('Hello World', 16),
		k.origin('center')
	])
}

export default HelloWorld;