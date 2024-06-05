import { useRouter, useParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  findAllApplicationsService,
  createAplicationService,
  getApplicationService,
  updateApplicationService,
  removeApplicationService,
} from '@/services/applications'
import { REQUIRED_FIELD } from '@/consts/errors'
import { queryClient } from '@/lib/queryClient'
import { schema, SchemaFormData } from './validations'

export default function useApplications(channels?: string[]) {
  const { push } = useRouter()
  const { id } = useParams()

  const queryClient = useQueryClient()

  const { data, isLoading: isLoadingApplications } = useQuery({
    queryKey: ['applications'],
    queryFn: findAllApplicationsService,
    initialData: {
      results: [],
      count: 0,
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<SchemaFormData>({
    resolver: zodResolver(schema),
  })

  const { mutate, isPending } = useMutation({
    mutationFn: (data: any) => createAplicationService({ ...data, channels }),
    onMutate() {
      if (!channels?.length) {
        setError('channels', { message: REQUIRED_FIELD })

        throw new Error()
      }
    },
    onSuccess() {
      push('/applications/list')
    },
  })

  function onSubmit(values: SchemaFormData) {
    mutate(values)
  }

  const { data: application, isLoading: isLoadindApplication } = useQuery({
    queryKey: ['application', { id }],
    queryFn: () => {
      if (id) return getApplicationService(id as string)

      return true
    },
  })

  const { mutate: mutateUpdate, isPending: isLoadingUpdate } = useMutation({
    mutationFn: (data: any) =>
      updateApplicationService({ id, channels, ...data }),
    onMutate() {
      if (!channels?.length) {
        setError('channels', { message: REQUIRED_FIELD })

        throw new Error()
      }
    },
    onSuccess() {
      push('/applications/list')
    },
  })

  function onUpdate(values: SchemaFormData) {
    mutateUpdate(values)
  }

  const { mutateAsync: mutateRemove, isPending: isLoadingRemove } = useMutation(
    {
      mutationFn: removeApplicationService,
      async onMutate(data) {
        await queryClient.cancelQueries({ queryKey: ['applications'] })
        const previousData: any = queryClient.getQueryData(['applications'])

        const results = previousData.results.filter(
          ({ id }: any) => id !== data
        )
        const count = previousData.count - 1

        const newData = {
          results,
          count,
        }

        queryClient.setQueryData(['applications'], newData)
      },
    }
  )

  async function onRemove(id: string) {
    await mutateRemove(id)
  }

  const templates = [
    {
      id: '1',
      name: 'Template 1',
    },
    {
      id: '2',
      name: 'Template 2',
    },
  ]

  return {
    applications: (data?.results || []) as SchemaFormData[],
    isLoadingApplications,
    templates,
    register,
    onSubmit: handleSubmit(onSubmit),
    isLoadingSubmit: isPending,
    errors,
    clearErrors,
    application,
    isLoadindApplication,
    onUpdate: handleSubmit(onUpdate),
    isLoadingUpdate,
    onRemove,
    isLoadingRemove,
  }
}
