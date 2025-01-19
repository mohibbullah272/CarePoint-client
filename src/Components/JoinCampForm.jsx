import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const JoinCampForm = ({camp,close}) => {
    const {_id,professional_name,camp_name,camp_fee,
      location}=camp.data ||{}
 const {user}=useContext(AuthContext)
    return (
        <div>
             <form>
    <div className="flex gap-5">
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Camp Name</span>
          </label>
          <input type="text" defaultValue={camp_name} className="input cursor-not-allowed w-full input-bordered" readOnly />
        </div>
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Camp Fee</span>
          </label>
          <input type="text" defaultValue={camp_fee} className="input  cursor-not-allowed w-full input-bordered" readOnly  />
        </div>
    </div>
    <div className="flex gap-5">
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Professional Name</span>
          </label>
          <input type="text" defaultValue={professional_name} className="input w-full input-bordered cursor-not-allowed" readOnly />
        </div>
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" defaultValue={location} className="input cursor-not-allowed w-full input-bordered" readOnly />
        </div>
    </div>
    <div className="flex gap-5">
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Participant Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} className="input cursor-not-allowed w-full input-bordered" readOnly />
        </div>
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Participant Email</span>
          </label>
          <input type="email" defaultValue={user?.email} className="input cursor-not-allowed  w-full input-bordered" readOnly />
        </div>
    </div>
    <div className="flex gap-5">
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input type="text" className="input w-full input-bordered " required />
        </div>
        <div className="form-control w-1/2">
  <label className="label">
    <span className="label-text">Gender</span>
  </label>
  <select className="select w-full input-bordered" required>
    <option disabled selected value="">
      Select Gender
    </option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>
    </div>
    <div className="flex gap-5">
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="number"  className="input  w-full input-bordered" required />
        </div>
    <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Emergency Contact</span>
          </label>
          <input type="text"  className="input  w-full input-bordered" required />
        </div>
    </div>
   
        <div className="form-control mt-6">
          <button className="btn primary">Submit</button>
        </div>
      </form>
        </div>
    );
};

export default JoinCampForm;