import React from "react";

import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/pagination";

import Review from "../Review/Review";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const ReviewList = () => {
  return (
    <>
      <h2>Отзывы</h2>
      <div className={styles.wrapper}>
        <div className={styles.cardContainer}>
          <Swiper
            slidesPerView={3}
            spaceBetween={"35rem"}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Review />
            </SwiperSlide>
            <SwiperSlide>
              <Review />
            </SwiperSlide>
            <SwiperSlide>
              <Review />
            </SwiperSlide>
            <SwiperSlide>
              <Review />
            </SwiperSlide>
            <SwiperSlide>
              <Review />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ReviewList;
