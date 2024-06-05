'use client'

import { useState, useEffect } from 'react'
import { Title, Breadcrumb } from '@/components'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  GlobeIcon,
  MailIcon,
  MessageCircleIcon,
  HardDriveIcon,
} from '@/components/icons'
import useApplications from '@/hooks/useApplications'

export default function UpdateApplication() {
  const [channels, setChannels] = useState<string[]>([])
  const {
    register,
    errors,
    clearErrors,
    onSubmit,
    isLoadingSubmit,
    application,
    isLoadindApplication,
    onUpdate,
    isLoadingUpdate,
  } = useApplications(channels)

  const links = [
    {
      name: 'Aplicativos',
      link: '/applications',
    },
    {
      name: 'Lista de aplicativos',
      link: '/applications/list',
    },
    {
      name: 'Editar aplicativo',
      link: '',
    },
  ]

  useEffect(() => {
    setChannels(application?.channels || [])
  }, [application])

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
                <HardDriveIcon className="h-5 w-5" />
                Editar aplicativo{' '}
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
                defaultValue={application?.name}
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
              disabled={isLoadingUpdate}
              onClick={onUpdate}
              className="sm:w-fit sm:self-end w-full"
            >
              <HardDriveIcon className="mr-2 h-4 w-4" /> Atualizar Aplicativo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
