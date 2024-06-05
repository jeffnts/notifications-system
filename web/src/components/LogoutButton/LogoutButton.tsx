'use client'

import { DropdownMenuItem } from '../ui/dropdown-menu'
import { logout } from '@/services/auth'

export function LogoutButton() {
  return (
    <DropdownMenuItem className="cursor-pointer" onClick={logout}>
      Sair
    </DropdownMenuItem>
  )
}
