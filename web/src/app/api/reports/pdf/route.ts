import { NextResponse } from 'next/server'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import { mapChannels } from '@/conts'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const pdfDoc = await PDFDocument.create()
    let page = pdfDoc.addPage()

    const { width, height } = page.getSize()
    const margin = 50

    let yPosition = height - margin

    const titleFontSize = 20
    const contentFontSize = 12
    const lineHeight = contentFontSize * 1.2

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

    let currentPageIndex = 0

    const addNewPage = () => {
      page = pdfDoc.addPage()
      yPosition = height - margin
      currentPageIndex++
    }

    yPosition -= titleFontSize
    page.drawText('Relatório de Aplicativos', {
      x: margin,
      y: yPosition,
      size: titleFontSize,
      font,
      color: rgb(0, 0, 0),
    })

    yPosition -= lineHeight

    data.forEach((item: any) => {
      if (yPosition - 2 * lineHeight < 0) {
        addNewPage()
      }

      yPosition -= lineHeight

      page.drawText(`Aplicativo: ${item.application}`, {
        x: 50,
        y: yPosition,
        size: contentFontSize,
        font,
        color: rgb(0, 0, 0),
      })

      yPosition -= lineHeight

      page.drawText(`Canal: ${mapChannels[item.channel]}`, {
        x: 50,
        y: yPosition,
        size: contentFontSize,
        font,
        color: rgb(0, 0, 0),
      })

      yPosition -= lineHeight

      page.drawText(`Data de Envio: ${item.sendDate}`, {
        x: 50,
        y: yPosition,
        size: contentFontSize,
        font,
        color: rgb(0, 0, 0),
      })

      yPosition -= lineHeight

      page.drawText(`Data de Recebimento: ${item.receiveDate}`, {
        x: 50,
        y: yPosition,
        size: contentFontSize,
        font,
        color: rgb(0, 0, 0),
      })

      yPosition -= lineHeight

      page.drawText(
        `Confirmação de Leitura: ${item.readConfirmation ? 'Sim' : 'Não'}`,
        {
          x: 50,
          y: yPosition,
          size: contentFontSize,
          font,
          color: rgb(0, 0, 0),
        }
      )

      yPosition -= lineHeight

      page.drawText(`Título da mensagem: ${item.message.title}`, {
        x: 50,
        y: yPosition,
        size: contentFontSize,
        font,
        color: rgb(0, 0, 0),
      })

      yPosition -= lineHeight

      page.drawText(`Conteúdo da mensagem: ${item.message.content}`, {
        x: 50,
        y: yPosition,
        size: contentFontSize,
        font,
        color: rgb(0, 0, 0),
      })

      yPosition -= lineHeight

      page.drawText(`Link de redirecionamento: ${item.message.redirectLink}`, {
        x: 50,
        y: yPosition,
        size: contentFontSize,
        font,
        color: rgb(0, 0, 0),
      })

      yPosition -= lineHeight

      page.drawText(`Conteúdo do e-mail: ${item.message.emailContent}`, {
        x: 50,
        y: yPosition,
        size: contentFontSize,
        font,
        color: rgb(0, 0, 0),
      })
      yPosition -= 25 // Extra space between entries
    })

    const pdfBytes = await pdfDoc.save()

    return new NextResponse(pdfBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=report.pdf',
      },
    })
  } catch (error) {
    return new Response('SERVER_ERROR', { status: 500 })
  }
}
