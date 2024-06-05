'use client'

import { useState } from 'react'
import { PasswordInput } from '@/components'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CreateAccount, ForgotPassword } from './modals'

export default function LoginPage() {
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false)
  const [signUpOpen, setSignUpOpen] = useState(false)
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:block w-1/2 bg-gray-100 dark:bg-gray-800">
        <Image
          src="/login-placeholder.png"
          alt="Login Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-4 md:px-6">
        <div className="max-w-md w-full space-y-6">
          <div className="space-y-2 text-center">
            <Image
              src="/logo.svg"
              alt="Login Image"
              width="1920"
              height="1080"
              className="h-full w-full object-cover"
            />
            <p className="text-gray-500 dark:text-gray-400">
              Entre seu e-mail e senha para acessar sua conta
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                  onClick={() => setForgotPasswordOpen(true)}
                  prefetch={false}
                >
                  Esqueceu sua senha?
                </Link>
              </div>
              <PasswordInput placeholder="Digite sua senha" />
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Não tem uma conta ainda?
            <Link
              href="#"
              className="underline"
              onClick={() => setSignUpOpen(true)}
              prefetch={false}
            >
              Criar conta
            </Link>
          </div>
        </div>
      </div>
      <CreateAccount open={signUpOpen} onOpenChange={setSignUpOpen} />

      <ForgotPassword
        open={forgotPasswordOpen}
        onOpenChange={setForgotPasswordOpen}
      />
    </div>
  )
}
