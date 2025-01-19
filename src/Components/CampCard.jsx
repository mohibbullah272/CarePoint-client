import { FaCalendar, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";
const CampCard = ({camp}) => {
    const {_id,professional_name,location,description,camp_name,camp_fee,date_time,
        image,participant_count}=camp || {}
    return (
        <div className="card flex flex-col">
        <figure>
          <img
          className="w-full h-[150px] object-cover"
            src={image}
            alt="camp-img" />
        </figure>
        <div className="flex-grow p-2">
          <h2 className="font-semibold italic">{camp_name}</h2>
          <p className="text-gray-900">{description?.slice(0,50)}..........</p>
          <p className="flex items-center gap-3"><FaUserDoctor></FaUserDoctor> {professional_name}</p>
          <p className="flex items-center gap-3"><FaCalendarAlt></FaCalendarAlt> {
            new Date(date_time).toLocaleDateString('en-US',{
            
                year:'2-digit',
                month:'numeric',
                day:'numeric',
                hour:'2-digit',
                minute:'2-digit',
                hour12:true
            })

          }</p>
          <p className="flex items-center gap-3"><FaLocationArrow></FaLocationArrow>{location} </p>
          <p className="flex items-center gap-3"><BsCurrencyDollar></BsCurrencyDollar>{camp_fee} </p>
          <p title="participant count " className="flex items-center gap-3 "><MdGroups2 />{participant_count}</p>
          <div className="flex  justify-end">
 <Link to={`/camp-details/${_id}`}>
 <button className="primary">Details</button>
 </Link>
          </div>
        </div>
      </div>
    );
};

export default CampCard;