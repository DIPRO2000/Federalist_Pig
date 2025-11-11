import React from "react";

const Supper=()=>{
    return(
        <>
            <div className="bg-[#ffd601]">
                <div className="relative flex flex-col justify-center items-center bg-[url('https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/27941IMG_1803.JPG?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5')] bg-cover bg-center bg-no-repeat h-screen">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <h1 className="text-center text-white text-7xl font-bold z-10">Supper Club</h1>
                    <p className="text-center text-white text-lg py-10 px-36 z-10">At Fed Pig Supper Club, Chef & Pitmaster Rob Sonderman showcases his culinary expertise and offers up a fancy version of Federalist Pig. Once a month, he will present a new meticulously crafted menu that goes beyond our regular menu offerings and put a smokey spin on gourmet cuisine from all over the world.</p>
                    <div className="border-2 w-52 my-8 py-2 z-10 font-bold text-center cursor-pointer border-[#ffd601] text-[#ffd601] hover:bg-[#ffd601] hover:text-black hover:rounded">SEE UPCOMING DATES</div>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-center text-white text-4xl font-bold z-10">About the Club</h1>
                    <ul className="">
                        <li>This is a full-service dine-in experience, in our newly renovated dining room.</li>
                        <li>One ticket covers one guest.</li>
                        <li>One beer or non-alcoholic beverage will be included with every ticket.</li>
                        <li>Some guests will be seated at a communal table. Everyone who comes to Fed Pig is cool, so no big whoop- BBQ is supposed to be shared together!</li>
                        <li>There is no cross-over with our Monthly BBQ Box in terms of recipes and menus. Supper Club is a different program and experience… but definitely check out the Monthly BBQ Box, too!</li>
                    </ul>
                </div>

                <div className="grid grid-cols-5">
                    <div className="col-span-3 bg-[url('https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/79216IMG_8245.JPG?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.47&fp-y=0.69')] bg-cover bg-center bg-no-repeat h-screen"></div>

                    <div className="col-span-2 flex flex-col items-center px-3">
                        <h1 className="text-4xl text-center font-bold py-7">February: Italian American inspired</h1>
                        <span className="py-3  text-2xl font-bold text-center">Thursday, February 13th, 6:00 PM</span>
                        <p className="text-md text-center px-5">Embrace the warmth and romance of Italian American flavors this February and join us for a heartfelt menu that brings a modern twist to beloved Italian American dishes, perfect for sharing with someone special.</p>
                        <h6 className="pt-4 font-bold text-center">Strawberry Arugula Salad</h6>
                        <p className="text-md text-center px-5">Start the celebration with a fresh and vibrant salad, combining peppery arugula, juicy strawberries, tomatoes, and creamy feta, finished with a tangy balsamic vinaigrette.</p>
                        <h6 className="pt-4 font-bold text-center">Roasted Acorn Squash with Crispy Duck Confit, Goat Cheese, and Red Wine Cherries</h6>
                        <p className="text-md text-center px-5">Delight in the flavors of winter with tender roasted acorn squash, topped with crispy duck confit, creamy goat cheese, and sweet red wine cherries for an enchanting entrée.</p>
                        <h6 className="pt-4 font-bold text-center">Spiced Pork Ragu</h6>
                        <p className="text-md text-center px-5">A rich and hearty Spiced Pork Ragu, served over fresh tagliatelle and topped with whipped goat cheese and Parmesan.</p>
                        <h6 className="pt-4  font-bold text-center">Dark Chocolate Cake with Coconut Glaze</h6>
                        <p className="text-md text-center px-5">Conclude your Italian American feast with a decadent dark chocolate cake, drizzled with a luscious coconut glaze, offering a sweet and indulgent end to a heartfelt meal.</p>
                        <div className="border-2 w-64 my-3 py-2 font-bold text-center cursor-pointer border-black text-black hover:bg-black hover:text-[#ffd601] hover:rounded">SOLD OUT</div>
                    </div>
                </div>

                <div className="grid grid-cols-5">
                    
                    <div className="col-span-2 flex flex-col items-center px-3">
                        <h1 className="text-4xl text-center font-bold py-7">March: St. Patrick's Day Inspired</h1>
                        <h3 className="py-3  text-2xl font-bold text-center">Thursday, March 6th 6:00 PM</h3>
                        <span className="text-center font-semibold">Raise a glass and celebrate the luck of the Irish with a special Supper Club inspired by the flavors of a traditional Irish feast that will transport you straight to a cozy pub in Dublin.</span>
                        {/* <p className="text-md text-center px-5">Embrace the warmth and romance of Italian American flavors this February and join us for a heartfelt menu that brings a modern twist to beloved Italian American dishes, perfect for sharing with someone special.</p> */}
                        <h6 className="pt-4 font-bold text-center">Bangers & Mash Hand Pies</h6>
                        <p className="text-md text-center px-5">Golden, flaky hand pies stuffed with smoky beer brats, creamy smashed potatoes, and sharp Irish cheddar, served with a rich Guinness mustard dipping sauce.</p>
                        <h6 className="pt-4 font-bold text-center">Irish Pub Salad</h6>
                        <p className="text-md text-center px-5">A fresh and crunchy tribute to the classic pub salad, featuring pickled green beans, crisp cucumbers, celery, cabbage, iceberg lettuce, hard-boiled eggs, cheddar cheese, and smoky tomatoes, all tied together with a tangy tarragon dressing.</p>
                        <h6 className="pt-4 font-bold text-center">Smoked Corned Beef Cabbage Roll</h6>
                        <p className="text-md text-center px-5">A Fed Pig twist on a St. Patrick’s Day staple—smoky braised corned beef wrapped in tender cabbage leaves, stuffed with caramelized onions and fresh herbs, and smothered in a rich, smoky tomato sauce.</p>
                        <h6 className="pt-4  font-bold text-center">Guinness Brownie Sundae w/ Jamo Caramel</h6>
                        <p className="text-md text-center px-5">A decadent Guinness-infused brownie, topped with a scoop of ice cream and drizzled with a luscious Jameson caramel sauce—an Irish-inspired dessert worth celebrating.</p>
                        <div className="border-2 w-64 my-3 py-2 font-bold text-center cursor-pointer border-black text-black hover:bg-black hover:text-[#ffd601] hover:rounded">GET YOUR TICKETS</div>
                    </div>

                    <div className="col-span-3 bg-[url('https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/50493March_2025_Irish.JPG?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5')] bg-cover bg-center bg-no-repeat h-screen"></div>
                </div>

                <div className="grid grid-cols-5">
                    <div className="col-span-3 bg-[url('https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/34087IMG_4821.JPG?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5')] bg-cover bg-center bg-no-repeat h-screen"></div>

                    <div className="col-span-2 flex flex-col items-center px-3">
                        <h1 className="text-4xl text-center font-bold py-7">April: Brazilian Inspired</h1>
                        <h3 className="py-3  text-2xl font-bold text-center">Thursday, April 10th 6:00 PM</h3>
                        <span className="text-center font-semibold">Vibe on the vibrant spirit of Brazil in March with an electrifying Supper Club odyssey. </span>
                        
                        <h6 className="pt-4 font-bold text-center">Smoked Chicken Coxhina</h6>
                        <p className="text-md text-center px-5">Start your Brazilian culinary journey with the delightful Coxhina – a smoked chicken croquette with a crispy exterior and a flavorful, savory filling.</p>
                        <h6 className="pt-4 font-bold text-center">Smoked Shrimp and Coconut Stew</h6>
                        <p className="text-md text-center px-5">Delve into a rich and aromatic stew featuring smoky shrimp immersed in a coconut-infused broth, creating a tantalizing blend of smokiness and tropical sweetness.</p>
                        <h6 className="pt-4 font-bold text-center">Grilled Picanha with Chimichurri and Garlic Bread</h6>
                        <p className="text-md text-center px-5">Experience the robust flavors of Brazil with Grilled Picanha, perfectly seasoned and accompanied by the vibrant freshness of chimichurri. Garlic bread adds a delightful crunch to this carnivore delight.</p>
                        <h6 className="pt-4  font-bold text-center">Brazilian Coconut Cake</h6>
                        <p className="text-md text-center px-5">Wrap up your Brazilian feast with the sweet indulgence of Brazilian Coconut Cake – a moist and coconut-infused dessert that captures the essence of Brazil's tropical sweetness.</p>
                        <div className="border-2 w-64 my-6 py-2 font-bold text-center cursor-pointer border-black text-black hover:bg-black hover:text-[#ffd601] hover:rounded">GET YOUR TICKETS</div>
                    </div>
                </div>

                <div className="grid grid-cols-5">
                    <div className="col-span-2 flex flex-col items-center px-3">
                        <h1 className="text-4xl text-center font-bold py-7">May: Mexican Inspired</h1>
                        <span className="py-3  text-2xl font-bold text-center">Thursday, May 8th 6:00 PM</span>
                        <p className="text-md text-center px-5">Immerse yourself in the vibrant flavors of Mexico with our delectable menu.</p>
                        <h6 className="pt-4 font-bold text-center">Mexican Style Snapper Ceviche</h6>
                        <p className="text-md text-center px-5">A harmonious blend of fresh snapper, zesty citrus, and fragrant herbs, creating a refreshing and tangy delight.</p>
                        <h6 className="pt-4 font-bold text-center">Corn & Tomato Chopped Salad</h6>
                        <p className="text-md text-center px-5">Experience the vibrant colors and textures of summer with this delightful salad bursting with sweet corn and ripe tomatoes.</p>
                        <h6 className="pt-4 font-bold text-center">Smoke Roasted Duck Tacos</h6>
                        <p className="text-md text-center px-5">Savor the succulent smokiness of tender duck, complemented by creamy guacamole, tangy pickled onions, and zesty salsa.</p>
                        <h6 className="pt-4  font-bold text-center">Ancho Cherry Chocolate Brownies</h6>
                        <p className="text-md text-center px-5">Indulge in a decadent finale with our rich, fudgy brownies infused with the delightful combination of ancho chili and sweet cherries.</p>
                        <div className="border-2 w-64 my-3 py-2 font-bold text-center cursor-pointer border-black text-black hover:bg-black hover:text-[#ffd601] hover:rounded">GET YOUR TICKETS</div>
                    </div>

                    <div className="col-span-3 bg-[url('https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/60840May_2025_duck.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5')] bg-cover bg-center bg-no-repeat h-screen"></div>
                </div>

                <div className="flex justify-center pt-3 pb-3 bg-[#ffd601]">
                    <h4 className="text-black underline hover:text-gray-800"><a href="#">Manage Consent Preferences</a></h4>
                </div>
            </div>
        </>
    )
}

export default Supper;