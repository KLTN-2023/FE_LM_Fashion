'use client'
import { useCallback } from 'react'
import CustomCarousel from '@/app/components/carousel'
import carouselItems from '@/app/static/carousel-item.json'
import ListData from './components/list-data'

export default function Home() {
  const promotionItems = [...carouselItems.promotion]
  const onPagination = useCallback((page: number) => { console.log(page) }, [])

  return (
    <main style={{ marginTop: '80px ', }}>
      <CustomCarousel items={promotionItems} style={{ marginTop: '50px!important' }} />
      <ListData
        className=''
        itemLayout='horizontal'
        onPagination={onPagination}
        pageSize={4}
      />
    </main>
  )
}
