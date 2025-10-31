import React from 'react';

const CheckRow = ({ title, text }) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 mb-2">
      <svg className="w-5 h-5 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <h4 className="text-[#0F172A] font-semibold text-lg md:text-xl">{title}</h4>
    </div>
    <p className="text-gray-600 text-sm leading-6 md:leading-7">
      {text}
    </p>
  </div>
);

const DividerLabel = ({ children }) => (
  <div className="flex items-center gap-3 text-sm text-[#6B7280]">
    <span className="flex-1 h-px bg-[#E5E7EB]" />
    {children}
    <span className="flex-1 h-px bg-[#E5E7EB]" />
  </div>
);

const RegisterSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="w-[1041px] max-w-full mx-auto px-4 grid md:grid-cols-2 gap-[30px]">
        {/* Left features */}
        <div>
          <CheckRow
            title="Affordable Prices"
            text="One of the main benefits of buying cars at auctions is the potential for BIG savings. Cars at auctions can be purchased for as little as 30–50% of their retail value. This makes it a very profitable option compared to buying from a dealership, where prices are often much higher"
          />
          <CheckRow
            title="Wide Selection"
            text="We have more than 145,808 vehicles available, including cars with minor damage or no damage at all. If you want to find cars with minimal damage, look for those with descriptions such as hail, theft recovery, vandalism, repossession, rejected repair, minor dents and scratches, or replaced VIN."
          />
          <CheckRow
            title="Easy Bidding Process"
            text="Our easy to use platform makes the bidding process straightforward. Simply place your max bid during preliminary bidding, and we’ll take care of the rest. We’ll only raise your bid by one increment to keep you on top."
          />
          <CheckRow
            title="Comprehensive Support"
            text="From registration to final delivery, we offer comprehensive support throughout the entire auction process. Our VIP car bidding assistance ensures you have all the help you need to make informed decisions and secure the best deals."
          />
        </div>

        {/* Right form */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#161A2B] text-center mb-8">Register A New Account For Free</h3>

          <div className="space-y-8">
            <DividerLabel>Register with social</DividerLabel>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <button className="rounded-full border-2 border-[#CA0000] text-[#0F172A] py-3 px-4 flex items-center justify-center gap-2 hover:bg-[#FFF5F5]">
                <span className="text-[#CA0000] font-bold">G</span> Google
              </button>
              <button className="rounded-full border-2 border-[#CA0000] text-[#0F172A] py-3 px-4 flex items-center justify-center gap-2 hover:bg-[#FFF5F5]">
                <span className="text-[#CA0000] font-bold">f</span> Facebook
              </button>
            </div>

            <DividerLabel>Or continue with email</DividerLabel>

            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full rounded-md border border-[#E5E7EB] bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E94141]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-md border border-[#E5E7EB] bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E94141]"
            />

            <label className="flex items-center gap-2 text-xs text-[#6B7280]">
              <input type="checkbox" className="accent-[#E94141]" />
              I Agree with the <a className="text-black font-semibold" href="#">Terms & Conditions</a> and <a className="text-black font-semibold" href="#">Privacy Policy</a>
            </label>

            <button className="w-full rounded-full bg-[#FFF5F5] text-[#CA0000] py-3.5 font-semibold hover:opacity-95">Register Now</button>

            <p className="text-center text-xs text-[#6B7280]">Already have an account? <a href="#" className="text-[#E94141]">Login</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
