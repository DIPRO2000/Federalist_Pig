import React from "react";
import ReactPlayer from "react-player";

const Bbq_box=()=>{
    return(
        <>
         <div className="bg-[#ffd601]">
            <div className="relative flex flex-col justify-center items-center bg-[url('https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/69785federalist-pig-table22-offerings.jpg?w=1200&fit=max&auto=compress,format&cs=origin')] bg-cover  bg-no-repeat h-screen">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="text-center text-white text-7xl font-bold z-10">Fed Pig Monthly BBQ Box</h1>
            <p className="text-center text-white text-lg py-10 px-44 z-10">Chef Rob Sonderman's Monthly BBQ Box will bring you a brand new Federalist Pig experience, each and every month. With novel proteins not found on our menu, freshly cooked with new preparation methods, be the first to expand your knowledge of why barbeque is so revered around the world.</p>
            <div className="border-2 w-52 my-10 py-2 z-10 font-bold text-center cursor-pointer border-[#ffd601] text-[#ffd601] hover:bg-[#ffd601] hover:text-black hover:rounded">EXPLORE MEMBERSHIP</div>
            </div>

            <div className="grid grid-cols-5">    
                    <div className="col-span-2 flex flex-col items-center px-10">
                        <h1 className="text-4xl font-bold py-7">April BBQ Box</h1>
                        <h3 className="py-3  text-2xl font-bold text-center">April Persian Japanese Inspired BBQ Box Menu:</h3>
                        <h4 className="pt-4 text-xl font-bold text-center">Melon & Mint Salad w/ sumac dressing</h4>
                        <p className="text-lg text-center px-5">Succulent melon pieces meet the crispness of fresh mint, complemented by a zesty sumac dressing that adds a citrusy and tangy twist. This palate-pleasing salad sets the stage for what's ahead.</p>
                        <h4 className="pt-4 text-xl font-bold text-center">Roasted Cauliflower w/ dates, pistachios, herb lemon vinaigrette</h4>
                        <p className="text-lg text-center px-5">Roasted to golden perfection, enhanced by the sweetness of dates, the crunch of pistachios, and a herb-infused lemon vinaigrette that brings brightness and depth to each bite.</p>
                        <h4 className="pt-4 text-xl font-bold text-center">Za'atar Rubbed Lamb Flatbread w/ Muhammara Dip</h4>
                        <p className="text-lg text-center px-5">You know we love bread and we love meat at Fed Pig so this was the perfect dish. Succulent lamb, seasoned with traditional Za'atar spice, served atop a perfectly baked flatbread. Accompanied by a rich Muhammara dip, a true celebration of Middle Eastern flavors.</p>
                        <h4 className="pt-4 text-xl font-bold text-center">Smoked Tomato Braised Green Beans</h4>
                        <p className="text-lg text-center px-5">Infused with smoky richness, creating a savory and satisfying side dish that perfectly complements the main course.</p>
                        <h4 className="pt-4 text-xl font-bold text-center">Persian Spiced Smoke Roasted Half Chicken w/ Sumac, Onions & Zhoug</h4>
                        <p className="text-lg text-center px-5">The centerpiece of your Persian-inspired feast, this chicken is masterfully seasoned with Persian spices accompanied by sumac-infused onions and zhoug, a vibrant green chili sauce.</p>
                        <h4 className="pt-4 text-xl font-bold text-center">Persian Love Cake</h4>
                        <p className="text-lg text-center px-5">This decadent dessert combines the warmth of aromatic spices with the sweetness of rosewater and cardamom, creating a dessert that captures the heart of Persian culinary traditions.</p>
                        <span className="font-bold text-xl py-6" style={{fontStyle:"italic"}}>Order by March 31 for delivery or pickup.</span>
                        <div className="border-2 w-64 my-3 py-2 font-bold text-center cursor-pointer border-black text-black hover:bg-black hover:text-[#ffd601] hover:rounded">BECOME A MEMBER</div>
                    </div>

                    
                    <div className="col-span-3 bg-[url('https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/52490Table_22_May_Web_Yellow.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5')] bg-cover bg-center bg-no-repeat h-screen" >
                    </div>
                    
                    

            </div>

            <div className="grid grid-cols-5">    
                    <div className="col-span-3 bg-[url('https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/federalist-pig-bbq-club-delivery-area.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5')] bg-cover bg-center bg-no-repeat h-screen" ></div>

                    <div className="col-span-2 flex flex-col justify-center items-center px-10">
                        <div>
                        <h1 className="text-4xl font-bold text-center py-7">Delivery Available!</h1>
                        <p className="text-lg text-center px-5">We now offer delivery within the 495 Beltway to bring the BBQ to you!</p>
                        <div className="mx-auto  border-2 w-64 my-5 py-2 font-bold text-center cursor-pointer border-black text-black hover:bg-black hover:text-[#ffd601] hover:rounded">BECOME A MEMBER</div>
                        </div>
                        
                    </div>
            </div>

            <div className="flex justify-center items-center py-5">
                <ReactPlayer url='https://youtu.be/5PK5nESGYnA?si=9h_qhtUpgOzOTPR-'/>
            </div>

            <div className="flex justify-center pt-3 pb-3 bg-[#ffd601]">
                <h4 className="text-black underline hover:text-gray-800"><a href="#">Manage Consent Preferences</a></h4>
            </div>
         </div>
        </>
    )
}

export default Bbq_box;