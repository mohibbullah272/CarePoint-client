import React from "react";
import ReactFlow, { Handle } from "reactflow";
import "reactflow/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeartbeat, FaHandHoldingMedical, FaUsers, FaHospital } from "react-icons/fa";

const nodes = [
  {
    id: "1",
    position: { x: 250, y: 0 },
    data: { label: "Help to lead healthy life", icon: <FaHeartbeat className="text-red-500 text-3xl" /> },
    type: "custom",
  },
  {
    id: "2",
    position: { x: 100, y: 150 },
    data: { label: "Free Medical Camps", icon: <FaHandHoldingMedical className="text-blue-500 text-3xl" /> },
    type: "custom",
  },
  {
    id: "3",
    position: { x: 400, y: 150 },
    data: { label: "Community Awareness", icon: <FaUsers className="text-green-500 text-3xl" /> },
    type: "custom",
  },
  {
    id: "4",
    position: { x: 250, y: 300 },
    data: { label: "Better Healthcare Access", icon: <FaHospital className="text-purple-500 text-3xl" /> },
    type: "custom",
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e2-4", source: "2", target: "4", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true },
];

const CustomNode = ({ data }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4 text-[#1a1a1a] border border-gray-200 hover:border-[#7e9695] transition-all duration-300"
    >
      {data.icon}
      <span className="font-semibold text-lg">{data.label}</span>
      <Handle type="source" position="bottom" style={{ background: "#7e9695" }} />
      <Handle type="target" position="top" style={{ background: "#7e9695" }} />
    </motion.div>
  );
};

const OurGoal = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full flex flex-col items-center py-16 bg-[#f7f7f7]"
    >
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-[#1a1a1a] mb-12"
      >
        Our Goal
      </motion.h3>
      <div className="w-full max-w-5xl h-[500px] rounded-2xl shadow-xl bg-white p-6 overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges.map((edge, index) => ({
            ...edge,
            style: {
              stroke: "#7e9695",
              strokeWidth: 2,
              animation: `dash 2s linear forwards ${index * 0.5}s`,
            },
          }))}
          fitView
          nodeTypes={{ custom: CustomNode }}
          className="react-flow-custom"
        />
        <style jsx>{`
          .react-flow-custom .react-flow__edge-path {
            stroke-dasharray: 5;
            stroke-dashoffset: 100;
            animation: dash 2s linear forwards;
          }
          @keyframes dash {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </div>
    </motion.section>
  );
};

export default OurGoal;