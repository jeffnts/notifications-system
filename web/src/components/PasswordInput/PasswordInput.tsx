'use client'
import { useState, forwardRef } from 'react'
import { Button } from '@/components/ui/button'
import { EyeIcon, ClosedEyeIcon } from '@/components/icons'
import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errors?: any
}

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, errors, ...props }, ref) => {
    const error = errors?.[props.name as any]

    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    return (
      <div>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            className={cn(
              'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              className
            )}
            placeholder="Digite sua senha"
            ref={ref}
            {...props}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-0 -translate-y-1/2"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeIcon className="h-5 w-5" /> : <ClosedEyeIcon />}
            <span className="sr-only">Toggle password visibility</span>
          </Button>
        </div>
        {error && (
          <p className="text-sm text-red-500 mt-1"> {error?.message}</p>
        )}
      </div>
    )
  }
)

export { PasswordInput }
