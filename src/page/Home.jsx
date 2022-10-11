import HomeImage from "../image/reserveatable.jpg";

import { Link } from "react-router-dom";

const Home = () => {

    return (
      
        <>
            <div style={{backgroundImage:`url(${HomeImage})`}} className="p-4 h-screen bg-center bg-no-repeat bg-cover">

                <div className="text-right text-xl text-white capitalize ">

                    <Link to={"/admin"} className=" py-3 px-6 bg-pink-500 hover:bg-pink-600 rounded">Admin</Link>

                </div>
                
                <h1 className="text-6xl text-pink-800 text-center not-italic font-extrabold uppercase mt-64 mb-10">reserve a table</h1>  

                <div className="text-center mt-2">

                    <button className="py-3 w-1/6 bg-gradient-to-r from-orange-500 to-pink-500 text-base text-white capitalize font-normal rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">

                        <Link to={"/bookatable"}> book a table</Link>
                        
                    </button>

                </div>
            </div>

        </>
    )
    
}

export default Home
