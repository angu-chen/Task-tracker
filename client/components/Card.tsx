import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Card({ children }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-1 border-gray-500 py-1 px-2">
      {children}
    </div>
  )
}
