import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prisma"
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()
const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        if (email !== "name@name.com" || password !== "123") {
          throw new Error("Invalid credentials")
        }
        return {
          id: "1",
          name: "junaid",
          email: "gmail@gmail.com",
          image: null,
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
  pages: {
    signIn: "/login",
    // verifyRequest: "/confirm",
    // error: "/error",
    newUser: "/dashboard",
  },
  callbacks: {
    session: async ({ session, user }) => {
      return {
        ...session,
        user: user,
      }
    },
  },
}
export default NextAuth(authOptions)
