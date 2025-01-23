import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hook/useAxiosPublic';
import { Link } from 'react-router-dom';

const TopCamp = () => {
    const axiosPublic = useAxiosPublic()
    const {data:camps}=useQuery({
        queryKey:['topCamp'],
        queryFn:async()=>{
            const {data} = await axiosPublic('/top-register-camp')
            return data
        }
    })
    return (
        <div data-aos="fade-left" className='my-20'>
            <h3 className='text-3xl text-center text-black mb-10'>Budget Freindly Camps</h3>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            412:{
                slidesPerView:1,
                spaceBetween:20
            },
            768:{
                slidesPerView:2,
                spaceBetween:30
            },
            996:{
                slidesPerView:3,
                spaceBetween:40
            }
        }}
        autoplay={{
            delay:2000,
            disableOnInteraction: false
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        className="mySwiper"
      >
    {
        camps?.map(camp=>    <SwiperSlide key={camp?._id}>
     <Link to={`/camp-details/${camp?._id}`}>
     <div  className="relative group hover:transform hover:-translate-y-2 hover:scale-105 transition duration-300 ease-in-out">
  
  <img
    className="h-[400px] object-cover w-full"
    src={camp?.image}
    alt={camp?.camp_name|| "Camp Image"}
  />

  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  <p className="absolute inset-0 flex items-center justify-center text-center text-white text-xl font-semibold bg-opacity-0">
    {camp?.camp_name}
  </p>
</div>
     </Link>
        </SwiperSlide>)
    }

      </Swiper>


        </div>
    );
};

export default TopCamp;