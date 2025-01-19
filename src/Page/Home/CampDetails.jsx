import { BsCurrencyDollar } from "react-icons/bs";
import { FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import JoinCampForm from "../../Components/JoinCampForm";

const CampDetails = () => {
    const campData = useLoaderData()
    const {_id,professional_name,location,description,camp_name,camp_fee,date_time,
        image,participant_count}=campData.data ||{}
        const [opened, { open, close }] = useDisclosure(false);
    return (
        <div className="min-h-screen  flex md:flex-row flex-col   md:p-10 gap-5 p-5">
      <div className="md:w-1/2 w-full">
        <img className="w-full md:h-[400px] h-[200px]object-cover" src={image} alt="detail img" />
      </div>
      <Modal opened={opened} onClose={close} title="Join Camp">
    <JoinCampForm close={close} camp={campData}></JoinCampForm>
      </Modal>
      <div className="md:w-1/2 w-full ">
<h3 className="text-2xl font-semibold text-gray-900">{camp_name}</h3>
<p>{description}</p>
     <p className="flex items-center gap-3"><FaUserDoctor></FaUserDoctor> {professional_name}</p>
          <p className="flex items-center gap-3"><FaCalendarAlt></FaCalendarAlt> {
            new Date(date_time).toLocaleDateString('en-US',{
            
                year:'numeric',
                month:'long',
                day:'2-digit',
                hour:'2-digit',
                minute:'2-digit',
                hour12:true
           
            })

          }</p>
          <p className="flex items-center gap-3"><FaLocationArrow></FaLocationArrow>{location} </p>
          <p className="flex items-center gap-3"><BsCurrencyDollar></BsCurrencyDollar>{camp_fee} </p>
          <p title="participant count " className="flex items-center gap-3 "><MdGroups2 />{participant_count}</p>
          <div className="flex mt-5 justify-end">
            <button onClick={open} className="primary">
          Join Camp
            </button>
          </div>
      </div>
        </div>
    );
};

export default CampDetails;