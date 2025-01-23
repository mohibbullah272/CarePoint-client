import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-[#fafafa] text-[#0d0e0e] min-h-screen flex flex-col items-center px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl w-full">
        {/* Header Section */}
        <header className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#7e9695]">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-[#8fb0ae]">
            Dedicated to providing seamless healthcare camp management for everyone.
          </p>
        </header>

        {/* Mission Section */}
        <section className="py-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#7e9695]">
            Our Mission
          </h2>
          <p className="text-md md:text-lg leading-relaxed">
            At <span className="font-bold text-[#8fb0ae]">Medical Camp Pro</span>, our mission is to bridge the gap
            between medical professionals and communities in need. We aim to make healthcare more accessible,
            organized, and efficient through cutting-edge technology and dedicated support.
          </p>
        </section>

        {/* Vision Section */}
        <section className="py-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#7e9695]">
            Our Vision
          </h2>
          <p className="text-md md:text-lg leading-relaxed">
            We envision a future where medical camps are empowered by technology, fostering better health outcomes and
            stronger communities. With our platform, we strive to set a standard for reliability and user-friendliness.
          </p>
        </section>

        {/* Values Section */}
        <section className="py-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#7e9695]">
            Our Values
          </h2>
          <ul className="list-disc pl-5 text-md md:text-lg leading-relaxed space-y-2">
            <li>
              <span className="font-bold text-[#8fb0ae]">Compassion:</span> We care deeply about the people and communities we serve.
            </li>
            <li>
              <span className="font-bold text-[#8fb0ae]">Integrity:</span> Transparency and honesty are at the core of everything we do.
            </li>
            <li>
              <span className="font-bold text-[#8fb0ae]">Innovation:</span> We embrace new ideas to improve healthcare outcomes.
            </li>
          </ul>
        </section>

        {/* Contact Us Section */}
        <section className="py-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#7e9695]">
            Contact Us
          </h2>
          <p className="text-md md:text-lg leading-relaxed">
            Want to know more about our services or collaborate with us? Feel free to{" "}
            <span className="text-[#a8bdbc] font-semibold cursor-pointer hover:underline">
              get in touch
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
