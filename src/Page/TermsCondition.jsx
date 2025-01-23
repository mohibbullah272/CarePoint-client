import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-[#fafafa] text-[#0d0e0e] min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-[#7e9695]">Terms & Conditions</h1>
        <p className="mb-4 text-lg">
          Welcome to our Medical Camp Management System. By using our services, you agree to be bound by the following terms and conditions. Please read them carefully.
        </p>
        <h2 className="text-2xl font-semibold text-[#8fb0ae] mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using our platform, you accept and agree to comply with these terms and conditions. If you do not agree with any part of these terms, you must discontinue using the platform.
        </p>
        <h2 className="text-2xl font-semibold text-[#8fb0ae] mb-4">2. User Responsibilities</h2>
        <p className="mb-4">
          Users must ensure that the information they provide is accurate and up-to-date. Any misuse of the platform, including the submission of false information, may result in account termination.
        </p>
        <h2 className="text-2xl font-semibold text-[#8fb0ae] mb-4">3. Privacy Policy</h2>
        <p className="mb-4">
          We value your privacy. Please refer to our <a href="/privacy-policy" className="text-[#7e9695] underline">Privacy Policy</a> to understand how we collect, use, and safeguard your personal data.
        </p>
        <h2 className="text-2xl font-semibold text-[#8fb0ae] mb-4">4. Limitation of Liability</h2>
        <p className="mb-4">
          We are not responsible for any damages or losses arising from the use of our services. Users assume full responsibility for their actions on the platform.
        </p>
        <h2 className="text-2xl font-semibold text-[#8fb0ae] mb-4">5. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to update these terms at any time without prior notice. Continued use of the platform after changes are made signifies your acceptance of the updated terms.
        </p>
        <h2 className="text-2xl font-semibold text-[#8fb0ae] mb-4">6. Contact Us</h2>
        <p>
          If you have any questions about these terms, feel free to contact us at <a href="mailto:info@medicalcamp.com" className="text-[#7e9695] underline">info@medicalcamp.com</a>.
        </p>
       
      </div>
    </div>
  );
};

export default TermsAndConditions;
