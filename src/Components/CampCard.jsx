import { FaCalendar, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
const CampCard = ({camp}) => {
    console.log(camp)
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
          <p className="flex items-center gap-3"><FaCalendarAlt></FaCalendarAlt> {
            new Date(date_time).toLocaleDateString('en-US',{
            
                year:'numeric',
                month:'long',
                day:'2-digit'
            })

          }</p>
          <p className="flex items-center gap-3"><FaLocationArrow></FaLocationArrow>{location} </p>
          <p className="flex items-center gap-3"><BsCurrencyDollar></BsCurrencyDollar>{camp_fee} </p>
          <p title="participant count " className="flex items-center gap-3 "><MdGroups2 />{participant_count}</p>
          <div className="flex  justify-end">
            <button className="primary">Details</button>
          </div>
        </div>
      </div>
    );
};

export default CampCard;