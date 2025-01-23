import { BsCurrencyDollar } from "react-icons/bs";
import { FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import JoinCampForm from "../../Components/JoinCampForm";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingPage from "../loading/LoadingPage";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CampDetails = () => {
  const {user}=useContext(AuthContext)
    const {id}=useParams()
    const navigate = useNavigate()
    const {data:campData,isLoading,refetch}=useQuery({
      queryKey:["campDetails",id],
      queryFn:async()=>{
        const {data} = await axios(`http://localhost:8500/camp-details/${id}`)
        return data
      }
    })
    const handleUserToJoin=()=>{
      Swal.fire({
        title: "User login required!!",
        text: "please login first to join this camp",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#8fb0ae",
        cancelButtonColor: "#9CA3AF",
        confirmButtonText: "Login"
      }).then((result) => {
       navigate('/joinUs')
      });
    }
    const {_id,professional_name,location,description,camp_name,camp_fee,date_time,
        image,participant_count}=campData ||{}
        const [opened, { open, close }] = useDisclosure(false);
        if(isLoading){
          return <LoadingPage></LoadingPage>
        }
    return (
        <div className="min-h-screen  flex md:flex-row flex-col   md:p-10 gap-5 p-5">
      <div className="md:w-1/2 w-full">
        <img className="w-full md:h-[400px] h-[200px]object-cover" src={image} alt="detail img" />
      </div>
      <Modal opened={opened} onClose={close} title="Join Camp">
    <JoinCampForm close={close} refetch={refetch} camp={campData}></JoinCampForm>
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
            <button onClick={()=>{user?open():handleUserToJoin()}
        
            } className="primary">
          Join Camp
            </button>
          </div>
      </div>
        </div>
    );
};

export default CampDetails;