
import { CancelDialog } from '@/component/CancelDialog';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { FiDelete } from 'react-icons/fi';

const MyBooking =async () => {
    
const session = await auth.api.getSession({
    headers: await headers()
})
const user = session.user;
// console.log(user); 

const res = await fetch(`http://localhost:5000/booking/${user?.id}`);
const bookings = await res.json();
console.log(bookings);
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-3xl font-extrabold'>My Bookings</h1>
            <div>
                {
                    bookings.map(booking => <div key={booking._id}
                    className='flex gap-5 border shadow rounded-2xl p-5 mb-5 min-h-3 hover:-translate-2 transition '>
                        <Image
                        src={booking.imageUrl}
                        width={200}
                        height={200}
                        alt={booking.destinationName}></Image>

                        <div className='space-y-5'>
                           <h1 className='text-3xl font-bold'>{booking.destinationName}</h1> 
                           <p className='text-muted'>DepartureDate : {new Date(booking.departureDate).toLocaleString()}</p>
                           <p className='text-muted'>Booking ID : {booking.userId}</p>
                           <p className='text-5xl font-extrabold text-cyan-800'>${booking.price}</p>
                          
                           
                           <CancelDialog bookingId = {booking._id}/>
                          
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyBooking;