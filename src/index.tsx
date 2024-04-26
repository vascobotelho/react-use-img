import { useLayoutEffect, useState } from "react"

interface Sizes {
  width: number
  height: number
}

export const useImg = (src: string, size: number | Sizes) => {
  const [status, setStatus] = useState<"loading" | "error" | "success">(
    "loading"
  )

  const width = typeof size === "number" ? size : size.width
  const height = typeof size === "number" ? size : size.height

  useLayoutEffect(() => {
    const img = new Image(width, height)

    img.src = src
    img.onload = () => setStatus("success")
    img.onerror = () => setStatus("error")

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return {
    isLoading: status === "loading",
    isError: status === "error",
    isSuccess: status === "success",
    status,
    src,
    width,
    height,
  }
}
