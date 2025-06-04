import dbConnect from "@/app/dbConnect"
import { IPost, PostModel } from "@/app/models/post"
import { notFound } from "next/navigation"

const getPost = async (id: string) => {
  const post = await PostModel.findById(id)

  return post
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  await dbConnect()
  let post: IPost | null
  try {
    post = await getPost(id)
    if (!post) {
      notFound()
    }
  } catch (error) {
    console.log(error)
    notFound()
  }

  return (
    <div>
      <div>{post?.title}</div>
      <div>{post?.more}</div>
      <div>{post?.time.toDateString()}</div>
    </div>
  )
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  let post: IPost | null

  try {
    post = await getPost(id)
    if (!post) {
      notFound()
    }
  } catch (error) {
    console.log(error)
    notFound()
  }

  return {
    title: post?.title,
    description: post?.more,
    // keywords:[""],
    openGraph: {
      title: post?.title,
      description: post?.more,
      url: "https://nextjs.org",
      siteName: "Next Class",
      images: [
        {
          url: "https://images.unsplash.com/photo-1748183346959-dfeec5ade5d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
    },
  }
}

export default page
