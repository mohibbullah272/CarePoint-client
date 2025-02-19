import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaHospital, FaUserMd, FaUsers, FaComments } from "react-icons/fa";

const stats = [
  { id: 1, label: "Total Camps", value: 150, icon: <FaHospital className="text-blue-500 text-4xl" /> },
  { id: 2, label: "Total Registrations", value: 1200, icon: <FaUserMd className="text-green-500 text-4xl" /> },
  { id: 3, label: "Total Users", value: 5000, icon: <FaUsers className="text-purple-500 text-4xl" /> },
  { id: 4, label: "Total Feedbacks", value: 850, icon: <FaComments className="text-yellow-500 text-4xl" /> },
];

const OurSuccess = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col items-center py-16 bg-gray-100"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Success</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl border border-gray-300"
          >
            {stat.icon}
            <h3 className="text-2xl font-semibold text-gray-800 mt-3">
              {inView && <CountUp start={0} end={stat.value} duration={2.5} />}+
            </h3>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default OurSuccess;
