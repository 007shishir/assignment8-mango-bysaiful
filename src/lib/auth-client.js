import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  /**
   * Client-side auth requests in production must use a public URL.
   * Set NEXT_PUBLIC_BETTER_AUTH_URL in Vercel to your deployed URL.
   */
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
})

export const { signIn, signUp, useSession } = authClient
