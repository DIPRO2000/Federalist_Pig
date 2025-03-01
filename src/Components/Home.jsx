import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const images = [
  "https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/36463220826_FedPig_A6_FavFootball_0219.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5",
  "https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/67795IMG_2077_ramen_web.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5",
  "https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/3256IMG_2861.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5",
  "https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/2614820230629-229-Edit_1.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5",
  "https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/96342IMG_8146.JPG?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5"
];

const heading = [
  "FEDZONE PACKAGE",
  "CHEF'S SPECIAL",
  "MONTHLY BBQ BOX",
  "EVENT CATERING",
  "SUPPER CLUB"
];

const description = [
  "Bring BBQ home for the Big Game with our FedZone Package including Smoked Jumbo Wings, Big Cheese sliders, Jalapeño Sausage Bites, Chili Mac, and our Smoky Queso Dip with house made chips! Order by 2/6 for pickup or delivery on 2/8 - 2/9. Items will be packaged cold with easy reheating instructions. Make sure to input date as 2/8 or 2/9.",
  "Every month we feature a new fancy Fed Pig Chef Special. Don't miss January's Fed Pig Ramen with your choice of pork belly, pulled pork, or brisket burnt ends. Available MON - THURS.",
  "When you become a subscriber of our Monthly BBQ Box, you'll enjoy an exclusive tasting menu for two or four, featuring BBQ flavors from around the world. Click below for details on this month's menu.",
  "Got a celebration coming up and need a hand—or maybe just a whole platter of ribs? No matter the event type, size, or style, we got you! Enjoy our catering truck (or team) at your next event. Planning your big bash has never been this easy. Let’s make this one for the history books—just don’t blame us when people ask for seconds!",
  "A fancy 4-course Fed Pig dine-in experience that will leave you up in smoke. A smoky feast of the seven fishes in December, the French Fed Pig connection in January, and a romantic Italian American menu you won't soon forget in February."
];

const btn = [
  "ORDER NOW",
  "TRY NOW",
  "BECOME A MEMBER",
  "EXPLORE EVENT CATERING",
  "GET YOUR TICKETS"
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const headref = useRef(null);
  const pararef = useRef(null);
  const btnref = useRef(null);
  const imgref=useRef(null);
  const svgref1=useRef(null);
  const svgref2=useRef(null);

  const initial="M 30 80 Q 80 80 1300 80";
  let final="M 30 80 Q 80 80 1300 80";

  const mouseLocation=(e)=>{
      final=`M 30 80 Q ${e.nativeEvent.offsetX} ${e.nativeEvent.offsetY} 1300 80`
      gsap.to([svgref1.current,svgref2.current], {
            attr:{d:final},
            duration:0.2
        });
      };
  
  const mouseleave=()=>{
    gsap.to([svgref1.current,svgref2.current],{
        attr:{d:initial},
        duration:1,
        ease:"elastic.out(1.2,0.3)",
    })
  }

  useEffect(() => {

    gsap.set([svgref1.current,svgref2.current], { attr: { d: initial } });
  }, []);
  
  

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([headref.current, pararef.current, btnref.current], {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3
      });
    });

    return () => ctx.revert(); // Cleanup GSAP context on unmount
  }, [current]); 

  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrent((prev)=>(prev+1)%images.length)
    },10000);
    
    return()=>clearInterval(interval);
  },[current]);



  const prevSlide = () =>
  {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
    gsap.to(imgref.current,{
      duration:2
    })
  }
  const nextSlide = () =>
    setCurrent(current === images.length - 1 ? 0 : current + 1);




  return (
    <>
        
          {/* BANNER */}

          <div className="relative w-full mx-auto overflow-hidden">
            <div className="relative w-full h-[500px]">
            <img
              src={images[current]}
              alt={`Slide ${current}`}
              ref={imgref}
              className="w-full h-full object-cover"
            />
            {/* Text Overlay */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-40">
              <h1
                ref={headref}
                className="text-white text-7xl font-bold text-center px-4"
              >
                {heading[current]}
              </h1>
              <p
                ref={pararef}
                className="px-32 mt-7 text-xl text-center text-white"
              >
                {description[current]}
              </p>
              <button
                ref={btnref}
                className="p-2 px-5 mt-7 font-bold border-yellow-500 border-2 text-yellow-500 hover:text-black hover:bg-yellow-500 hover:rounded-md"
              >
                {btn[current]}
              </button>
            </div>
          </div>

          {/* Previous Button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-gray-800 bg-opacity-50 text-white rounded-full z-10 hover:font-bold hover:scale-125"
            onClick={prevSlide}
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-800 bg-opacity-50 text-white rounded-full z-10 hover:font-bold hover:scale-125"
            onClick={nextSlide}
          >
            ❯
          </button>
        </div>



        <div className="flex flex-row gap-32 p-20 bg-yellow-500">
          <div className="">
              <img src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/85291IMG_3966_web.jpg?w=1200&amp;fit=crop&amp;auto=compress,format&amp;cs=origin&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5" className="w-96 h-80 rounded-2xl mx-auto"/>
              <h1 className="text-5xl font-serif text-center m-4">SPECIALS</h1>
              <p className="text-xl font-bold text-center m-4">Pitmaster Rob is always up to something! Check out our rotating specialty sandwiches and limited drops, including a Limited Time Only Monthly Chef's Special that will leave you craving for more!</p>
              <div className="flex justify-center"><button className="text-black border-black font-bold border-2 p-2 px-4 hover:text-yellow-500 hover:bg-black">SEE THE SPECIALS</button></div>
              
          </div>
          <div className="">
              <img src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/98058IMG_1800.JPG?w=1200&amp;fit=crop&amp;auto=compress,format&amp;cs=origin&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5" className="w-96 h-80 rounded-2xl mx-auto"/>
              <h1 className="text-5xl font-serif text-center m-4">SUPPER CLUB</h1>
              <p className="text-xl font-bold text-center m-4">Once a month, Chef & Pitmaster Rob Sonderman presents a new 4-course dine-in experience that goes beyond our regular offerings and puts a smoky spin on gourmet cuisine.</p>
              <div className="flex justify-center"><button className="text-black border-black font-bold border-2 p-2 px-4 hover:text-yellow-500 hover:bg-black">GET YOUR TICKETS</button></div>
          </div>
        </div>


        <div className="grid grid-cols-3 gap-32 items-center bg-yellow-500">
          <div className="col-span-1 pl-10">
              <h1 className="text-5xl font-serif font-bold text-center">MENU</h1>
              <p className="p-5 text-center font-bold">We’re craft American BBQ made in-house (always). Get traditions and favorites from all over the world — all on one plate. Federalist Pig is a two-time Michelin Bib Gourmand winner serving up DC’s best blend of the classic BBQ traditions you’d find at the most elite cookout and the elevated flavors you’d find at a true fine dining spot.</p>
              <p className="p-3 text-center font-bold">Everything we serve is house-made and prepared by a staff that cares. You could spend a lifetime sampling every flavor combination at Federalist Pig, and we hope you do.</p>
              <div className="flex justify-center"><button className="p-2 px-4 mt-7 font-bold border-black border-2 text-black hover:text-yellow-500 hover:bg-black hover:rounded-md">PEEP THE MENU</button></div>
          </div>
          <div className="col-span-2">
              <img src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/58030220826_FedPig_A7_BCRcombo1_0264.jpg?w=1200&amp;fit=crop&amp;auto=compress,format&amp;cs=origin&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5" className="w-auto h-auto  rounded-2xl"/>
          </div>
        </div>

        
        <div className="w-full" onMouseMove={mouseLocation} onMouseLeave={mouseleave}>
          <svg className="bg-yellow-500" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
            <path ref={svgref1} d="M 30 80 Q 80 -1000 1300 80" stroke="black" fill="transparent" stroke-width="3"/>
          </svg>
        </div>


        <div className="grid grid-cols-3 gap-20 items-center bg-yellow-500">
          <div className="col-span-2">
              <img src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/58030220826_FedPig_A7_BCRcombo1_0264.jpg?w=1200&amp;fit=crop&amp;auto=compress,format&amp;cs=origin&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5" className="w-auto h-auto  rounded-2xl"/>
          </div>
          <div className="col-span-1 pr-10">
              <h1 className="text-5xl font-serif font-bold text-center">Catering</h1>
              <p className="p-5 text-center font-bold">We'll bring the 'que to you! From backyard BBQs, holiday celebrations or hundred-person events, our Barbecrew and catering truck can do it all. Serving thoughtfully crafted sides, vegan and vegetarian options, to the BBQ classics from all the regions of America, and all the corners of the globe — it’s all here.</p>
              <div className="flex justify-center"><button className="p-2 px-4 mt-7 font-bold border-black border-2 text-black hover:text-yellow-500 hover:bg-black hover:rounded-md">EXPLORE CATERING</button></div>
          </div>
        </div>

        <div className="w-full overflow-hidden" onMouseMove={mouseLocation} onMouseLeave={mouseleave}>
          <svg className="bg-yellow-500" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
            <path ref={svgref2} d="M 30 80 Q 80 -1000 1300 80" stroke="black" fill="transparent" stroke-width="3"/>
          </svg>
        </div>


  <div className="relative w-screen  flex items-center justify-center overflow-x-hidden">
  <div className="flex w-full  overflow-hidden">
    <div className="marquee flex ">
      {/* Duplicate images to ensure smooth scrolling */}
      <img src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/Catalogue_brand_family_banner-federalist-pig.png?w=1000&amp;fit=max&amp;auto=compress,format&amp;h=1000" alt="Brand" className="w-auto h-auto object-contain" />
      <img src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/Catalogue_brand_family_banner-federalist-pig.png?w=1000&amp;fit=max&amp;auto=compress,format&amp;h=1000" alt="Brand" className="w-auto h-auto object-contain" />
      <img src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/Catalogue_brand_family_banner-federalist-pig.png?w=1000&amp;fit=max&amp;auto=compress,format&amp;h=1000" alt="Brand" className="w-auto h-auto object-contain" />
      <img src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/Catalogue_brand_family_banner-federalist-pig.png?w=1000&amp;fit=max&amp;auto=compress,format&amp;h=1000" alt="Brand" className="w-auto h-auto object-contain" />
      <img src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/Catalogue_brand_family_banner-federalist-pig.png?w=1000&amp;fit=max&amp;auto=compress,format&amp;h=1000" alt="Brand" className="w-auto h-auto object-contain" />
      <img src="https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/Catalogue_brand_family_banner-federalist-pig.png?w=1000&amp;fit=max&amp;auto=compress,format&amp;h=1000" alt="Brand" className="w-auto h-auto object-contain" />
    </div>
  </div>

  {/* Tailwind Custom Styles */}
  <style jsx>{`
    .marquee {
      display: flex;
      width: 200%; /* Ensuring continuous flow */
      animation: marquee 20s linear infinite;
    }
    
    @keyframes marquee {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(-50%); /* Move only half to loop seamlessly */
      }
    }
  `}</style>
  </div>
  <div className="flex justify-center pt-3 pb-3 bg-yellow-500">
    <h4 className="text-black underline hover:text-gray-800"><a href="#">Manage Consent Preferences</a></h4>
  </div>
  </>
    
  );
}



