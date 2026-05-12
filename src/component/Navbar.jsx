import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
    return (
        <nav className='flex justify-between container mx-auto font-semibold text-gray-600 py-5'>
            <ul className='flex gap-5'>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/destinations"}>Destinations</Link></li>
                <li><Link href={"/my-bookings"}>My Bookings</Link></li>
                <li><Link href={"/admin"}>Admin</Link></li>
            </ul>
            <div>
                <Image src={"/assets/Wanderlast.png"} 
                width={150} 
                height={150} 
                alt='logo'></Image>
            </div>

             <ul className='flex gap-5'>
                <li><Link href={"/profile"}>Profile</Link></li>
                <li><Link href={"/login"}>Login</Link></li>
                <li><Link href={"/signup"}>Sign UP</Link></li>
                
            </ul>
        </nav>
    );
};

export default Navbar;