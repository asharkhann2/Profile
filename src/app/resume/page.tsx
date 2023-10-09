import client from "../sanity/client";

const ResumeCards = ({ title , description }:any ):any   =>  {
  return (
    <>
        <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          
          
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">{title}</h1>
            <p className="leading-relaxed mb-3">{description}</p>
            <div className="flex items-center flex-wrap ">
            
            </div>
          </div>
        </div>
  
        </div>



    
    </>
  )
};


const Resume = async () => {
  const res = await client.fetch(` *[_type == "resume"] `)
    return (
       <section className="text-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">


    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-500">My Awesome Services</h1>
  <p className="lg:w-1/2 w-full leading-relaxed text-cyan-100">these are 3 of my main services i offer, with years of experience on each of them.</p>
</div>
     
    
     {
        res.map((val:any) =>  {
          return(
          <ResumeCards title={val.title} description = {val.description}/>
          );
          
        })}



     

    </div>
  </div>
</section>

    );
  };
  
  export default Resume;
  