import { Button } from 'flowbite-react';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className='flex-1 flex flex-col'>
        <h2 className='text-2xl'>
          Connect with me on social media
        </h2>
        <p className='text-gray-500 my-2'>Stay updated and connected with me on Facebook, Instagram and LinkedIn for the latest content, updates and insights. Let's stay in touch across these platforms!</p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
          <Button className='rounded-tl-xl rounded-bl-none px-4 py-2 text-sm' gradientDuoTone='purpleToBlue' href="https://www.facebook.com/imesha.thilakaratne?mibextid=dGKdO6" target='_blank' rel='noopener noreferrer'>
            <FaFacebook className="mr-2" /> Facebook
          </Button>
          <Button className='px-4 py-2 text-sm' gradientDuoTone='purpleToPink' href="https://www.instagram.com/imesha.dewmin/" target='_blank' rel='noopener noreferrer'>
            <FaInstagram className="mr-2" /> Instagram
          </Button>
          <Button className='px-4 py-2 text-sm' gradientMonochrome='info' href="https://www.linkedin.com/in/imesha-dewmin-519285222/" target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className="mr-2" /> LinkedIn
          </Button>
        </div>
      </div>
      
      <div className='p-7 flex-1'>
        <img src="https://thesequence.co.uk/wp-content/uploads/2021/11/social-media-icons-logos-mobile-phone-screen-3d-scaled.jpg" alt="Social Media" />
      </div>
    </div>
  );
}
