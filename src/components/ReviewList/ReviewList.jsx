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
      <div className={styles.cardContainer}>
        <Swiper
          slidesPerView={3}
          spaceBetween={"35rem"}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          initialSlide={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: "17.5rem",
            },
            710: {
              slidesPerView: 2,
            },
            1050: {
              slidesPerView: 3,
            },
          }}
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
    </>
  );
};

export default ReviewList;
