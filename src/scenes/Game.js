import k from "../kaboom";

function HelloWorld () {

    let score = 0

	const scoreText = k.add([
		k.pos(2, 2),
		k.text(`Score: ${score}`),
		k.color(1, 1, 1, 1)		
	])
}

export default HelloWorld;