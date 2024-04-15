import React from "react";
import Card from "../Card/Card";

import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Popular = () => {
  return (
    <>
      <h2>Популярные гадания</h2>
      <div className={styles.cardContainer}>
        <Card />
        {/* <Swiper
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
              spaceBetween: "35rem",
            },
            1120: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper> */}
      </div>
    </>
  );
};

export default Popular;
