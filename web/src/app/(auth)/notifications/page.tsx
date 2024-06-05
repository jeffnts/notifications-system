import { Widget, Breadcrumb } from '@/components'
import { SendIcon, ListIcon } from '@/components/icons'

export default function NotificationsPage() {
  const links = [
    {
      name: 'Notificações',
      link: '/notifications',
    },
  ]
  const notifications = [
    {
      title: 'Enviar Notificação',
      description: 'Envie uma ou mais notificações',
      link: '/notifications/send',
      icon: <SendIcon className="h-5 w-5" />,
    },
    {
      title: 'Histórico das Notificações',
      description: 'Visualize todos suas notificações',
      link: '/notifications/historic',
      icon: <ListIcon className="h-5 w-5" />,
    },
  ]
  return (
    <section className="w-full flex flex-col gap-4">
      <Breadcrumb links={links} />
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 md:px-6">
        {notifications.map((notification) => (
          <Widget
            key={notification.title}
            title={notification.title}
            description={notification.description}
            link={notification.link}
            icon={notification.icon}
          />
        ))}
      </div>
    </section>
  )
}
