// // =============== This must be using Ramda ===============
// // const updatedArray = append<string>('baz', ['foo', 'bar'])

// // const hasSearchedString = any<string>(
// // 	(el: string) => el.includes(searchStr),
// // 	['fooo', 'bar', 'baz']
// // )
// // =============== /This must be using Ramda ===============

// const addId = <T extends object>(obj: T) => {
// 	const id = Math.random().toString(16)
// 	return {
// 		...obj,
// 		id,
// 	}
// }

// interface UserInterface<T, V> {
// 	name: string
// 	data: T
// 	meta: V
// }

// const user: UserInterface<{ meta: string }, string> = {
// 	name: 'Jack',
// 	data: {
// 		meta: 'foo',
// 	},
// 	meta: 'bar',
// }

// // =============== Error Example ===============
// // const user2: UserInterface<string[]> = {
// // 	name: 'John',
// // 	data: ['foo', 'bar', 'baz'],
// // }

// // const result = addId<UserInterface>(user)
// // console.log('result', result)
// // =============== /Error Example ===============
