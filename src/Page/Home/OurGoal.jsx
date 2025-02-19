import React from "react";
import ReactFlow, { Handle } from "reactflow";
import "reactflow/dist/style.css";
import { motion } from "framer-motion";
import { FaHeartbeat, FaHandHoldingMedical, FaUsers, FaHospital } from "react-icons/fa";

const nodes = [
  {
    id: "1",
    position: { x: 250, y: 5 },
    data: { label: "Our Mission", icon: <FaHeartbeat className='text-red-500 text-2xl' /> },
    type: "input",
  },
  {
    id: "2",
    position: { x: 100, y: 100 },
    data: { label: "Free Medical Camps", icon: <FaHandHoldingMedical className='text-blue-500 text-2xl' /> },
  },
  {
    id: "3",
    position: { x: 400, y: 100 },
    data: { label: "Community Awareness", icon: <FaUsers className='text-green-500 text-2xl' /> },
  },
  {
    id: "4",
    position: { x: 250, y: 200 },
    data: { label: "Better Healthcare Access", icon: <FaHospital className='text-purple-500 text-2xl' /> },
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e3-4", source: "3", target: "4" },
];

const CustomNode = ({ data }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" shadow-md p-4 rounded-lg flex items-center gap-2 text-gray-700 "
    >
      {data.icon}
      <span className="font-semibold">{data.label}</span>
    </motion.div>
  );
};

const OurGoal = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col items-center py-10 "
    >
    
      <div className="w-full h-[350px]  rounded-xl shadow-lg p-5 ">
        <ReactFlow
          nodes={nodes.map((node) => ({ ...node, data: { ...node.data }, type: "custom" }))}
          edges={edges}
          fitView
          nodeTypes={{ custom: CustomNode }}
        />
      </div>
    </motion.section>
  );
};

export default OurGoal;
