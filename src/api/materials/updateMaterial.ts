import { apiFetch } from '@/api/client'
import type { Material } from '@/content/materials'

// Perbarui materi lewat PUT /materials/{id}. Body = MaterialCreate (tanpa id).
export function updateMaterial(id: number, material: Material) {
  return apiFetch<Material>(`/materials/${id}`, {
    method: 'PUT',
    body: material,
  })
}
