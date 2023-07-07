import React, { useRef, useState, useEffect } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination'; 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const videos = [
    {
      link: "/intros/1.mp4",
      name: "Tara Thompson",
      rank: "Coach",
    },
    {
      link: "/intros/2.mp4",
      name: "Tara Thompson",
      rank: "Coach",
    },
    {
      link: "/intros/3.mp4",
      name: "Tara Thompson",
      rank: "Coach",
    },
    {
      link: "/intros/4.mp4",
      name: "Tara Thompson",
      rank: "Coach",
    },
  ];

  useEffect(() => {
    const videoElements = Array.from(document.querySelectorAll(".video-slide"));

    videoElements.forEach((video, index) => {
      if (index === activeIndex ) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  const handleMouseEnter = (index) => {
    if (index === activeIndex ) {
      const video = document.querySelector(`.video-slide-${index}`);
      video.play();
    }
  };

  const handleMouseLeave = (index) => {
    if (index === activeIndex ) {
      const video = document.querySelector(`.video-slide-${index}`);
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
        breakpoints={{
          260: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}  
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative ${index === activeIndex  ? "" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <video
                autoPlay={index === activeIndex }
                muted
                playsInline
                loop={false}
                className={`video-slide bg-top bg-contain object-contain	h-full video-slide-${index}`}
                style={
                  index === activeIndex 
                    ? {
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        opacity: "1",
                      }
                    : {
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        opacity: "0.6",
                      }
                }
              >
                <source className="object-cover" src={video.link} />
              </video>
              <div className="absolute linear px-6 w-full bottom-0">
                <h1 className="text-white text-xl text-left font-bold">
                  {video.name}
                </h1>
                <p className="text-left text-white">{video.rank}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
