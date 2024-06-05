'use client'

import { Title, ConfirmModal, Breadcrumb } from '@/components'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { UserIcon, HardDriveIcon } from '@/components/icons'

export default function UserPage() {
  const links = [
    {
      name: 'Configurações do usuário',
      link: '/',
    },
  ]

  return (
    <div className="w-full flex flex-col gap-4">
      <Breadcrumb links={links} />
      <div className="container flex flex-col gap-6 px-4 md:px-6">
        <div className="flex flex-col gap-6">
          <Title
            title={
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                Configurações de usuário
              </div>
            }
            description="Configure aqui seus dados de usuário"
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input placeholder="Digite o nome do usuário" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input placeholder="Digite o e-mail do usuário" />
            </div>

            <ConfirmModal
              title="Redefinir a senha"
              description="Temcerteza que deseja redefinir sua senha?"
              onConfirm={() => console.log('redefinir senha')}
            >
              <Button variant="outline">Redefinir a senha</Button>
            </ConfirmModal>
          </div>
        </div>
        <Button className="sm:w-fit sm:self-end w-full">
          <HardDriveIcon className="mr-2 h-4 w-4" />
          Salvar dados
        </Button>
      </div>
    </div>
  )
}
