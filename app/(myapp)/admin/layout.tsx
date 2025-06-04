import { verifyUser } from "@/app/lib/auth"
import Link from "next/link"

const AdminLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const user = await verifyUser()

  return (
    <div className="flex gap-5">
      <div className="h-screen flex flex-col w-40 bg-slate-800 gap-2 p-5">
        <h3 className="text-white">{user?.firstname}</h3>
        {[
          { label: "Dashboard", path: "dashboard" },
          { label: "Transactions", path: "transactions" },
          { label: "Posts", path: "posts" },
          { label: "Create Posts", path: "createpost" },
        ].map((each) => (
          <Link
            key={each.path}
            className="bg-white/10 rounded-lg px-3 py-2 text-white"
            href={"/admin/" + each.path}
          >
            {each.label}
          </Link>
        ))}
      </div>
      {children}
    </div>
  )
}

export default AdminLayout
