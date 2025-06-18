"use client"
import { Product } from "@/types"
import { gql, useMutation, useQuery } from "@apollo/client"
import { use } from "react"
import client from "../lib/graphql-client"

const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`

const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`

const REGISTER = gql`
  mutation Register($name: String!) {
    register(name: $name) {
      id
      name
    }
  }
`

const ProductList = ({ products }: { products: Promise<Product[]> }) => {
  const allproducts = use(products)

  const [register, { loading: registering }] = useMutation(REGISTER, {
    client,
  })

  const { data, loading, error } = useQuery(GET_USERS, { client })
  const { data: oneUser } = useQuery(GET_USER, {
    client,
    variables: { id: "222" },
  })

  return (
    <div>
      <button
        className="bg-violet-800 py-2.5 px-5 m-4 text-white rounded cursor-pointer"
        onClick={() => {
          register({ variables: { name: "Peter" } })
        }}
      >
        {registering ? "Registering.." : "Register"}
      </button>

      {oneUser?.user?.name}

      {loading && "Fetching Users"}
      {error && "An error occured"}
      {data && (
        <div>
          {data.users.map((each: { name: string; id: string }) => (
            <p key={each.name}>
              {each.id} {each.name}
            </p>
          ))}
        </div>
      )}

      {allproducts.map((each) => (
        <div key={each.id} className="rounded bg-slate-100 p-4 m-4">
          {each.name}
        </div>
      ))}
    </div>
  )
}

export default ProductList

export const ProductsSkeleton = () => {
  return (
    <div className="">
      <div className="bg-slate-100 animate-pulse h-10 w-80 m-3 rounded"></div>
      <div className="bg-slate-100 animate-pulse h-10 w-80 m-3 rounded"></div>
      <div className="bg-slate-100 animate-pulse h-10 w-80 m-3 rounded"></div>
    </div>
  )
}
