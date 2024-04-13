import React from 'react';
import "./Middle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faTimes, faBolt } from '@fortawesome/free-solid-svg-icons';



function Middle() {

  const scrollLeft = () => {
    const container = document.querySelector('.button-container');
    container.scrollLeft -= 100;
  };

  const scrollRight = () => {
    const container = document.querySelector('.button-container');
    container.scrollLeft += 100; 
  };

  return (
    <div className='middle py-8 px-2'>
     <div className='msg-div  py-2'>
            <p className='msg-get bg-slate-200'>Hi Sam! I am your personal shopping assistant, how can I help you today?</p>
            <p className='py-1 px-2 text-black text-sm '>4:45 PM</p>
          
        </div>
          <div className='msg-div py-2 '>
         <div className='d-flex justify-content-end align-items-center'>
            <p className='msg-get send'>I am looking for a hand bag, with long strap .</p>
            </div>
             <div className='d-flex justify-content-end align-items-center'>
             <p className='py-1 px-2 text-black text-sm '>4:46 PM</p>
           </div>
        </div>
     <div className='tags my-2'>
        <p>Popular tags for handbag</p>
       
       <div className='button-container'>
      <div className='tags-buttons mt-2'>
        <button>Clutch</button>
        <button>Fabric lining</button>
        <button>Baggit</button>
        <button>Clutch</button>
        <button>Baggit</button>
        <button>Clutch</button>
        
      </div>
    </div>
        </div>
        <div className='product-section my-2'>
      <div className='products p-2 w-64 bg-slate-200  rounded-2xl'>
    
    <div className='items d-flex align-items-center'>
   
    <img src='/react-ai-chat/bag.png' />
    
    <div className='pl-4'>
    <p className='font-bold py-2'>Bags on Timpu <FontAwesomeIcon icon={faBolt} className="text-yellow-500" /></p>
    <p className='text-grey font-sm text-slate-500 '>1123 products <FontAwesomeIcon className="pl-3 icon " icon={faGreaterThan} /></p>
    </div>
    </div>
    <p className='font-sm my-2'>Or set filter and help us choose the best bag for you.</p>
    </div>
    <p className='py-1 px-2 text-black text-sm '>4:43 PM</p>
    </div>
    <div className='filter-section'>
    <div className='flex  justify-between text-slate-500'>
    <p className=''>Select filters</p>
    <p>Filter</p>
   </div>
   <div className='filter-btn flex flex-wrap text-slate-500'>
   <button>Strap - Long  <FontAwesomeIcon  icon={faTimes} /></button>
    <button>Color <FontAwesomeIcon  icon={faTimes} /></button>
      <button>Size <FontAwesomeIcon  icon={faTimes} /></button>
       <button>Color <FontAwesomeIcon  icon={faTimes} /></button>
        <button>Color <FontAwesomeIcon  icon={faTimes} /></button>
   </div>
    </div>
   
    </div>
   
  );
}

export default Middle;
