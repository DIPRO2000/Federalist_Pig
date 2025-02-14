import React from "react";

const Navbar=()=>{

    return(
        <>
            <div className="h-[25vh] bg-yellow-400 pt-2">
                <img className="h-20 w-53 mx-auto invert hue-rotate-180 brightness-200" src='https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/75474fed-pig-yellow.png'/>
                <div className="flex justify-center mt-4">
                    <ul className="flex flex-row gap-5 mx-auto">
                        <li>MENUS</li>
                        <li>CATERING</li>
                        <li>BBQ BOX</li>
                        <li>SUPPER CLUB</li>
                        <li>GIFT CARDS</li>
                        <li>ORDER ONLINE</li>
                    </ul>
                </div>
            </div>
            

        </>
    )
}

export default Navbar;