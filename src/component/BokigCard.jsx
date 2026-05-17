"use client"
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa6";

const BokigCard = ({ destinations }) => {
    const {
        data: session,
    } = authClient.useSession()
      const user = session?.user;
    //   console.log(user);
    const [departureDate, setDepartureDate] = useState(null);
    // console.log(new Date(departureDate));

     const {destinationName,country,price,imageUrl,_id}=destinations;

    const handleBoking = async()=>{
        const bokingData ={
            userName:user?.name,
            userId:user?.id,
            userImg:user?.image,
            userEmail:user?.email,
            destinationId:_id,
            destinationName,
            country,
            price,
            imageUrl,
            departureDate: new Date(departureDate),

        }
        const res = await fetch("http://localhost:5000/booking",{
            method:"POST",
            headers:{

                'content-type' :'application/json'
            },
            body:JSON.stringify(bokingData)
        });
        const data = await res.json()
        // console.log(data);
        toast.success("Booking Succesfull!")
    }

    return (
        <Card>
            <div>
                <p className="text-muted">Starting from</p>
                <h2 className="font-bold text-cyan-800">${price}</h2>
                <p className="text-muted">per person</p>
            </div>

            <div>

                <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
                    <Label>Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>
            </div>

            <Button
            onClick={handleBoking} 
            className={"bg-cyan-800 rounded-none w-full"}>Book Now <FaArrowRight /> </Button>

        </Card>
    );
};

export default BokigCard;