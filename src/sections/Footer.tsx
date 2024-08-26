import LogoImage from '@/assets/logosaas.png'
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg'
import SocialInsta from '@/assets/social-insta.svg'
import Sociallinkedin from '@/assets/social-linkedin.svg'
import SocialPin from '@/assets/social-pin.svg'
import SocialYt from '@/assets/social-youtube.svg'

export const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className="inline-flex relative before:content-['']  before:h-full before:blur before:w-full before:bg-[linear-gradient(to_right,#F878FF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:absolute">
        <Image src={LogoImage} alt='SaaS Logo' height={40} className='relative' />
        </div>
          <nav className='flex flex-col gap-6 mt-6 md:flex-row md:justify-center'>
              <a href="#">About </a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Pricing</a>
              <a href="#">Help</a>
              <a href="#">Careers</a>
          </nav>
          <div className='flex justify-center gap-6 mt-6'>
            <SocialX />
            <SocialInsta />
            <Sociallinkedin />
            <SocialPin />
            <SocialYt />
          </div>
          <p className='mt-6'>&copy; 2024 Your company, Inc. All right reserved.</p>
      </div>
    </footer>
  );
};
