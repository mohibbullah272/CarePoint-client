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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full py-16 bg-gray-100 text-center px-4"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">Upcoming Events</h2>
      <div className="max-w-3xl mx-auto">
        <Slider {...settings}>
          {upcomingEvents.map((event) => (
            <div key={event.id} className="p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto">
              <FaCalendarAlt className="text-3xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">📅 {event.date}</p>
              <p className="text-gray-600 text-sm sm:text-base">📍 {event.location}</p>
              <img
                src={event.image}
                alt={event.title}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mt-4 border-2 border-gray-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
};

export default UpcomingEvents;
