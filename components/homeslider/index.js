import { Component } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay, A11y, Lazy, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.css';
import { attributes, react as SliderContent } from '../../content/slider.md';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default class Slider extends Component {
  render() {
    let { title, slider } = attributes;
    return (
      <>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y, Lazy, EffectFade]}
          className={styles.slidecontainer}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={true}
          lazy={true}
          effect={'fade'}
          loop={true}
        >
          {slider.map((slides, k) => (
            <SwiperSlide key={k}>
              <div className="">
                <div className="bgWrap">
                  <Image
                    className="object-cover w-full h-full"
                    alt={slides.title}
                    src={'/' + slides.image}
                    layout="fill"
                  />
                </div>
                <div className={styles.overlay}></div>
                <div className={styles.textcontainer}>
                  <div className={styles.slidertext}>
                    <div className={styles.text}>
                      <h2 className={styles.texthead}>{slides.title}</h2>
                      <p className={styles.textp}>{slides.description}</p>
                      <p className={styles.textp}>
                        <a href={slides.url} className={styles.textbutton + ' button-default'}>
                          İletişime Geç
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <SliderContent />
      </>
    );
  }
}
