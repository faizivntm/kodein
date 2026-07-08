import { useCallback, useState } from 'react'

// Contoh custom hook. Simpan reusable stateful logic di folder ini.
export function useToggle(initial = false) {
  const [on, setOn] = useState(initial)
  const toggle = useCallback(() => setOn((v) => !v), [])
  return [on, toggle] as const
}
