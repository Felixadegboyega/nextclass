import { resolvers } from "@/app/lib/resolvers";
import { typeDefs } from "@/app/lib/typeDefs";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler(apolloServer);

export async function GET (request: NextRequest) {
	return handler(request);
}


export async function POST (request: NextRequest) {
	return handler(request);
}