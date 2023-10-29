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
    items: ItemProps[];
}
// -------------------------------------------------- //
const CustomCarousel: React.FC<CustomCarouselProps> = ({ items }: CustomCarouselProps) => {
    return (<Carousel autoplay style={{ border: 'none' }}>
        {items && items.map((item) => (
            <div key={item.key}>

                <Image
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: 'auto' }}
                    preview={false}
                />
            </div>
        ))}
    </Carousel>)
};

export default React.memo(CustomCarousel);