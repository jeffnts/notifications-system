'use client'
import { useState } from 'react'
import { Title, Breadcrumb } from '@/components'
import { ListIcon } from '@/components/icons'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import {
  ChevronDownIcon,
  SearchIcon,
  XIcon,
  CheckIcon,
  FileIcon,
  FileSpreadsheetIcon,
} from '@/components/icons'
import { mapChannels } from '@/conts'
import useHistoric from './useHistoric'

export default function HistoricNotificationsPage() {
  const [channels, setChannels] = useState<string[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState<any>(null)
  const {
    historic,
    exportPDF,
    isLoadingExportPdf,
    exportXLSX,
    isLoadingExportXLSX,
  } = useHistoric()

  const handleRowClick = (row: any) => {
    setSelectedRow(row)
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedRow(null)
  }

  const channelsOptions = [
    {
      label: 'Web Push',
      value: 'web-push',
    },
    {
      label: 'E-mail',
      value: 'email',
    },
    {
      label: 'SMS',
      value: 'sms',
    },
  ]

  const links = [
    {
      name: 'Notificações',
      link: '/notifications',
    },
    {
      name: 'Histórico de notificação',
      link: '/',
    },
  ]

  function handleChangeChannnels(channel: string) {
    setChannels((state) => {
      if (state.includes(channel)) {
        return state.filter((item) => item !== channel)
      }

      return [...state, channel]
    })
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <Breadcrumb links={links} />
      <div className="container flex flex-col gap-6 px-4 md:px-6">
        <div className="flex flex-col gap-6">
          <Title
            title={
              <div className="flex items-center gap-2">
                <ListIcon className="h-5 w-5" />
                Histórico das notificaçòes
              </div>
            }
            description="Veja aqui todo o histórico das suas notificações"
          />

          <div className="flex flex-col gap-4">
            <div className="container mx-auto px-4 py-8">
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Filtros</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="date-range"
                      className="block font-medium mb-2"
                    >
                      Período
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input
                          type="date"
                          id="start-date"
                          placeholder="Data de início"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Input
                          type="date"
                          id="end-date"
                          placeholder="Data de término"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="channels"
                      className="block font-medium mb-2"
                    >
                      Canal de envio
                    </label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full flex justify-between items-center"
                        >
                          {!!channels.length ? (
                            <div className="flex gap-2">
                              {channels.map((channel) => (
                                <div
                                  key={channel}
                                  className="relative inline-block border-slate-300  border rounded-lg px-2 py-1 "
                                >
                                  <span>{mapChannels[channel]}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            'Selecionar canais'
                          )}
                          <ChevronDownIcon className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        {channelsOptions.map((channel) => (
                          <DropdownMenuCheckboxItem
                            onClick={() => handleChangeChannnels(channel.value)}
                            checked={channels.includes(channel.value)}
                          >
                            {channel.label}
                          </DropdownMenuCheckboxItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div>
                    <label htmlFor="source" className="block font-medium mb-2">
                      Origem de envio
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione a origem" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="api">Disparo via API</SelectItem>
                        <SelectItem value="platform">
                          Disparo via Plataforma
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-6 flex sm:justify-end">
                  <Button className="px-6 py-2 sm:w-fit w-full">
                    <SearchIcon className="w-4 h-4 mr-2" /> Pesquisar
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div
              className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4"
              role="alert"
            >
              <p> Clique na linha da tabela para obter mais informações.</p>
            </div>

            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead>Aplicativo</TableHead>
                  <TableHead>Canal de envio</TableHead>
                  <TableHead>Data do envio</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {historic.map((row, index) => (
                  <TableRow
                    key={index}
                    onClick={() => handleRowClick(row)}
                    className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <TableCell>{row.application}</TableCell>
                    <TableCell>{mapChannels[row.channel]}</TableCell>
                    <TableCell>{row.sendDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Detalhes</DialogTitle>
                </DialogHeader>
                {selectedRow && (
                  <div className="flex flex-col gap-2">
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Aplicativo</Label>
                          <p>{selectedRow.application}</p>
                        </div>
                        <div>
                          <Label>Canal de envio</Label>
                          <p>{mapChannels[selectedRow.channel]}</p>
                        </div>
                        <div>
                          <Label>Data do envio</Label>
                          <p>{selectedRow.sendDate}</p>
                        </div>
                        <div>
                          <Label>Data do recebimento</Label>
                          <p>{selectedRow.receiveDate}</p>
                        </div>
                        <div>
                          <Label>Confirmação de leitura</Label>
                          {selectedRow.readConfirmation ? (
                            <CheckIcon className="w-4 h-4 text-green-500" />
                          ) : (
                            <XIcon className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                      </div>
                    </div>

                    <Title title="Mensagem" />

                    <div className="flex flex-col gap-2">
                      <div>
                        <Label>Título</Label>
                        <p>{selectedRow.message.title}</p>
                      </div>

                      <div>
                        <Label>Conteúdo</Label>
                        <p>{selectedRow.message.content}</p>
                      </div>

                      <div>
                        <Label>Link de redirecionamento</Label>
                        <p>
                          <a href={selectedRow.message.redirectLink}>
                            {selectedRow.message.redirectLink}
                          </a>
                        </p>
                      </div>

                      <div>
                        <Label>Conteúdo do email</Label>
                        <p>{selectedRow.message.emailContent}</p>
                      </div>
                    </div>
                  </div>
                )}
                <DialogFooter>
                  <Button onClick={handleCloseModal}>Fechar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex sm:justify-end sm:flex-row flex-col gap-4">
            <Button onClick={exportPDF as any} disabled={isLoadingExportPdf}>
              <FileIcon className="mr-2 h-4 w-4" />
              Exportar PDF
            </Button>

            <Button onClick={exportXLSX as any} disabled={isLoadingExportXLSX}>
              <FileSpreadsheetIcon className="mr-2 h-4 w-4" />
              Exportar XLSX
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
