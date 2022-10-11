import food from "../image/customer/food.png";
import food1 from "../image/customer/food1.png";
import food2 from "../image/customer/food2.png";
import food4 from "../image/customer/food4.png";
import food5 from "../image/customer/food5.png";
import food3 from "../image/customer/food3.png";


const Customer = () => {

    return (
      
        <>
            <div className="flex ">

                {/* input form section  */}
                <form method="post" className="flex-1 py-6">

                    <label htmlFor="headCount">Number of people</label>

                    <input type="number" placeholder="input number of headcount" id="headCount" />

                </form>

                {/* image section  */}
                <div className="relative" style={{flex:1.3}} >

                    <div className="rounded-bl-full w-full h-full absolute" style={{backgroundColor: "rgba(255, 243, 235, 0.64)", backdropFilter: "blur(21px)", zIndex:-1}} ></div>
                    
                    <div className="z-50 my-16 mx-32 rounded-full border-2 border-dashed" style={{ borderColor: "#EA6A12", width:"35rem", height:"35rem"}}>

                        <img style={{boxShadow: "8px 16px 24px rgba(0, 0, 0, 0.15)"}} className="rounded-full w-3/12" src={food1} alt={food1} />

                        <img style={{boxShadow: "8px 16px 24px rgba(0, 0, 0, 0.15)"}} className="w-1/5  rounded-full absolute left-16 mt-10" src={food2} alt={food2} />

                        <img style={{boxShadow: "8px 16px 24px rgba(0, 0, 0, 0.15)"}} className="rounded-full absolute mt-60 right-82 w-1/3" src={food} alt={food} />

                        <img style={{boxShadow: "8px 16px 24px rgba(0, 0, 0, 0.15)"}} className="w-1/5 rounded-full absolute mt-60 right-36" src={food5} alt={food5} />

                        <img style={{boxShadow: "8px 16px 24px rgba(0, 0, 0, 0.15)"}}  className=" w-1/5 rounded-full absolute right-16" src={food4} alt={food4} />

                        <img style={{boxShadow: "8px 16px 24px rgba(0, 0, 0, 0.15)"}} className="w-1/5 rounded-full absolute right-60 top-4" src={food3} alt={food3} />
                        
                    </div>

                </div>

            </div>
        </>
        
    )
    
}

export default Customer
