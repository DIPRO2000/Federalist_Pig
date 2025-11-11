import React from "react";

const Caterings=()=>{
    return(
        <>
            <div className="bg-[#ffd601]">
                <div className="relative flex flex-col justify-center items-center bg-[url('https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/85147220826_FedPig_A2_LTO-Sandwiches_0090.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5')] bg-cover bg-center bg-fixed bg-no-repeat h-screen">
                    <div className="absolute inset-0 opacity-50 bg-black"></div>
                    <h1 className="text-center text-white text-7xl font-bold z-10">CATERING</h1>
                    <p className="text-center text-white text-lg py-10 px-36 z-10">The old-school BBQ you remember. The new-school flavors you won’t forget. Let our team bring the Federalist Pig experience to your office, home, or special event. From office lunches or workplace gatherings, and birthday parties to weddings and galas, we cater events of every size and style. Get ready to share our BBQ with your loved ones.</p>
                    <p className="text-center text-white text-lg px-36 z-10">Our meats are smoked for 48 hours, so for any special requests or off-site celebrations (such as weddings or large parties), we'd prefer at least 48 hours' notice, but are usually able to accommodate. All Event Catering is available for Takeout & Delivery.</p>
                    <div className="border-2 w-52 my-10 py-2 z-10 font-bold text-center cursor-pointer border-[#ffd601] text-[#ffd601] hover:bg-[#ffd601] hover:text-black hover:rounded">ORDER CATERING NOW</div>
                </div>

                <div className="grid grid-cols-5">
                    <div className="col-span-3 bg-[url('https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/5924920230629-112-Edit.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5')] bg-cover bg-center bg-no-repeat h-screen" ></div>

                    <div className="col-span-2 flex flex-col items-center px-5">
                        <h2 className="text-3xl font-bold py-10">Inquire about Event Catering</h2>
                        <p className="text-lg py-5">Got a celebration coming up and need a hand—or maybe just a whole platter of ribs? No matter the size or style, we got you! Planning your big bash has never been this easy (or mouth-watering). Our catering crew isn’t just slingin' BBQ; we’re out here crafting legendary moments. From our slow-smoked, scratch-made eats to handpicked ingredients, we’ll build a feast as bold as your guest list and as flexible as your budget. Have our team (or our catering truck) at your next event! </p>
                        <p className="text-lg">Let’s make this one for the history books—just don’t blame us when people ask for seconds!</p>
                        <div className="border-2 w-64 my-3 py-2 font-bold text-center cursor-pointer border-black text-black hover:bg-black hover:text-[#ffd601] hover:rounded">CATERING DELIVERY INQUIRY</div>
                        <div className="border-2 w-64 my-3 py-2 font-bold text-center cursor-pointer border-black text-black hover:bg-black hover:text-[#ffd601] hover:rounded">CATERING TAKEOUT INQUIRY</div>
                    </div>
                </div>

                <div className="flex justify-center pt-3 pb-3 bg-[#ffd601]">
                    <h4 className="text-black underline hover:text-gray-800"><a href="#">Manage Consent Preferences</a></h4>
                </div>

            </div>
        </>
    )

}

export default Caterings;