import "server-only";

const users = [
	{
		name: "Felix",
		lastname: "Adegboyega", id: "222", age: 20
	},
	{
		name: "Peter",
		id: "333",
	},
]


const posts = [
	{
		id: "hehehe",
		title: "Hello",
		body: "World",
		author: "222"
	},
]


// interface Post {
// 	title: string,
// 	body: string,
// 	author: string,
// 	id: string
// }



export const resolvers = {
	Query: {
		hello: () => 'Hello World!',
		myname: () => {
			const firstname = "Felix";
			return `My name is ${firstname}`;
		},
		users: () => {
			return users
		},
		user: (parent: null, { id }: { id: string }) => {
			console.log(parent);
			const user = users.find(each => each.id == id)
			return user;
		},

		posts: () => {
			return posts.map(post => ({
				...post,
				author: users.find(user => user.id == post.author)
			}))
		},

		post: (_: null, { id }: { id: string }) => {
			const post = posts.find(post => post.id == id);
			const postWithAuthor = {
				...post,
				author: ({ fullname }: { fullname?: boolean }) => {
					const author = users.find(user => user.id == post?.author);
					return {
						...author,
						name: fullname ? `${author?.name} ${author?.lastname}` : author?.name
					}
				}
			}
			return postWithAuthor;
		}
	},

	Mutation: {
		register: (_: null, { name }: { name: string }) => {
			const c = users.length + 1;
			const id = `${c}${c}${c}`
			users.push({ id, name })
			return { id, name }
		}
	}
};