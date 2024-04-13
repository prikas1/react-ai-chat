
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
     <div className='header '>
      <div className='d-flex'>
        <div className='relative'>
          <img className='robo-img h-12 w-12 rounded-full' src='/react-ai-chat/robo.png' alt='Robot' />
          <div className='online-dot'></div>
        </div>
        <div className='ml-4'>
          <h5 className='text-blue-500 font-bold'>Timpu  <FontAwesomeIcon icon={faBolt} className="text-yellow-500" /></h5>
          <p className='text-blue-500 font-medium'>Chat assistant</p>
        </div>
      </div>
      <div className='relative'>
          <div className='online-dot'></div>
          <p className='online px-2 text-blue-500 font-medium'>online</p>
        </div>
     
    </div>
   
  );
}

export default Header;

