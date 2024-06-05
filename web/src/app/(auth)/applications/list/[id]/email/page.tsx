import { Title, PasswordInput, FilesInput, Breadcrumb } from '@/components'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Grid3x3Icon, HardDriveIcon } from '@/components/icons'

export default function ApplicationsListEmailPage() {
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
      name: 'Meu apliacativo | E-mail',
      link: '/',
    },
  ]

  return (
    <section className="w-full flex flex-col gap-4">
      <Breadcrumb links={links} />
      <div className="container flex flex-col gap-6 px-4 md:px-6">
        <div className="flex flex-col gap-6">
          <Title
            title={
              <div className="flex items-center gap-2">
                <Grid3x3Icon className="h-5 w-5" /> Meu aplicativo | E-mail
              </div>
            }
            description="Visualize e gerencie o email do seu aplicativo"
          />

          <div className="flex flex-col gap-4">
            <Title
              title="Dados do servidor"
              description="Dados do servidor do e-mail"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="appName">Nome do Servidor SMTP</Label>
                <Input placeholder="Digite o nome do Servidor SMTP" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="appName">Porta de envio</Label>
                <Input type="number" placeholder="Digite a porta de envio" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="appName">Login</Label>
                <Input placeholder="Digite o login" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="appName">Senha</Label>
                <PasswordInput placeholder="Digite a senha" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Title
              title="Dados de envio"
              description="Dados de envio do servidor de e-mail"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="appName">Nome do remetente</Label>
                <Input placeholder="Digite o nome do remetente" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="appName">E-mail do remetente</Label>
                <Input placeholder="Digite o e-mail do remetente" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <Title title="Templates" description="Submissão de templates" />
            <FilesInput warning="Somente arquivos com a extensão .html são aceitos" />
          </div>
        </div>
        <Button className="sm:w-fit sm:self-end w-full">
          <HardDriveIcon className="mr-2 h-4 w-4" />
          Salvar dados
        </Button>
      </div>
    </section>
  )
}
