import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLink } from '@fortawesome/free-solid-svg-icons'; // Importing the search and link icons
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
     <div className='footer bg-slate-100 '>
     <div className="search flex justify-between">
     <div className='bg-white rounded-lg px-4 py-2 '>
      <input type="text" placeholder="Type your message" />
      <FontAwesomeIcon icon={faLink} className="link-icon" />
       </div>
       <button className=' text-white py-2 px-8 bg-blue-700 rounded-lg'>
       <FontAwesomeIcon icon={faGreaterThan} className="icon" />
       </button>
    </div>
     <div className='trademark flex justify-center text-center pt-2'>
      <p className='text-slate-500'>Powered by <span><a className='text-grey font-bold'>Krunk.ai </a></span></p>
      <img src='logo.svg' />
    </div>
     </div>
   
  );
}

export default Footer;
