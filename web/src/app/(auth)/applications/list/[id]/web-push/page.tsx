'use client'

import { useState, ChangeEvent } from 'react'
import Image from 'next/image'
import { Title, Breadcrumb } from '@/components'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Grid3x3Icon, HardDriveIcon } from '@/components/icons'

export default function ApplicationsListWebPushPage() {
  const [imagePreview, setImagePreview] = useState<string>(
    '/image-placeholder.png'
  )

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
      name: 'Meu apliacativo | Web Push',
      link: '/',
    },
  ]

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const [file] = event.target?.files as any
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImagePreview(imageUrl)
    }
  }

  return (
    <section className="w-full flex flex-col gap-4">
      <Breadcrumb links={links} />
      <div className="container flex flex-col gap-6 px-4 md:px-6">
        <div className="flex flex-col gap-6">
          <Title
            title={
              <div className="flex items-center gap-2">
                <Grid3x3Icon className="h-5 w-5" /> Meu aplicativo | Web Push
              </div>
            }
            description="Visualize e gerencie o web push do seu aplicativo"
          />

          <div className="flex flex-col gap-4">
            <Title
              title="Dados básicos"
              description="Digite os dados básicos do aplivativo"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="appName">Nome do site</Label>
                <Input placeholder="Nome do site que irá enviar a notificação" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="appName">Endereço do site</Label>
                <Input placeholder="Endereço do site que irá enviar a notificação" />
              </div>
            </div>

            <div className="flex">
              <div className="space-y-2">
                <Label htmlFor="appName">Ícone do site</Label>
                <div className="flex gap-2">
                  <Input
                    type="file"
                    onChange={handleImageChange}
                    placeholder="Imagem do ícone do site"
                  />
                  <Image
                    width={30}
                    height={30}
                    alt="placeholder"
                    onError={() => setImagePreview('/image-placeholder.png')}
                    src={imagePreview}
                    className="aspect-[3/2] w-20 rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Title
              title="Configurações da notificação de permissão"
              description="Configure a notificação de permissão, permitindo personalizar a mensagem de notificação web"
            />

            <div className="space-y-2">
              <Label htmlFor="appName">Título da mensagem</Label>
              <Input placeholder="Digite o título da mensagem" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 ">
              <div className="space-y-2">
                <Label htmlFor="appName">Título da notificação</Label>
                <Input placeholder="Digite texto do botão Permitir" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="appName">Texto do botão Negar</Label>
                <Input placeholder="Digite o texto do botão Negar" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Title
              title="Configurações da notificação de boas vindas"
              description="Configure notificação de boas vindas, permitindo personalizar a mensagem da notificação web"
            />

            <div className="space-y-2">
              <Label htmlFor="appName">Título da notificação</Label>
              <Input placeholder="Digite o título da notificação" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="appName">Texto da notificação</Label>
              <Textarea placeholder="Digite o texto da notificação" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="appName">
                  Habilitar / Desabilitar link de destino, ao clicar na
                  notificação
                </Label>
                <Switch className="sm:ml-0 ml-4" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="appName">Endereço do link de destino</Label>
                <Input placeholder="Digite o endereço do link de destino" />
              </div>
            </div>
          </div>

          <Button className="sm:w-fit sm:self-end w-full">
            <HardDriveIcon className="mr-2 h-4 w-4" />
            Salvar dados
          </Button>
        </div>
      </div>
    </section>
  )
}
