import { HomeIcon, Grid3x3Icon, BellIcon } from '@/components/icons'

export const menuItems = [
  {
    name: 'Home',
    link: '/',
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    name: 'Aplicativos',
    link: '/applications',
    description: 'Visualize e gerencie todos os seus aplicativos',
    icon: <Grid3x3Icon className="h-4 w-4" />,
  },
  {
    name: 'Notificações',
    link: '/notifications',
    description: 'Visualize e gerencie todas os suas notificações',
    icon: <BellIcon className="h-4 w-4" />,
  },
]

export const mapChannels: any = {
  'web-push': 'Web Push',
  email: 'E-mail',
  sms: 'SMS',
}
