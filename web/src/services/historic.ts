import axios from 'axios'

export async function exportPDFService(data: any) {
  return axios
    .post('/api/reports/pdf', data, { responseType: 'blob' })
    .then(({ data }) => data)
}

export async function exportXLSXService(data: any) {
  return axios
    .post('/api/reports/xlsx', data, {
      responseType: 'arraybuffer',
    })
    .then(({ data }) => data)
}
