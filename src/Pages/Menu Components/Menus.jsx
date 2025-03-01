import React from "react";
import Menu from "./Menu";
import Specials from "./Specials";
import Lunch from "./Lunch";
import Catering from "./Catering";

const Menus=()=>{
    const btnName=["MENU","SPECIALS","LUNCH HAPPY HOUR","CATERING"];
    const btnComponents=[Menu,Specials,Lunch,Catering];

    return(
        <>
           <div className="bg-yellow-500">
                <div className="flex flex-col items-center">
                    <h1 className="py-10  text-center text-6xl font-bold">MENUS</h1>
                    <p className="pb-24 text-center font-bold lg:px-80">A culinary tour of BBQ traditions from around this great nation and this beautiful planet. 1.8 million years ago, humans first began cooking meat with fire. For some reason, this hasn’t led to world peace, but we’re pretty sure if we fire up enough BBQ, it will.</p>
                </div>
                <div>
                    <ul className="flex flex-row justify-center gap-10">
                        {btnName.map((items,index)=>(
                            <li 
                            className="px-2 py-2 border-black border-2 font-semibold cursor-pointer hover:bg-black hover:text-yellow-500"
                            >
                                {items}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    {btnComponents.map((items)=>(
                        <>
                            {items}
                        </>
                    ))}
                </div>
           </div>
        </>
    )
}

export default Menus