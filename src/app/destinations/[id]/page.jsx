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




         <Card className="border  ">
         <div className="text-center space-y-2">
            <Image src={imageUrl} alt={destinationName} height={400} width={400}  unoptimized className="mx-auto" ></Image>

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
           

           
            
           
        </div>
       </Card>


        </div>
    );
};

export default DesetinationsDetailPage;