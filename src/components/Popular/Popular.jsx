import React from "react";
import Card from "../Card/Card";

import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/pagination";

import cardArray from "../../data/cardArray";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Popular = () => {
  return (
    <>
      <h2>Популярные гадания</h2>
      <div className={styles.cardContainer}>
        <Swiper
          slidesPerView={3}
          spaceBetween={"35rem"}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          initialSlide={1}
          style={{ height: "100%" }}
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
          {cardArray.slice(0, 3).map((item, key) => (
            <SwiperSlide key={key}>
              <Card
                id={item.id}
                name={item.name}
                description={item.description}
                type={item.type}
                image={item.image}
                isLiked={item.isLiked}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Popular;
