export interface Product {
	id: number
	name: string
	price: number
	description: string
	category: string
	brand: string
	stock: number
}


export interface CreatePost {
	title?: string
	body?: string
}