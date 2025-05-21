"use client"
import { FormEvent, useRef, useState } from "react"
import { createPost } from "../lib/actions"

const CreatePostForm = () => {
  const titleRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLTextAreaElement>(null)

  const [isLoading, setIsLoading] = useState(false)

  const createPostFn = async (e: FormEvent) => {
    e.preventDefault()

    const title = titleRef.current?.value
    const body = bodyRef.current?.value
    if (title && body) {
      setIsLoading(true)
      await createPost({ title, body })

      setIsLoading(false)
    }
  }

  return (
    <div>
      <form
        onSubmit={createPostFn}
        className="shadow p-4 w-full max-w-lg m-5 flex flex-col gap-2 rounded-lg"
      >
        <h3 className="font-medium text-lg">Create Post</h3>
        <input
          type="text"
          name="title"
          required
          ref={titleRef}
          placeholder="Title"
          className="px-3 py-2 rounded border border-slate-200"
        />
        <textarea
          name="body"
          placeholder="Body"
          rows={4}
          required
          ref={bodyRef}
          className="px-3 py-2 rounded border border-slate-200"
        ></textarea>
        <button className="bg-slate-700 hover:bg-slate-800 px-3 py-2 rounded text-white">
          {isLoading ? "Submitting.." : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default CreatePostForm
