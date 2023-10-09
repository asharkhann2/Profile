import Link from "next/link";
import Contact from "./contact/page";


export default function Home() {
  return (
    <>  
      <section className="text-white body-font">
      <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Ashar Khan
            <br className="hidden lg:inline-block" />
          <span>  a Developer. </span>
            
          </h1>
          <p className="mb-8 leading-relaxed">
            Hi, i'm Muhammad Ashar Khan, a developer on a mission to turn ideas into digital magic. With a passion for elegant solutions, i craft code that transforms concept into real-world impact. Let's collaborate and create the next big thing together!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
             <Link href="/resume">
               Resume
               </Link>
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              <Link href="/contact">
              Contact Us
              </Link>
            </button>
          </div>
        </div>
        <div className=" flex lg:justify-end justify-center lg:max-w-lg w-full ">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/mainpicture2.png"
          />
        </div>
      </div>
    </section>
    <section className="text-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-500">My Awesome Services</h1>
  <p className="lg:w-1/2 w-full leading-relaxed text-cyan-100">these are 3 of my main services i offer, with years of experience on each of them.</p>
</div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          
          
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">Development</h1>
            <p className="leading-relaxed mb-3">Transforming concepts into fully functional, responsive websites.</p>
            <div className="flex items-center flex-wrap ">
            
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">Design</h1>
            <p className="leading-relaxed mb-3">Crafting visually captivating and user-centric UI & UX designs that breathe life into digital spaces.</p>
            <div className="flex items-center flex-wrap">
            
           
           
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">SEO</h1>
            <p className="leading-relaxed mb-3">Elevating online visibility through strategic SEO techniques.</p>
            <div className="flex items-center flex-wrap ">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    

<section className="text-gray-600 body-font">
  <div className="container px-5 py-20 mx-auto flex flex-wrap">
 <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-500">Why Hire Me</h1>
  <p className="lg:w-1/2 w-full leading-relaxed text-cyan-100">In this section I will provide you with some reasons to hire me to get you to high levels of success with my services.</p>
</div>

    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">Proven Success</h2>
            <p className="text-cyan-100 leading-relaxed text-base">My portfolio isn't just a collection of projects, it's a narrative of success stories. From businesses that have expanded their client base to brands that have conquered the digital realm, my track record speaks for itself.</p>
           
              
                <path d="M5 12h14M12 5l7 7-7 7" />
              
                    </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
        <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">Partnership for Growth</h2>
            <p className="text-cyan-100 leading-relaxed text-base">Hiring me isn't just a transaction, it's a partnership. i'm committed to walking alongside you on your digital journey, offering guidance, insight and expertise that contribute to your long-term success.
            
             </p>
            
             
                <path d="M5 12h14M12 5l7 7-7 7" />
              
           </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container px-5 py-1 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">Fusion of Creativity and Strategy</h2>
            <p className="text-cyan-100 leading-relaxed text-base">I don't just craft beautiful websites, I construct experiences that resonate. My designs are a blend of creative artistry and ensuring a captivating online presence that captivates your audience.</p>
           
              
                <path d="M5 12h14M12 5l7 7-7 7" />
              
                    </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
        <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">Seamless Scaling</h2>
            <p className="text-cyan-100 leading-relaxed text-base">My holistic approach goes beyond creating websites, I engineer growth. Through strategic design, responsive development, and targeted digital strategies, I empower businesses to scale effectively and seize opportunities. </p>
            
             
                <path d="M5 12h14M12 5l7 7-7 7" />
              
           </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="text-white body-font relative">
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white ">Contact Us</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded text-center mx-auto mb-3" />
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We would love to hear from you!</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-white">Name</label>
            <input type="text" id="name" name="name" className="w-full dark:placeholder:bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
            <input type="email" id="email" name="email" className="w-full  dark:placeholder:bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
            <textarea id="message" name="message" className="w-full dark:placeholder:bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SEND MESSAGE</button>
        </div>
       
      </div>
    </div>
  </div>
</section>
    </>

  );
}
