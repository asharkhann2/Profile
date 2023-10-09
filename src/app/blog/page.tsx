import client from "../sanity/client";

const BlogCards = ({ title , description }:any ):any   =>  {
 return (
  <>

    <div className="p-4 lg:w-1/2 md:w-full">
      <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
        <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-8 h-8" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">{title}</h2>
          <p className="text-cyan-100 leading-relaxed text-base">{description}</p>
         
            
              <path d="M5 12h14M12 5l7 7-7 7" />
            
                  </div>
      </div>
    </div>
   


</>
      )
};

const blog = async () => {
  const res = await client.fetch(` *[_type == "blogs"] `)
    return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto flex flex-wrap">

<div className="flex flex-wrap -m-4">
      {
        res.map((val:any) =>  {
          return(
          <BlogCards title={val.title} description = {val.description}/>
          );
          
        })}
    
      
    </div>
</div>
  
</section>

    );
    
  };
  
  export default blog;