import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const upcomingEvents = [
  {
    id: 1,
    title: "Free Eye Checkup Camp",
    date: "March 15, 2025",
    location: "Dhaka Medical Center",
    image: "https://images.pexels.com/photos/5752306/pexels-photo-5752306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Blood Donation Drive",
    date: "April 5, 2025",
    location: "Chittagong City Hospital",
    image: "https://images.pexels.com/photos/1164531/pexels-photo-1164531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "General Health Camp",
    date: "May 20, 2025",
    location: "Rajshahi Community Hall",
    image: "https://images.pexels.com/photos/5473223/pexels-photo-5473223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const UpcomingEvents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full py-16 bg-[#f7f7f7] text-center px-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-[#1a1a1a] mb-12"
      >
        Upcoming Events
      </motion.h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings} className="slick-slider-custom">
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="p-4"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">{event.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <FaCalendarAlt className="text-[#7e9695]" />
                    <p className="text-sm">{event.date}</p>
                  </div>
                  <p className="text-sm text-gray-600">📍 {event.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .slick-slider-custom .slick-dots li button:before {
          font-size: 12px;
          color: #7e9695;
          opacity: 0.5;
        }
        .slick-slider-custom .slick-dots325 li.slick-active button:before {
          color: #7e9695;
          opacity: 1;
        }
        .slick-slider-custom .slick-prev,
        .slick-slider-custom .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
          background: #7e9695;
          border-radius: 50%;
          transition: all 0.3s;
        }
        .slick-slider-custom .slick-prev:hover,
        .slick-slider-custom .slick-next:hover {
          background: #6a827f;
        }
        .slick-slider-custom .slick-prev:before,
        .slick-slider-custom .slick-next:before {
          color: white;
        }
        .slick-slider-custom .slick-prev {
          left: -50px;
        }
        .slick-slider-custom .slick-next {
          right: -50px;
        }
        @media (max-width: 640px) {
          .slick-slider-custom .slick-prev {
            left: 10px;
          }
          .slick-slider-custom .slick-next {
            right: 10px;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default UpcomingEvents;