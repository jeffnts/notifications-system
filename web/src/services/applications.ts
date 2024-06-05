import { api } from '@/lib/api'

export async function findAllApplicationsService() {
  return api.get('/applications')
}

export async function createAplicationService(data: any) {
  return api.post('/applications', data)
}

export async function getApplicationService(id: string) {
  return api.get(`/applications/${id}`)
}

export async function updateApplicationService({ id, ...data }: any) {
  return api.put(`/applications/${id}`, data)
}

export async function removeApplicationService(id: string) {
  return api.delete(`/applications/${id}`)
}
