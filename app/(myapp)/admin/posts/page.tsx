import dbConnect from "@/app/dbConnect"
import { PostModel } from "@/app/models/post"
import Link from "next/link"

const page = async () => {
  await dbConnect()
  const data = await PostModel.find()

  return (
    <div>
      {data?.map((each) => (
        <Link
          href={"/admin/posts/" + each.id}
          key={each.id}
          className="rounded bg-slate-100 p-4 m-4 block"
        >
          {each.title}
        </Link>
      ))}
    </div>
  )
}

export default page
