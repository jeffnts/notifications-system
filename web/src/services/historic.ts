import axios from 'axios'

export async function exportPDFService(data: any) {
  const response = await  fetch('/api/reports/pdf', {
    body: JSON.stringify(data),
    method: 'POST'
  })

  return response.blob()
}

export async function exportXLSXService(data: any) {
  const response = await fetch('/api/reports/xlsx', {
    body: JSON.stringify(data),
    method: 'POST'
  })

  return response.arrayBuffer()
}
