// == Import npm
import React from 'react';
import SwiperCore, {
  Navigation, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ChannelStream from 'src/components/Main/SectionLiveStreamers/ChannelStream';

// == Import
import './sectionTopStreamers.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, A11y]);
// == Composant
const SectionTopStreamers = ({ streams }) => (
  <div className="section sectionTopStreamers">
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {streams.map((liveStream) => (
        <SwiperSlide
          key={liveStream.id}
          virtualIndex={liveStream.id}
        >
          <ChannelStream
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
