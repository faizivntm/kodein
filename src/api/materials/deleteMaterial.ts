import { apiFetch } from '@/api/client'
import type { Material } from '@/content/materials'

// hAPUS materi lewat DELETE /materials/{id}
export function deleteMaterial(id: number) {
  return apiFetch<Material>(`/materials/${id}`, {
    method: 'DELETE',
  })
}
