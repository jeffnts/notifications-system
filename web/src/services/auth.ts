'use client'
import { destroyCookie } from 'nookies'
import { signOut, signIn } from 'next-auth/react'
import { cookieToken } from '@/consts'

export function logout() {
  destroyCookie(undefined, cookieToken)
  signOut()
}

type LoginRequest = {
  type: string
  data: any
}

export async function login(values: LoginRequest) {
  try {
    const { type, data } = values

    return signIn(type, data)
  } catch (error) {
    throw error
  }
}
