import { Widget, Breadcrumb } from '@/components'
import { menuItems } from '@/conts'

export default function HomePage() {
  const widgets = menuItems.filter(({ name }) => name !== 'Home')
  return (
    <section className="w-full flex flex-col gap-4">
      <Breadcrumb links={[]} />
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 md:px-6">
        {widgets.map((app) => (
          <Widget
            key={app.name}
            title={app.name}
            description={app.description || ''}
            link={app.link}
            icon={app.icon}
          />
        ))}
      </div>
    </section>
  )
}
