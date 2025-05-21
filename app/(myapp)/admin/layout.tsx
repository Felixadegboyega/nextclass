import Link from "next/link"

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="flex gap-5">
      <div className="h-screen flex flex-col w-40 bg-slate-800 gap-2 p-5">
        {[
          { label: "Dashboard", path: "dashboard" },
          { label: "Transactions", path: "transactions" },
          { label: "Posts", path: "posts" },
          { label: "Create Posts", path: "createpost" },
        ].map((each) => (
          <Link
            key={each.path}
            className="bg-white/10 rounded-lg px-3 py-2 text-white"
            href={each.path}
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
