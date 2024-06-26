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
import useApplications from '@/hooks/useApplications'

export default function ApplicationCreatePage() {
  const [channels, setChannels] = useState<string[]>([])
  const { register, errors, clearErrors, onSubmit, isLoadingSubmit } =
    useApplications(channels)

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

  function handleSetIntegrations(channel: string) {
    clearErrors('channels')
    setChannels((state) => {
      if (state.includes(channel)) {
        return state.filter((item) => item !== channel)
      }

      return [...state, channel]
    })
  }

  const channelsError = errors?.channels

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
              <Input
                placeholder="Digite o nome do seu aplicativo"
                {...register('name')}
                errors={errors}
              />
            </div>
            <div className="space-y-2">
              <Label>Canais desejados de integração</Label>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleSetIntegrations('WEB_PUSH')}
                  variant={
                    channels.includes('WEB_PUSH') ? 'default' : 'outline'
                  }
                >
                  <GlobeIcon className="mr-2 h-4 w-4" />
                  Web Push
                </Button>
                <Button
                  onClick={() => handleSetIntegrations('EMAIL')}
                  variant={channels.includes('EMAIL') ? 'default' : 'outline'}
                >
                  <MailIcon className="mr-2 h-4 w-4" />
                  E-mail
                </Button>
                <Button
                  onClick={() => handleSetIntegrations('SMS')}
                  variant={channels.includes('SMS') ? 'default' : 'outline'}
                >
                  <MessageCircleIcon className="mr-2 h-4 w-4" />
                  SMS
                </Button>
              </div>
              <p className="text-sm text-red-500">
                {' '}
                {channelsError?.message as any}
              </p>
            </div>

            <Button
              disabled={isLoadingSubmit}
              onClick={onSubmit}
              className="sm:w-fit sm:self-end w-full"
            >
              Cadastrar Aplicativo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
