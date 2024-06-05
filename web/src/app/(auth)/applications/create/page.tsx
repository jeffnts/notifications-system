'use client'

import { useState } from 'react'
import { Title, Breadcrumb } from '@/components'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  PlusIcon,
  GlobeIcon,
  MailIcon,
  MessageCircleIcon,
} from '@/components/icons'

export default function ApplicationCreatePage() {
  const [integrations, setIntegrations] = useState<string[]>([])

  const links = [
    {
      name: 'Aplicativos',
      link: '/applications',
    },
    {
      name: 'Cadastro de aplicativo',
      link: '/applications/create',
    },
  ]

  function handleSetIntegrations(integration: string) {
    setIntegrations((state) => {
      if (state.includes(integration)) {
        return state.filter((item) => item !== integration)
      }

      return [...state, integration]
    })
  }

  return (
    <section className="w-full flex flex-col gap-4">
      <Breadcrumb links={links} />
      <div className="container flex flex-col gap-6 px-4 md:px-6">
        <div className="flex flex-col gap-6">
          <Title
            title={
              <div className="flex items-center gap-2">
                <PlusIcon className="h-5 w-5" />
                Cadastro de aplicativo{' '}
              </div>
            }
            description="Preencha os detalhes do seu aplicativo para começar"
          />

          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <Label htmlFor="appName">
                Nome de identificação do aplicativo
              </Label>
              <Input id="appName" placeholder="Ex: Meu Aplicativo Incrível" />
            </div>
            <div className="space-y-2">
              <Label>Canais desejados de integração</Label>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleSetIntegrations('web-push')}
                  variant={
                    integrations.includes('web-push') ? 'default' : 'outline'
                  }
                >
                  <GlobeIcon className="mr-2 h-4 w-4" />
                  Web Push
                </Button>
                <Button
                  onClick={() => handleSetIntegrations('email')}
                  variant={
                    integrations.includes('email') ? 'default' : 'outline'
                  }
                >
                  <MailIcon className="mr-2 h-4 w-4" />
                  E-mail
                </Button>
                <Button
                  onClick={() => handleSetIntegrations('sms')}
                  variant={integrations.includes('sms') ? 'default' : 'outline'}
                >
                  <MessageCircleIcon className="mr-2 h-4 w-4" />
                  SMS
                </Button>
              </div>
            </div>

            <Button className="sm:w-fit sm:self-end w-full">
              Cadastrar Aplicativo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
