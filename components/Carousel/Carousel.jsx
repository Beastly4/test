import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Icon from "../Icon";

import styles from "./styles.module.scss";
import SliderBlock from "../SliderBlock";

const Carousel = ({ blocks }) => {
  return (
    <div className={styles.swiperWrapper}>
      <div className={styles.carouselButtons}>
        <button
          className={[styles["carouselButton"], "onPrevSlideHandler"].join(" ")}
          type="button"
        >
          <Icon.LeftArrow />
        </button>
        <button
          className={[styles["carouselButton"], "onNextSlideHandler"].join(" ")}
          type="button"
        >
          <Icon.LeftArrow />
        </button>
      </div>
      <Swiper
        slidesPerView={4}
        navigation={{
          nextEl: ".onNextSlideHandler",
          prevEl: ".onPrevSlideHandler",
        }}
        spaceBetween={80}
        touchStartForcePreventDefault={true}
        simulateTouch={false}
        centeredSlides={false}
        modules={[Navigation]}
        className="mySwiper"
      >
        {blocks?.map((item) => (
          <SwiperSlide key={item?.id}>
            <SliderBlock item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
