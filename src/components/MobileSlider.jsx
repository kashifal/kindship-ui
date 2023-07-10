import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import React, { useRef, useState, useEffect } from 'react'; 

import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
 

 

const MobileSlider = () => {
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
    <Splide
      options={{
        perPage: 2,
        type: "loop",
        padding: "5rem",
      }}
      aria-label="My Favorite Images"
    >
      {videos.map((video, index) => (

<SplideSlide key={index}>
<div
            className={`relative ${index === activeIndex ? "" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{ width: "100%", height: "100%" }} // Set container to full width and height
          >
            <video
              autoPlay={index === activeIndex}
              muted
              playsInline
              loop={false}
              className={`video-slide md:w-full bg-top bg-cover object-cover md:h-full video-slide-${index}`}
              style={{
                opacity: index === activeIndex ? "1" : "0.6",
              }}
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
</SplideSlide>
        
          
        
      ))}
    </Splide>
  );
};

export default MobileSlider;
