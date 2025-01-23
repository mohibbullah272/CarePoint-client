import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Contact = () => {
       const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
          } = useForm()
          const onSubmit=(data)=>{
            toast.success("Thanks for reaching out! We'll respond as soon as possible")
            reset()
          }
  return (
    <div className="bg-[#fafafa] text-[#0d0e0e] min-h-screen flex flex-col items-center px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl w-full">

        <header className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#7e9695]">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-[#8fb0ae]">
            Have questions or need assistance? We're here to help!
          </p>
        </header>

     
        <section className="bg-white shadow-md rounded-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#7e9695] text-center">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
         
            <div>
              <label htmlFor="name" className="block text-md font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                {...register('name')}
                placeholder="Enter your name"
                className="w-full p-3 border border-[#a8bdbc] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8fb0ae]"
              />
            </div>

          
            <div>
              <label htmlFor="email" className="block text-md font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                {...register('email')}
                placeholder="Enter your email"
                className="w-full p-3 border border-[#a8bdbc] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8fb0ae]"
              />
            </div>

   
            <div>
              <label htmlFor="message" className="block text-md font-semibold mb-2">
                Your Message
              </label>
              <textarea
              {...register('msg')}
              required
                id="message"
                rows="5"
                placeholder="Write your message here"
                className="w-full p-3 border border-[#a8bdbc] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8fb0ae]"
              ></textarea>
            </div>

         
            <button
              type="submit"
              className="w-full bg-[#7e9695] text-white font-semibold py-3 rounded-lg hover:bg-[#8fb0ae] transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>

    
        <section className="text-center py-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#7e9695]">
            Contact Information
          </h2>
          <p className="text-md md:text-lg mb-2">
            Email:{" "}
            <a
              href="mailto:support@medicalcamp.com"
              className="text-[#a8bdbc] hover:underline"
            >
              support@medicalcamp.com
            </a>
          </p>
          <p className="text-md md:text-lg mb-2">
            Phone:{" "}
            <a href="tel:+1234567890" className="text-[#a8bdbc] hover:underline">
              +1 234 567 890
            </a>
          </p>
          <p className="text-md md:text-lg">
            Address: 123 Medical Camp Lane, Healthcare City, Country
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
