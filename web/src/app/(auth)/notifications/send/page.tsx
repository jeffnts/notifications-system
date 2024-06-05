'use client'
import { useState, ChangeEvent } from 'react'
import Image from 'next/image'
import { Title, Breadcrumb } from '@/components'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { SendIcon } from '@/components/icons'
import useApplications from '@/hooks/useApplications'

export default function SendNotificationPage() {
  const [channel, setChannel] = useState('WEB_PUSH')
  const [imagePreview, setImagePreview] = useState<string>(
    '/image-placeholder.png'
  )
  const { applications, templates } = useApplications()

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const [file] = event.target?.files as any
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImagePreview(imageUrl)
    }
  }

  const links = [
    {
      name: 'Notificações',
      link: '/notifications',
    },
    {
      name: 'Enviar notificação',
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
                <SendIcon className="h-5 w-5" />
                Enviar notificação
              </div>
            }
            description="Faça aqui o envio manual das suas notificações"
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="app">Aplicativo</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o aplicativo" />
                </SelectTrigger>
                <SelectContent>
                  {applications.map((application) => (
                    <SelectItem value={application.id}>
                      {application.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="app">Canal</Label>
              <Select value={channel} onValueChange={setChannel}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o canal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="WEB_PUSH">Web Push</SelectItem>
                  <SelectItem value="EMAIL">E-mail</SelectItem>
                  <SelectItem value="SMS">SMS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {channel === 'WEB_PUSH' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="appName">Título da Mensagem</Label>
                <Input placeholder="Digite o título da Mensagem" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="appName">Texto da Mensagem</Label>
                <Textarea placeholder="Digite o texto da Mensagem" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex">
                  <div className="space-y-2">
                    <Label htmlFor="appName">Imagem do ícone</Label>
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
                        onError={() =>
                          setImagePreview('/image-placeholder.png')
                        }
                        src={imagePreview}
                        className="aspect-[3/2] w-20 rounded-md object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="appName">Endereço do link de destino</Label>
                  <Input placeholder="Digite o endereço do link de destino" />
                </div>
              </div>
            </>
          )}

          {channel === 'EMAIL' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="appName">E-mails dos destinatários</Label>
                <Input placeholder="Digite os e-mails dos destinatários separados por vírgula" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="appName">Texto da Mensagem</Label>
                <Textarea placeholder="Digite o texto da Mensagem" />
              </div>
            </>
          )}
        </div>

        {channel === 'SMS' && (
          <>
            <div className="space-y-2">
              <Label htmlFor="appName">Telefones dos usuários</Label>
              <Input placeholder="Digite os telefones dos usuários separados por vírgula" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="app">Templates</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um template" />
                </SelectTrigger>
                <SelectContent>
                  {templates.map((template) => (
                    <SelectItem value={template.id}>{template.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </>
        )}

        <Button className="sm:w-fit sm:self-end w-full">
          <SendIcon className="mr-2 h-4 w-4" />
          Enviar Notificação
        </Button>
      </div>
    </div>
  )
}
