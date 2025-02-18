import React from "react";
import toast from "react-hot-toast";

const Support = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
        const name = e.target.name.value
        toast.success(`${name} Thanks For reach us we will clarify your problem  as soon as possible `)
        e.target.reset()
    }
  return (
    <div className="bg-[#fafafa] min-h-screen flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
        <h1 className="text-[#0d0e0e] text-3xl font-bold text-center mb-6">Support</h1>
        <p className="text-[#0d0e0e] text-center mb-4">
          Need help? Contact us and we'll assist you as soon as possible.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#0d0e0e] font-medium">Name</label>
            <input 
              type="text" 
              name="name"
              className="w-full border border-[#a8bdbc] rounded-lg p-2 focus:outline-none  focus:ring-2 focus:ring-[#7e9695]"
              placeholder="Enter your name" 
              required
            />
          </div>
          <div>
            <label className="block text-[#0d0e0e] font-medium">Email</label>
            <input 
              type="email" 
              className="w-full border border-[#a8bdbc] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#7e9695]"
              placeholder="Enter your email" 
              required
            />
          </div>
          <div>
            <label className="block text-[#0d0e0e] font-medium">Message</label>
            <textarea 
              className="w-full border border-[#a8bdbc] rounded-lg p-2 h-28 focus:outline-none focus:ring-2 focus:ring-[#7e9695]"
              placeholder="Describe your issue" 
              required
            />
          </div>
          <button 

            type="submit" 
            className="w-full bg-[#7e9695] text-white font-semibold py-2 rounded-lg hover:bg-[#8fb0ae] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
