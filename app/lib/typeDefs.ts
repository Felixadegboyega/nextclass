import "server-only";
import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    hello: String,
	myname: String,
	users: [User]!,
	user(id:ID!): User,
	posts: [Post]!
	post(id:ID!): Post
  }

  type User {
	name: String,
	id: ID!,
	age: Int
  }

  type Post {
	id: ID!
	title: String!
	body: String!
	author(fullname:Boolean): User! 
  }

  enum Status {
	ACTIVE
	DISABLED
	REJECTED
  }

  type Mutation {
	register(name:String!, status:Status): User
  }
`;
