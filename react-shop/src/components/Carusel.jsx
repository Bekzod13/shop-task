
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import {Autoplay} from 'swiper';



const Carusel = ({banners}) => {

  return (
    <div className='container carusel'>
    <Swiper
     spaceBetween={30}
     centeredSlides={true}
     autoplay={{
       delay: 2500,
     }}
     modules={[Autoplay]}
     className="mySwiper"
     >
        {
            banners.length === 0 ? 
            <div className='loading'>Loading ...</div>:
            banners.map( banner => (
            <SwiperSlide key={banner.id} className="carusel-item" style={{backgroundImage:`${banner.image}`}} >
                <h1 className="banner-title">{banner.title}</h1>
            </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
}

export default Carusel;
