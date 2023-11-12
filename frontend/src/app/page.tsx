'use client'
import { useCallback } from 'react'
import CustomCarousel from '@/app/components/carousel'
import carouselItems from '@/app/static/carousel-item.json'
import ListData from './components/list-data/ListDataIndex'

export default function Home() {
  const promotionItems = [...carouselItems.promotion]
  const onPagination = useCallback((page: number) => { console.log(page) }, [])

  return (
    <main style={{ marginTop: '80px' }}>
      <CustomCarousel items={promotionItems}  />
      <ListData
        itemType='card'
        itemLayout='horizontal'
        onPagination={onPagination}
      />
    </main>
  )
}
