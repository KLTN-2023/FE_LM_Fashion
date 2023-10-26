'use client'
import { useCallback } from 'react'
import styles from './page.module.css'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'

export default function Home() {
  const route = useRouter()

  const handleClick = useCallback(() => {
    route.push('/cart')
  }, [])
  return (
    <main className={styles.main}>
      <Button onClick={handleClick}>Click</Button>
    </main>
  )
}
