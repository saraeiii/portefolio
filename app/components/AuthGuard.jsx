'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

export default function AuthGuard({ children }) {
  const router = useRouter()
  const { currentUser } = useSelector(state => state.auth)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    if (!currentUser) {
     
      setShowMessage(true)

     
      setTimeout(() => {
        router.push('/login')
      }, 3000) 
    }
  }, [currentUser, router])

  return currentUser ? (
    children
  ) : (
    <div className="container p-4">
      {showMessage && (
        <div className="text-red-600">
          <p>Veuillez vous connecter afin d'accéder à cette page.</p>
        </div>
      )}
    </div>
  )
}
