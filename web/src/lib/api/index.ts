import { parseCookies } from 'nookies'
import { logout } from '@/services/auth'
import { cookieToken } from '@/consts'

const apiUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL

export const api = {
  async get(url: string) {
    const { [cookieToken]: token } = parseCookies()

    const response = await fetch(`${apiUrl}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    })

    const result = await response.json()

    if (response.status === 401) {
      logout()
      throw result
    }

    return result
  },

  async post(url: string, body: any) {
    const { [cookieToken]: token } = parseCookies()

    const response = await fetch(`${apiUrl}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
      method: 'POST',
    })

    const result = await response.text()

    if (response.status === 401) {
      logout()
      throw result
    }

    return result
  },

  async put(url: string, body: any) {
    const { [cookieToken]: token } = parseCookies()

    const response = await fetch(`${apiUrl}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
      method: 'PUT',
    })

    const result = await response.text()

    if (response.status === 401) {
      logout()
      throw result
    }

    return result
  },

  async delete(url: string) {
    const { [cookieToken]: token } = parseCookies()

    const response = await fetch(`${apiUrl}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'DELETE',
    })

    const result = await response.text()

    if (response.status === 401) {
      logout()
      throw result
    }

    return result
  },
}
