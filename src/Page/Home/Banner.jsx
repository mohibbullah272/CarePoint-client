import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
  <div className='h-[600px]'>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
  <div
    className="relative flex items-center justify-center h-[500px] text-center text-white"
    style={{
      background: `url("https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
   
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

 
    <div className="relative z-10 p-5 max-w-lg">
      <h3 className="text-2xl font-bold mb-4">Over 
        +500 Free Consultations Given</h3>
      <p>
        Our team of experts provided free consultations to individuals in need, helping prevent
        life-threatening conditions.
      </p>
      <button className='primary mt-4 italic'>Join Our Next Camp</button>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div
    className="relative flex items-center justify-center h-[500px] text-center text-white"
    style={{
      background: `url("https://images.pexels.com/photos/6129237/pexels-photo-6129237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
 
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

   
    <div className="relative p-5 z-10 max-w-lg">
      <h3 className="text-2xl font-bold mb-4">We’ve Delivered Over 200 Surgeries!</h3>
      <p>
      From small surgeries to life-saving procedures, we’ve helped many regain their health and quality of life.
      </p>
      <button className='primary mt-4 italic'>See More Stories</button>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div
    className="relative flex items-center justify-center h-[500px] text-center text-white"
    style={{
      background: `url("https://images.pexels.com/photos/8460371/pexels-photo-8460371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
   
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

   
    <div className="relative p-5 z-10 max-w-lg">
      <h3 className="text-2xl font-bold mb-4">Changing Lives, One Camp at a Time!</h3>
      <p>
      Our volunteers have made a direct impact in improving public health through dedicated service
      </p>
      <button className='primary italic mt-4'>Book Your Appointment Today</button>
    </div>
  </div>
</SwiperSlide>

      </Swiper>
  </div>
    );
};

export default Banner;