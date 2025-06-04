"use client"

import { useActionState, useEffect } from "react"
import { register } from "../lib/user"
import { useRouter } from "next/navigation"

export default function SignupForm() {
  const [state, action, pending] = useActionState(register, undefined)
  const router = useRouter()

  useEffect(() => {
    if (state?.success) {
      router.push("/admin")
    }
  }, [router, state?.success])

  return (
    <form action={action}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" placeholder="Email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>

      <button disabled={pending} type="submit">
        {pending ? "Submitting..." : "Sign Up"}
      </button>
    </form>
  )
}
