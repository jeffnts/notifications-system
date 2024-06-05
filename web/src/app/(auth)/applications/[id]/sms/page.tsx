import { Title, PasswordInput, Breadcrumb } from '@/components'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Grid3x3Icon, HardDriveIcon } from '@/components/icons'

export default function ApplicationsListSMSPage() {
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
      name: 'Meu apliacativo | SMS',
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
                <Grid3x3Icon className="h-5 w-5" /> Meu aplicativo | SMS
              </div>
            }
            description="Visualize e gerencie o SMS do seu aplicativo"
          />

          <div className="flex flex-col">
            <div className="space-y-2">
              <Label htmlFor="appName">Provedor de SMS integrado</Label>
              <Input placeholder="Digite o provedor de SMS integrado" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="appName">Login</Label>
              <Input placeholder="Digite o login" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="appName">Senha</Label>
              <PasswordInput placeholder="Digite sua senha" />
            </div>
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
