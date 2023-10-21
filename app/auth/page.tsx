"use client"

import { useState } from "react"
import { Metadata } from "next"
import Image from "next/legacy/image"
import Link from "next/link"

import { UserAuthForm } from "@/components/auth-page/user-auth-form"

import { Button, buttonVariants } from "../../components/ui/button"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication page of guidlify.com",
}

export default function AuthenticationPage() {
  const [formType, setFormType] = useState<"login" | "signup">("signup")
  //   const { formType, setFormType } = useContext(AuthPageContext)

  //   const { onSuccessfulAuth } = useAuthContext()

  return (
    <>
      <div className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="bg-bg-100 absolute inset-0">
            <Image
              alt="auth banner"
              src={"/auth-page/auth-banner.jpeg"}
              layout="fill"
            />
          </div>
        </div>
        <div className="xs:mt-20 md:mt-0 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {formType === "signup" ? "Hey! What's up? 👋" : "Hello! 👋"}
              </h1>
              <p className="text-sm text-muted-foreground">
                {formType === "signup"
                  ? "It's time for you create an account. Let's get started!"
                  : "Welcome back to WebX Guild! We are excited to see you again."}
              </p>
            </div>
            <UserAuthForm formType={formType} onSuccessfulAuth={() => {}} />
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setFormType(formType === "login" ? "signup" : "login")
              }}
            >
              <div className="mr-2 mt-16 flex items-end justify-end space-x-2">
                {formType === "signup" && (
                  <Button
                    //   disabled={isLoading}
                    className="w-24 border-slate-400 hover:border hover:bg-transparent hover:text-white"
                  >
                    Sign In
                  </Button>
                )}
                <Button
                  //   disabled={isLoading}
                  className="w-24 border border-slate-400 bg-transparent text-white hover:text-black"
                >
                  Sign Up
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
