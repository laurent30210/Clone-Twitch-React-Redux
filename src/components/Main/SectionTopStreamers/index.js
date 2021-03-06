// == Import npm
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';
import LiveStreamMin from 'src/components/LiveStreamMin';

// == Import
import './sectionTopStreamers.scss';
import 'swiper/swiper.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

SwiperCore.use([EffectCoverflow]);
// == Composant
const SectionTopStreamers = ({ streams }) => (
  <div className="section sectionTopStreamers">

    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      effect="coverflow"
    >
      {streams.map((liveStream) => (
        <SwiperSlide
          key={liveStream.id}
          virtualIndex={liveStream.id}
        >
          <LiveStreamMin
            key={liveStream.id}
            id={liveStream.id}
            userName={liveStream.user_name}
            loginName={liveStream.login}
            gameName={liveStream.game_name}
            userPic={liveStream.picUser}
            title={liveStream.title}
            viewer={liveStream.viewer_count}
            language={liveStream.language}
            image={liveStream.thumbnail_url}
            type={liveStream.type}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

// == Export
export default SectionTopStreamers;
