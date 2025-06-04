import { PostList } from "@/app/components/PostList"

const page = async () => {
  // await dbConnect()
  // const data = await PostModel.find();

  return (
    <div>
      Server Here
      {/* {data?.map((each) => (
        <Link
          href={"/admin/posts/" + each.id}
          key={each.id}
          className="rounded bg-slate-100 p-4 m-4 block"
        >
          {each.title}
        </Link>
      ))} */}
      <PostList />
    </div>
  )
}

export default page
