import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { INVALID_EMAIL_OR_INVALID_PAWWSORD } from '@/consts/errors'
import { login } from '@/services/auth'
import { schema, SchemaFormData } from './validations'

export default function useLogin() {
  const { push } = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SchemaFormData>({
    resolver: zodResolver(schema),
  })

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess(result) {
      if (result?.status !== 200) {
        setError('email', { message: INVALID_EMAIL_OR_INVALID_PAWWSORD })
        setError('password', { message: INVALID_EMAIL_OR_INVALID_PAWWSORD })
        return
      }

      push('/')
    },
  })

  function onSubmit(values: SchemaFormData) {
    mutate({
      type: 'credentials',
      data: {
        message: JSON.stringify(values),
        redirect: false,
      },
    })
  }

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    isPending,
    errors,
  }
}
