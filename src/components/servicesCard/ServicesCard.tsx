
import { gridItems } from '../../Data';


const ServicesCard = () => {
 return (
   <>
     <section className="py-16" id="services">
       <div className="container mx-auto ">
         <h2 className="text-2xl font-bold text-center mb-12 text-white md:text-4xl">
           The Services I
           <span className="text-purple-400 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-200 bg-clip-text text-transparent">
             {" "}
             Offer
           </span>
         </h2>
         <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
           {gridItems.slice(0, 4).map((item) => (
             <div
               key={item.id}
               className="bg-black-100 text-white rounded-lg shadow-lg shadow-purple-500/40 overflow-hidden transition-transform duration-300 hover:scale-105 z-10 "
             >
               <div className="p-6 flex flex-col h-full">
                 {item.img && (
                   <img
                     src={item.img}
                     alt={item.title}
                     className="mb-4 w-full h-48 object-cover"
                   />
                 )}
                 <h3 className="text-xl font-semibold mb-2 text-center">
                   {item.title}
                 </h3>
                 {item.description && (
                   <p className="text-gray-300 flex-grow text-sm text-center">
                     {item.description}
                   </p>
                 )}
               </div>
             </div>
           ))}
         </div>
       </div>
       {/* <a href="#about">
         <MagicButton
           title="View More"
           icon={<FaLocationArrow />}
           position="right"
         />
       </a> */}
     </section>
   </>
 );
}

export default ServicesCard