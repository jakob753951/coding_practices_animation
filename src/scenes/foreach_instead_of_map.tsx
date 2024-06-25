import {makeScene2D, Code, word} from '@motion-canvas/2d'
import {all, beginSlide, createRef, waitFor} from '@motion-canvas/core'

export default makeScene2D(function* (view) {
	const code = createRef<Code>()
	
	view.add(<Code
		ref={code}
		fontSize={28}
		scale={2}
		code={`\
someArray.map((item) => { doSomething(item); });
`}
		/>);
	
	yield* beginSlide('replace with forEach')
	
	yield* code().code.replace(word(0, 10, 3), 'forEach', 1)
	
	yield* beginSlide('remove parens')
	
	yield* all(
		code().code.remove(word(0, 18, 1), 1),
		code().code.remove(word(0, 23, 1), 1),
	)
	
	yield* beginSlide('remove curly braces')
	
	yield* all(
		code().code.remove(word(0, 26, 2), 1),
		code().code.remove(word(0, 45, 3), 1),
	)
	// someArray.forEach(item => doSomething(item));
	yield* beginSlide('remove function indirection')
	
	yield* all(
		code().code.remove(word(0, 18, 8), 1),
		code().code.remove(word(0, 37, 6), 1),
	)
	
	yield* waitFor(2)
	yield* beginSlide('next scene')
});
