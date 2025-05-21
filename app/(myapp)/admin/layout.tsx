import Link from "next/link"

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="flex gap-5">
      <div className="h-screen flex flex-col w-40 bg-slate-800 gap-2 p-5">
        <Link
          className="bg-white/10 rounded-lg px-3 py-2 text-white"
          href={"dashboard"}
        >
          Dashboard
        </Link>
        <Link
          className="bg-white/10 rounded-lg px-3 py-2 text-white"
          href={"transactions"}
        >
          Transactions
        </Link>
      </div>
      {children}
    </div>
  )
}

export default AdminLayout
