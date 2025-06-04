"use client"
import { useEffect, useState } from "react"
import { IPost } from "../models/post"
import Link from "next/link"

export const PostList = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState<IPost[]>([])
  useEffect(() => {
    setIsLoading(true)
    fetch("/api/post")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      Client here
      {isLoading && "Fetching posts..."}
      {posts?.map((each) => (
        <Link
          href={"/admin/posts/" + each._id}
          key={each.id}
          className="rounded bg-slate-100 p-4 m-4 block"
        >
          {each.title}
        </Link>
      ))}
    </div>
  )
}
