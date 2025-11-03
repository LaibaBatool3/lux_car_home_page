import React from 'react';
import logo from '../../assets/logofooter.png';
import fbIcon from '../../assets/facebook.png';
import twIcon from '../../assets/twitter.png';
import liIcon from '../../assets/linkedin.png';
import ggIcon from '../../assets/google.png';
import sendIcon from '../../images/Primary fill.png';

const FooterLink = ({ children }) => (
  <a href="#" className="block text-[12px] text-[#1F1F2C]/100 hover:text-[#E94141] leading-6">{children}</a>
);

const SocialIconImg = ({ src, alt }) => (
  <span className="inline-flex items-center justify-center rounded-md mr-3">
    <img src={src} alt={alt} className="h-8 w-8" />
  </span>
);

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8]">
      <div className="py-12">
        <div className="w-[1041px] max-w-full mx-auto px-4 flex items-start">
          {/* Brand */}
          <div className="md:col-span-2 w-[250px] flex-shrink-0">
            <img src={logo} alt="LUX" className="h-10 mb-4" />
            <p className="text-[12px] text-[#1F1F2C]/100 leading-6 mb-3">
              Trust in the Lord with all your heart, And
              <br/>lean not on your own understanding;
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
          <div className="w-[160] flex-shrink-0" style={{ marginLeft: '60px' }}>
            <h4 className="font-semibold text-[#1F1F2C] text-sm mb-4">Shipping Destinations</h4>
            <FooterLink>Nassau</FooterLink>
            <FooterLink>Freeport</FooterLink>
            <FooterLink>Abaco</FooterLink>
            <FooterLink>Bimini</FooterLink>
          </div>

          {/* Useful Links */}
          <div className="w-[150px] flex-shrink-0" style={{ marginLeft: '20px' }}>
            <h4 className="font-semibold text-[#1F1F2C] text-sm mb-4">Useful Links</h4>
            <FooterLink>Influencer Partners</FooterLink>
            <FooterLink>Privacy Policies</FooterLink>
            <FooterLink>Terms & Conditions</FooterLink>
            <FooterLink>Fees</FooterLink>
          </div>

          {/* Company */}
          <div className="w-[140px] flex-shrink-0" style={{ marginLeft: '15px' }}>
            <h4 className="font-semibold text-[#1F1F2C] text-sm mb-4">Company</h4>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Contact Us</FooterLink>
            <FooterLink>My Account</FooterLink>
            <FooterLink>Discover</FooterLink>
          </div>
          {/* Subscribe */}
          <div className="flex-1 min-w-[190px]" style={{ marginLeft: '15px' }}>
            <h4 className="font-semibold text-[#1F1F2C] text-sm mb-4">Subscribe</h4>
            <p className="text-[12px] text-[#1F1F2C]/80 mb-2">HeadQuarters: Abaco, Bahamas<br/>Ph no.: +12428259510</p>
            <div className="flex items-center">
              <input type="email" placeholder="Info@yourgmail.com" className="flex-1 h-10 rounded-l-md border border-gray-300 px-3 text-[12px] outline-none" />
              <button className="h-10 w-10 rounded-r-md bg-[#E94141] text-white inline-flex items-center justify-center">
                <img src={sendIcon} alt="Send" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#8A8AA0]">
        <p className="text-center py-6 text-sm text-[#1F1F2C]/100">©2024 LUX® First Choice Cars. All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


