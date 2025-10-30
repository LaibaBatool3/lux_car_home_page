import React from 'react';
import logo from '../../assets/logofooter.png';
import fbIcon from '../../assets/facebook.png';
import twIcon from '../../assets/twitter.png';
import liIcon from '../../assets/linkedin.png';
import ggIcon from '../../assets/google.png';

const FooterLink = ({ children }) => (
  <a href="#" className="block text-[12px] text-[#2C3548]/80 hover:text-[#E94141] leading-6">{children}</a>
);

const SocialIconImg = ({ src, alt }) => (
  <span className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-[#F3F3F6] mr-3">
    <img src={src} alt={alt} className="h-4 w-4" />
  </span>
);

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="app-wrap py-12">
        <div className="flex items-start gap-[27px] overflow-x-auto scrollbar-hide">
          {/* Brand */}
          <div className="md:col-span-2 min-w-[220px]">
            <img src={logo} alt="LUX" className="h-10 mb-4" />
            <p className="text-[12px] text-[#2C3548]/80 leading-6 mb-3">
              Trust in the Lord with all your heart,
              <br/>And lean not on your own understanding;
              <br/>In all your ways acknowledge Him,
              <br/>And He shall direct your paths.
              <br/>~ Proverbs 3:5-6
            </p>
            <div className="mt-3">
              <SocialIconImg src={fbIcon} alt="Facebook" />
              <SocialIconImg src={twIcon} alt="Twitter" />
              <SocialIconImg src={liIcon} alt="LinkedIn" />
              <SocialIconImg src={ggIcon} alt="Google" />
            </div>
          </div>

          {/* Shipping Destinations */}
          <div className="min-w-[160px]">
            <h4 className="font-semibold text-[#2C3548] text-sm mb-4">Shipping Destinations</h4>
            <FooterLink>Nassau</FooterLink>
            <FooterLink>Freeport</FooterLink>
            <FooterLink>Abaco</FooterLink>
            <FooterLink>Bimini</FooterLink>
          </div>

          {/* Useful Links */}
          <div className="min-w-[160px]">
            <h4 className="font-semibold text-[#2C3548] text-sm mb-4">Useful Links</h4>
            <FooterLink>Influencer Partners</FooterLink>
            <FooterLink>Privacy Policies</FooterLink>
            <FooterLink>Terms & Conditions</FooterLink>
            <FooterLink>Fees</FooterLink>
          </div>

          {/* Company */}
          <div className="min-w-[180px]">
            <h4 className="font-semibold text-[#2C3548] text-sm mb-4">Company</h4>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Contact Us</FooterLink>
            <FooterLink>My Account</FooterLink>
            <FooterLink>Discover</FooterLink>
          </div>
          {/* Subscribe */}
          <div className="min-w-[220px]">
            <h4 className="font-semibold text-[#2C3548] text-sm mb-4">Subscribe</h4>
            <p className="text-[12px] text-[#2C3548]/80 mb-2">HeadQuarters: Abaco, Bahamas<br/>Ph no.: +12428259510</p>
            <div className="flex items-center">
              <input type="email" placeholder="Info@yourgmail.com" className="flex-1 h-9 rounded-l-md border border-gray-300 px-3 text-[12px] outline-none" />
              <button className="h-10 w-10 rounded-r-md bg-[#E94141] text-white inline-flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5 12h12l-5 5 1.41 1.41L22.83 12l-9.42-6.41L12 7l5 5H5z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <p className="text-center py-6 text-sm text-[#2C3548]/80">©2024 LUX® First Choice Cars. All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


