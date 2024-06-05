'use client'
import { PasswordInput } from '@/components'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import useCreateAccount from './useCreateAccount'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreateAccount({ open, onOpenChange }: Props) {
  const { register, onSubmit, isPending, errors } = useCreateAccount({
    onClose: () => onOpenChange(false),
  })
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Criar conta</DialogTitle>
          <DialogDescription>Crie aqui uma nova conta</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              placeholder="Digite seu nome"
              {...register('name')}
              errors={errors}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              {...register('email')}
              errors={errors}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmEmail">Confirmar Email</Label>
            <Input
              type="email"
              placeholder="Confirme seu e-mail"
              {...register('emailConfirmation')}
              errors={errors}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <PasswordInput
              placeholder="Digite sua senha"
              {...register('password')}
              errors={errors}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar Senha</Label>
            <PasswordInput
              placeholder="Confirme sua senha"
              {...register('passwordConfirmation')}
              errors={errors}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)} variant="outline">
            Cancelar
          </Button>
          <Button disabled={isPending} onClick={onSubmit} type="submit">
            Criar conta
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
