import Link from 'next/link'

type Props = {
  title: string
  description: string
  link: string
  icon: React.ReactElement
}

export function Widget(props: Props) {
  return (
    <Link
      key={props.title}
      href={props.link}
      className="group flex flex-col items-start gap-4 p-6 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors dark:border-gray-800 dark:hover:bg-gray-800"
      prefetch={false}
    >
      <div className="flex items-center gap-3">
        <div className="bg-gray-900 text-white p-3 rounded-full group-hover:bg-gray-800 transition-colors dark:bg-gray-50 dark:text-gray-900 dark:group-hover:bg-gray-700">
          {props.icon}
        </div>
        <h3 className="text-xl font-bold">{props.title}</h3>
      </div>
      <p className="text-gray-500 dark:text-gray-400">{props.description}</p>
    </Link>
  )
}
