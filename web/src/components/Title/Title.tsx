type Props = {
  title: string | React.ReactElement
  description?: string
}

export function Title(props: Props) {
  const { title, description } = props
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  )
}
