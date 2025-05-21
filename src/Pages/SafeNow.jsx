import React from 'react';
import StopChildMarriage from '../Components/SafeNow/StopChildMarraige';
import Navbar from '../SharedFile/Navbar';
import EmergencyContacts from '../Components/SafeNow/EmergencyContacts';


const SafeNow = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="py-12 bg-gradient-to-br from-[#fbeeee] to-white">
            <div className='max-w-7xl mx-auto py-12'>
                <h1 className='font-bold text-5xl text-bg_primary'>Save The Children</h1>
            </div>
            <StopChildMarriage></StopChildMarriage>
            <EmergencyContacts></EmergencyContacts>
            
        </div>
        </div>
    );
};

export default SafeNow;