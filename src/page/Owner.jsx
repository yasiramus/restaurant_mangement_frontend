import food from "../image/customer/food.png";
import food1 from "../image/customer/food1.png";
import food2 from "../image/customer/food2.png";
import food4 from "../image/customer/food4.png";
import food5 from "../image/customer/food5.png";
import food3 from "../image/customer/food3.png";

import { Link } from "react-router-dom";

const Owner = () => {

    return (
      
        <>
            <div className="flex ">

                {/* input form section  */}
                <form method="post" className="flex-1 container m-auto">

                    <h1 className="mb-8 text-6xl text-pink-800 text-center not-italic font-extrabold capitalize">Add Table Data</h1>  

                    <label htmlFor="tableNumber" className="my-2 mx-8 text-xl font-normal text-pink-500">Number of table</label>

                    <input type="number" autoComplete="off" placeholder="add maximum number of table" id="tableNumber" className=" placeholder:text-pink-200 text-pink-500 outline-0 border-2 w-full my-2 mx-8 py-3 px-5 rounded border-orange-500"/>
                    
                    <label htmlFor="chairPerTable" className="my-2 mx-8 text-xl font-normal text-pink-500">Number of Chairs</label>

                    <input type="number" autoComplete="off" placeholder="add number of chair per table" id="headCount" className="placeholder:text-pink-200 text-pink-500 outline-0 border-2 w-full my-2 mx-8 py-3 px-5 rounded border-orange-500"/>

                    <div className="text-center">

                        <button className="py-2 w-1/2  mx-10 mt-8 bg-gradient-to-r from-orange-500 to-pink-500 text-base text-white capitalize font-normal rounded-lg shadow-md hover:bg-yellow-700  focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">

                            <Link to={"/bookatable"}>submit</Link>

                        </button>
                        
                    </div>

                </form>

                {/* image section  */}
                <div className="relative" style={{flex:1.3}} >

                    <div className="rounded-bl-full w-full h-full absolute" style={{backgroundColor: "rgba(255, 243, 235, 0.64)", backdropFilter: "blur(21px)", zIndex:-1}} ></div>
                    
                    <div className="z-50 my-16 mx-32 rounded-full border-2 border-dashed border-orange-500" style={{width:"35rem", height:"35rem"}}>

                        <img loading="lazy" style={{boxShadow: "8px 16px 24px rgba(0, 0, 0, 0.15)"}} className="rounded-full w-3/12" src={food1} alt={food1} />

                        <img loading="lazy" style={{boxShadow: "8px 16px 24px rgba(0, 0, 0, 0.15)"}} className="w-1/5  rounded-full absolute left-16 mt-10" src={food2} alt={food2} />

                        <img loading="lazy" style={{boxShadow: "8px 16px 24px rgba(0, 0, 0, 0.15)"}} className="rounded-full absolute mt-60 right-82 w-1/3" src={food} alt={food} />

                        <img loading="lazy" style={{boxShadow: "8px 16px 24px rgba(0, 0, 0, 0.15)"}} className="w-1/5 rounded-full absolute mt-60 right-36" src={food5} alt={food5} />

                        <img loading="lazy" style={{boxShadow: "8px 16px 24px rgba(0, 0, 0, 0.15)"}}  className=" w-1/5 rounded-full absolute right-16" src={food4} alt={food4} />

                        <img loading="lazy" style={{boxShadow: "8px 16px 24px rgba(0, 0, 0, 0.15)"}} className="w-1/5 rounded-full absolute right-60 top-4" src={food3} alt={food3} />
                        
                    </div>

                </div>

            </div>
        </>
        
    )
    
}

export default Owner
