import { NextResponse } from 'next/server'
import * as XLSX from 'xlsx'
import { mapChannels } from '@/consts'

export async function POST(request: Request) {
  try {
    const rawData = await request.json()

    const data = rawData.map((item: any) => ({
      Aplicativo: item.application,
      Canal: mapChannels[item.channel],
      'Data de envio': item.sendDate,
      'Data de recebimento': item.receiveDate,
      'Confirmação de leitura': item.readConfirmation ? 'Sim' : 'Não',
      'Título da mensagem': item.message.title,
      'Conteúdo da mensagem': item.message.content,
      'Link de redirecionamento': item.message.redirectLink,
      'Conteúdo do e-mail': item.message.emailContent,
    }))

    const worksheet = XLSX.utils.json_to_sheet(data)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Report')

    const xlsxBuffer = XLSX.write(workbook, {
      type: 'buffer',
      bookType: 'xlsx',
    })

    return new NextResponse(xlsxBuffer, {
      headers: {
        'Content-Type':
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename=report.xlsx',
      },
    })
  } catch (error) {
    return new Response('SERVER_ERROR', { status: 500 })
  }
}
