import React from 'react';
import { Carousel, Image } from 'antd';
// -------------------------------------------------- //
type ItemProps = {
    key: string;
    title: string;
    image: string;
    description?: string;
}
type CustomCarouselProps = {
    arrows?: boolean;
    items: ItemProps[];
    style?: React.CSSProperties;
}
// -------------------------------------------------- //
const CustomCarousel: React.FC<CustomCarouselProps> = ({ items, arrows, ...other }: CustomCarouselProps) => {
    return (
        <Carousel autoplay style={other.style && { border: 'none' }} arrows={arrows} autoplaySpeed={3000}>
            {items && items.map((item) => (
                <div key={item.key}>
                    <Image
                        src={item.image}
                        alt={item.title}
                        style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center' }}
                        preview={false}
                    />
                </div>
            ))}
        </Carousel>
    )
};

export default React.memo(CustomCarousel);