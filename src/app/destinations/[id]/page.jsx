import BokigCard from "@/component/BokigCard";
import { DeleteDialog } from "@/component/DeleteDialog";
import EditModal from "@/component/EditModal";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";


const DesetinationsDetailPage =async ({params}) => {
    const {id}=await params ;

    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destinations = await res.json();

    const {destinationName,country,category,price,duration,departureDate,imageUrl,description}=destinations;

    // console.log(destinations);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-gray-500 mb-5">Destination Details</h1>


           <div className="flex justify-end gap-5 my-5 ">
             <EditModal destinations={destinations} />
            <DeleteDialog destinations={destinations} />
           </div>

         <Card className="border my-5 ">
         <div className="space-y-2">

            <Image src={imageUrl} alt={destinationName} height={400} width={400}  unoptimized className="mx-auto" ></Image>
    
            <div className=" flex-row md:flex justify-between gap-5 ">
            <div>
                  <p className="flex items-center gap-3 text-muted"><FaLocationDot /> {country} </p>   
                   <h1 className="text-cyan-800">{destinationName} </h1>
                     <p className="text-muted">{duration} </p>
                <h1 className="font-extrabold">OVERVIEW</h1>
                <p className="text-muted">{description}</p>

            </div>
            <div>
                <BokigCard destinations={destinations} />
            </div>
           </div>
           

           
            
           
        </div>
       </Card>


        </div>
    );
};

export default DesetinationsDetailPage;