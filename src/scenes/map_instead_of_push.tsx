import {makeScene2D, Code, CODE, word, lines} from '@motion-canvas/2d'
import {all, beginSlide, createRef, waitFor, waitUntil} from '@motion-canvas/core'

export default makeScene2D(function* (view) {
	const code = createRef<Code>()

	const codeSnippet = Code.createSignal(CODE`\
const newArray = [];

someArray.forEach(item => {
    const newItem = convert(item);
    newArray.push(newItem);
});`)

	view.add(<Code
		ref={code}
		fontSize={28}
		scale={2}
		code={codeSnippet}
		/>)

	yield* beginSlide('replace with map')

	yield* code().code.replace(word(2, 10, 7), 'map', 1)

	yield* beginSlide('convert to arrow function')

	yield* code().code.replace(lines(0, 5), CODE`\
const newArray = someArray.map(item => convert(item));`, 0.6)

	yield* waitFor(2)
	yield* beginSlide('remove function indirection')

	yield* all(
		code().code.remove(word(0, 31, 8), 1),
		code().code.remove(word(0, 46, 6), 1),
	)

	yield* waitFor(1)
});
