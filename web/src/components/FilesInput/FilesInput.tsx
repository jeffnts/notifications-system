'use client'

import {
  forwardRef,
  useState,
  InputHTMLAttributes,
  ChangeEvent,
  DragEvent,
} from 'react'
import { Button } from '@/components/ui/button'
import { CloudUploadIcon, TrashIcon } from '@/components/icons'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  warning?: string
}

const FilesInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, warning, ...props }, ref) => {
    const [files, setFiles] = useState<File[]>([])
    const [isDragging, setIsDragging] = useState(false)

    function handleAddFile(files: File[]) {
      setFiles((state) => {
        const stateFilesNames = state.map(({ name }) => name)
        const stateFiles = files.filter(
          ({ name }) => !stateFilesNames.includes(name)
        )

        return [...state, ...stateFiles]
      })
    }

    function handleFilesChange(e: ChangeEvent<HTMLInputElement>) {
      const eventFiles = Array.from(e.target?.files || [])
      handleAddFile(eventFiles)
      e.target.value = ''
    }

    function handleRemoveFile(name: string) {
      setFiles((state) => state.filter((file) => file.name !== name))
    }

    function handleDragOver(e: DragEvent<HTMLDivElement>) {
      e.preventDefault()
      setIsDragging(true)
    }

    function handleDragLeave() {
      setIsDragging(false)
    }

    function handleDrop(e: DragEvent<HTMLDivElement>) {
      e.preventDefault()
      setIsDragging(false)
      if (e.dataTransfer.files) {
        const fileArray = Array.from(e.dataTransfer.files).filter(
          (file) => file.type === 'text/html'
        )
        handleAddFile(fileArray)
      }
    }

    return (
      <div className="grid gap-2">
        <div className="space-y-4">
          <input
            name="files-input"
            accept=".html"
            multiple
            {...props}
            onChange={handleFilesChange}
            type="file"
            className="hidden"
            id="files-input"
            ref={ref}
          />
          <div>
            <p className="text-gray-500 dark:text-gray-400">
              Arraste e solte seus arquivos aqui ou clique para selecionar.
            </p>
            {!!warning && (
              <div
                className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
                role="alert"
              >
                <p>{warning}</p>
              </div>
            )}
          </div>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed ${
              isDragging
                ? 'border-green-500'
                : 'border-gray-300 dark:border-gray-700'
            } rounded-lg p-6 flex flex-col items-center justify-center space-y-4`}
          >
            <CloudUploadIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
            <p className="text-gray-500 dark:text-gray-400">
              Arraste e solte seus arquivos aqui
            </p>

            <Button
              onClick={() => document.getElementById('files-input')?.click()}
              variant="outline"
            >
              Adicionar arquivos
            </Button>
          </div>
          {!!files.length && (
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Arquivos</h3>
              <ul className="space-y-2">
                {files.map(({ name }) => (
                  <li
                    key={name}
                    className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-lg p-3"
                  >
                    <div className="flex items-center space-x-3">
                      {/* <FileIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" /> */}
                      <p className="text-gray-700 dark:text-gray-300">{name}</p>
                    </div>
                    <Button
                      onClick={() => handleRemoveFile(name)}
                      variant="ghost"
                      size="icon"
                    >
                      <TrashIcon className="h-4 w-4" />
                      <span className="sr-only">Remover</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
)

export { FilesInput }
