import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowRoundForward } from "react-icons/io";

const DestinationCard = ({destination}) => {
    const {_id,destinationName,country,category,price,duration,departureDate,imageUrl,description}=destination;
    return (
       <Card className="border  ">
         <div className="text-center space-y-2 ">
            <Image src={imageUrl} alt={destinationName} height={400} width={400}  unoptimized ></Image>

            <p className="flex items-center gap-3 text-gray-600"><FaLocationDot /> {country} </p>

            <div className="flex items-center justify-between text-gray-600">
                <h1>{destinationName} </h1>
                <h1>${price} </h1>
            </div>

            <div className="flex items-center justify-between text-gray-600">
                <p>{duration} </p>
                <p>${departureDate} </p>
            </div>
            <p className="text-gray-600">{description}</p>
            <Link href={`/destinations/${_id}`}>

            <Button className={"flex gap-3 w-full"}> BOOK NOW  <span><IoMdArrowRoundForward/></span> </Button>
            
            </Link>
        </div>
       </Card>
    );
};

export default DestinationCard;