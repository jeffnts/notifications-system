'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Title, ConfirmModal, Breadcrumb } from '@/components'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  SettingsIcon,
  TrashIcon,
  Grid3x3Icon,
  GlobeIcon,
  MailIcon,
  MessageCircleIcon,
  HardDriveIcon,
} from '@/components/icons'
import useApplications from '@/hooks/useApplications'

export default function ApplicationListPage() {
  const { applications, onRemove, isLoadingRemove } = useApplications()

  const links = [
    {
      name: 'Aplicativos',
      link: '/applications',
    },
    {
      name: 'Lista de aplicativos',
      link: '/applications/list',
    },
  ]

  const mapNames: any = {
    WEB_PUSH: 'Web Push',
    EMAIL: 'E-mail',
    SMS: 'SMS',
  }

  const mapIcons: any = {
    WEB_PUSH: <GlobeIcon className="h-4 w-4" />,
    EMAIL: <MailIcon className="h-4 w-4" />,
    SMS: <MessageCircleIcon className="h-4 w-4" />,
  }

  return (
    <section className="w-full flex flex-col gap-4">
      <Breadcrumb links={links} />
      <div className="container flex flex-col gap-6 px-4 md:px-6">
        <div className="flex flex-col gap-6">
          <Title
            title={
              <div className="flex items-center gap-2">
                <Grid3x3Icon className="h-5 w-5" />
                Lista de aplicativos{' '}
              </div>
            }
            description="Visualize e gerencie seus aplicativos cadastrados"
          />

          <TooltipProvider>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 md:px-6">
              {applications.map((app) => (
                <div key={app.id} className="grid gap-4">
                  <div className="grid gap-4 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-gray-900 text-white flex items-center justify-center w-10 h-10 p-2">
                          <Grid3x3Icon className="h-5 w-5" />
                        </div>

                        <h3 className="font-semibold">{app.name}</h3>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex flex-col items-start">
                        {app.channels.map((channel) => (
                          <div
                            key={channel}
                            className="flex items-center justify-between w-full"
                          >
                            <div className="flex items-center gap-2">
                              {mapIcons[channel]}
                              <span>{mapNames[channel]}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link
                                    href={`/applications/${app.id}/${channel
                                      .replace('_', '-')
                                      .toLowerCase()}`}
                                  >
                                    <Button variant="ghost" size="icon">
                                      <SettingsIcon className="h-4 w-4" />
                                      <span className="sr-only">
                                        Configurar
                                      </span>
                                    </Button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent>Configurar</TooltipContent>
                              </Tooltip>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex sm:justify-between sm:flex-row flex-col w-full justify-center gap-4">
                      <Link href={`/applications/${app.id}`}>
                        <Button variant="default" className=" sm:w-fit w-full">
                          <HardDriveIcon className="h-4 w-4 mr-2" />
                          Editar Aplicativo
                        </Button>
                      </Link>

                      <ConfirmModal
                        title={`Remover aplicativo "${app.name}"`}
                        description={`Tem certeza que deseja remover o aplicativo "${app.name}"?`}
                        onConfirm={() => onRemove(app.id)}
                      >
                        <Button
                          variant="destructive"
                          className="sm:ml-auto sm:w-fit w-full"
                        >
                          <TrashIcon className="h-4 w-4 mr-2" />
                          Remover Aplicativo
                        </Button>
                      </ConfirmModal>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </TooltipProvider>
        </div>
      </div>
    </section>
  )
}
