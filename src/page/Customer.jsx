// importation of images 
import food from "../image/customer/food.png";
import food1 from "../image/customer/food1.png";
import food2 from "../image/customer/food2.png";
import food4 from "../image/customer/food4.png";
import food5 from "../image/customer/food5.png";
import food3 from "../image/customer/food3.png";

import axios from "axios";

import { useState } from "react";

import Modal from "../modal/Modal";

const Customer = () => {

    const [headCount, setHeadCount] = useState(0);

    const [sucess, setSuccess] = useState("");

    const [isOpen, setIsOpen] = useState(false);

    const [error, setError] = useState("");

    // a fxn to make the api call
    const AddHeadCount = async (event) => {
      
        event.preventDefault();

        try {

            // req to the database
            const addHeadCountData = await axios.post(`saveCustomerData`, {headCount});            
            
            // clearing the input field after the user submit data
            setHeadCount("");
            
            const { data } = addHeadCountData;

            if (data) {
                
                setIsOpen(true);

                setSuccess(data);

            }

            
        } catch (error) {

            console.log(error.message);

            setError(error.message)
            
        }
            
    };

    return (
      
        <>
            <div className="flex ">

                {/* input form section  */}
                <form className="flex-1 container m-auto">

                    <h1 className="mb-8 text-6xl text-pink-800 text-center not-italic font-extrabold capitalize">Table booking</h1>  

                    <p className="my-4 text-lg text-red-800 text-center not-italic font-normal capitalize">{error}</p>  
                    
                    <label htmlFor="headCount" className="my-2 mx-8 text-xl font-normal text-pink-500">Number of people</label>

                    <input value={headCount} onChange={event => setHeadCount(event.target.value)} autoComplete="off" type="number" placeholder="input number of headcount" id="headCount" className="placeholder:text-pink-200 text-pink-500 outline-0 border-2 w-full my-2 mx-8 py-3 px-5 rounded border-orange-500"/>

                    <div className="text-center">

                        <button onClick={AddHeadCount} disabled={!headCount} className="py-2 w-1/2  mx-10 mt-8 bg-gradient-to-r from-orange-500 to-pink-500 text-base text-white capitalize font-normal rounded-lg shadow-md hover:bg-yellow-700  focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">

                            add head count

                        </button>
                        
                    </div>

                    <Modal open={isOpen} close={(e) =>
                        
                       ( e.preventDefault(),
                
                        setIsOpen(false) )

                    }>{sucess}</Modal>

                </form>

                {/* image section  */}
                <div className="relative" style={{flex:1.3}} >

                    <div className="rounded-bl-full w-full h-full absolute" style={{backgroundColor: "rgba(255, 243, 235, 0.64)", backdropFilter: "blur(21px)", zIndex:-1}} ></div>
                    
                    <div className="z-50 my-16 mx-32 rounded-full border-2 border-orange-500 border-dashed" style={{width:"35rem", height:"35rem"}}>

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

export default Customer
