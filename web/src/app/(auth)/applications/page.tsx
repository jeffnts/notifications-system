import { Widget, Breadcrumb } from '@/components'
import { PlusIcon, Grid3x3Icon } from '@/components/icons'

export default function ApplicationPage() {
  const apps = [
    {
      title: 'Cadastrar Aplicativo',
      description: 'Crie um novo aplicativo em nossa plataforma',
      link: '/applications/create',
      icon: <PlusIcon className="h-5 w-5" />,
    },
    {
      title: 'Ver Aplicativos',
      description: 'Visualize todos os seus aplicativos cadastrados',
      link: '/applications/list',
      icon: <Grid3x3Icon className="h-5 w-5" />,
    },
  ]

  const links = [
    {
      name: 'Aplicativos',
      link: '/applications',
    },
  ]

  return (
    <section className="w-full flex flex-col gap-4">
      <Breadcrumb links={links} />
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 md:px-6">
        {apps.map((app) => (
          <Widget
            key={app.title}
            title={app.title}
            description={app.description}
            link={app.link}
            icon={app.icon}
          />
        ))}
      </div>
    </section>
  )
}
