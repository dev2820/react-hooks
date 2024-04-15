import useDragIndexCarousel, {
  useDragCarouselIndex,
} from '../../useDragIndexCarousel';
import React from 'react';

export default function DragCarousel() {
  const images = [
    'https://i.namu.wiki/i/8BAuDmjlFbHoGpGTyTUJyeIsrWw7vrGKTvbOBS1DbaLNHHFL6D05TSZEyVGGffn_RIs6zrf4jCb5Xq5Lnbs8QQ.webp',
    'https://cdn.topstarnews.net/news/photo/202208/14724511_938042_3651.jpg',
    'https://image.xportsnews.com/contents/images/upload/article/2023/0825/mb_1692925582785123.jpg',
    'https://photo.newsen.com/news_photo/2022/08/19/202208190935355510_1.jpg',
  ];
  const DragCarousel = useDragIndexCarousel();
  return (
    <DragCarousel
      style={{
        width: 500,
        height: 500,
      }}
    >
      {images.map((image) => (
        <div
          style={{
            width: '100%',
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <img
            src={image}
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      ))}
    </DragCarousel>
  );
}