'use client'
import styles from './page.module.css'
import CustomCarousel from '@/app/components/carousel'
import carouselItems from '@/app/static/carousel-item.json'

export default function Home() {
  const promotionItems = [...carouselItems.promotion]

  return (
    <main >
      <CustomCarousel items={promotionItems} />
    </main>
  )
}
