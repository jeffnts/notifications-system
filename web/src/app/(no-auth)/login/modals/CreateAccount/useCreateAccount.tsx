import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerUserService } from '@/services/users'
import {
  FIREBASE_EMAIL_ERROR_CODE,
  EMAIL_ALREADY_IN_USE,
} from '@/consts/errors'
import { schema, SchemaFormData } from './validations'

type Props = {
  onClose: () => void
}

export default function useCreateAccount({ onClose }: Props) {
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
    mutationFn: registerUserService,
    onSuccess() {
      push('/')
      onClose()
    },
    onError(error: string) {
      if (error === FIREBASE_EMAIL_ERROR_CODE) {
        setError('email', { message: EMAIL_ALREADY_IN_USE })
      }
    },
  })

  function onSubmit(values: SchemaFormData) {
    mutate(values)
  }

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
    isPending,
  }
}
