"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
    const {
        data: session,
    } = authClient.useSession()
    const user = session?.user;
    // console.log(user);

    const handleSignOut = async()=>{
        await authClient.signOut({

        })
    }

    return (
        <nav className='flex justify-between container mx-auto font-semibold text-gray-600 py-5'>
            <ul className='flex gap-5'>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/destinations"}>Destinations</Link></li>
                <li><Link href={"/my-bookings"}>My Bookings</Link></li>
                <li><Link href={"/add-destination"}>Add Destinations</Link></li>
            </ul>
            <div>
                <Image src={"/assets/Wanderlast.png"}
                    width={150}
                    height={150}
                    alt='logo'></Image>
            </div>

            <ul className='flex gap-5 items-center'>
                <li><Link href={"/profile"}>Profile</Link></li>

                <div>
                    {
                        user ? <>
                            <div className='flex items-center gap-3'>
                                <li>
                                <Avatar>
                                    <Avatar.Image alt={user?.name} src={user?.image} />
                                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>
                            </li>
                            <li>
                                <Button onClick={handleSignOut} className={"rounded-none"} variant='danger'>
                                    Logout
                                </Button>
                            </li>
                            </div>
                        </>
                            : <div className='flex items-center gap-3'>
                                <li><Link href={"/login"}>Login</Link></li>
                                <li><Link href={"/signup"}>Sign UP</Link></li>
                            </div>
                    }
                </div>

            </ul>
        </nav>
    );
};

export default Navbar;