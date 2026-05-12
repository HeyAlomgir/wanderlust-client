import DestinationCard from "@/component/DestinationCard";


const Destination = async() => {
    const res = await fetch("http://localhost:5000/destination");
    const destinations = await res.json();
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-gray-700">All Desetinations</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                {destinations.map(destination => <DestinationCard key={destination._id} destination={destination} /> )}
            </div>
            
        </div>
    );
};

export default Destination;