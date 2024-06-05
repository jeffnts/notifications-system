import { Fragment } from 'react'
import {
  Breadcrumb as BreadcrumbContainer,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

type Props = {
  links: {
    name: string
    link: string
  }[]
}

export function Breadcrumb(props: Props) {
  const { links } = props
  return (
    <BreadcrumbContainer>
      <BreadcrumbList>
        {links.length ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Início</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbPage>Início</BreadcrumbPage>
          </BreadcrumbItem>
        )}
        {links.map((item, index) => {
          if (index !== links.length - 1) {
            return (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={item.link}>{item.name}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            )
          }

          return (
            <BreadcrumbItem key={item.name}>
              <BreadcrumbPage>{item.name}</BreadcrumbPage>
            </BreadcrumbItem>
          )
        })}
      </BreadcrumbList>
    </BreadcrumbContainer>
  )
}
