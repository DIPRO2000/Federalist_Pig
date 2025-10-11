import React from 'react';

const Catering = () => {
  // --- VARIABLES FOR SECTIONS ---

  // Background image for the top hero section
  const heroSectionStyle = {
    backgroundImage: `url('https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/85147220826_FedPig_A2_LTO-Sandwiches_0090.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5')`,
  };

  // Image URL for the second "Event Catering" section
  const eventImageUrl = "https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/5924920230629-112-Edit.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.5";

  return (
    <main>
      
      {/* ===== SECTION 1: HERO CATERING ===== */}
      <section
        style={heroSectionStyle}
        className="
          relative overflow-hidden bg-brand-yellow text-white text-center
          bg-no-repeat bg-bottom bg-[length:100%_auto]
          px-4 pt-12 pb-[45%] 
          sm:px-6 sm:pt-16
          md:pt-24 md:pb-[30%]
        "
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 
            className="
              font-display font-bold uppercase
              text-4xl tracking-widest mb-6
              sm:text-5xl sm:tracking-[0.1em]
              md:text-[5rem]
            "
          >
            Catering
          </h1>
          
          <div className="space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              The old-school BBQ you remember. The new-school flavors you won't forget. Let our team bring the Federalist Pig experience to your office, home, or special event. From office lunches or workplace gatherings, and birthday parties to weddings and galas, we cater events of every size and style. Get ready to share our BBQ with your loved ones.
            </p>
            <p>
              Our meats are smoked for 12-24 hours, so for any special requests or off-site celebrations (such as weddings or large parties), we'd prefer at least 48 hours' notice, but can usually accommodate parties of 75 or less with 24 hours' notice. All Event Catering is available for Takeout & Delivery.
            </p>
          </div>

          <a 
            href="#order" 
            className="
              inline-block bg-transparent text-white font-bold uppercase
              border-2 border-white rounded mt-10 py-3 px-7 
              text-sm tracking-wider
              transition-colors duration-300 ease-in-out
              hover:bg-white hover:text-gray-800
            "
          >
            Order Catering Now
          </a>
        </div>
      </section>

      {/* ===== SECTION 2: EVENT CATERING ===== */}
      {/* The flex-col class makes it stack on mobile, and md:flex-row makes it side-by-side on larger screens */}
      <section className="flex flex-col md:flex-row bg-yellow-400 py-10 font-sans">
        {/* Left Column: Image */}
        <div className="md:w-3/5">
          <img 
            src={eventImageUrl} 
            alt="A platter of Federalist Pig BBQ including a pulled pork sandwich and ribs" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Right Column: Content */}
        <div className="md:w-2/5 bg-brand-yellow text-black p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="font-display font-bold uppercase text-3xl lg:text-4xl tracking-widest mb-8">
            Event Catering
          </h2>

          <div className="space-y-6 leading-relaxed mb-10">
            <p>
              Got a celebration coming up and need a hand—or maybe just a whole platter of ribs? No matter the size or style, we got you! Planning your big bash has never been this easy (or mouth-watering). Our catering crew isn’t just singin’ BBQ; we’re out here crafting legendary moments. From our slow-smoked, scratch-made eats to handpicked ingredients, we’ll build a feast as bold as your guest list and as flexible as your budget. Have our team (or our catering truck!) at your next event!
            </p>
            <p>
              For groups smaller than 40-50 people it's typically easier to place the order yourself through our catering online ordering page. That way you can add or subtract from your cart based on your desired budget and menu requirements and easily set up your delivery or pick up order. We are always here for you if you have any questions!
            </p>
          </div>
          
          <div className="space-y-4">
            <a
              href="#start-order"
              className="block w-full text-center bg-transparent text-black font-bold uppercase border-2 border-black rounded py-3 px-5 text-sm tracking-wider transition-colors duration-300 ease-in-out hover:bg-black hover:text-yellow-500"
            >
              Start Your Order
            </a>
            <a
              href="#delivery-inquiry"
              className="block w-full text-center bg-transparent text-black font-bold uppercase border-2 border-black rounded py-3 px-5 text-sm tracking-wider transition-colors duration-300 ease-in-out hover:bg-black hover:text-yellow-500"
            >
              Catering Delivery Inquiry
            </a>
            <a
              href="#takeout-inquiry"
              className="block w-full text-center bg-transparent text-black font-bold uppercase border-2 border-black rounded py-3 px-5 text-sm tracking-wider transition-colors duration-300 ease-in-out hover:bg-black hover:text-yellow-500"
            >
              Catering Takeout Inquiry
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catering;

