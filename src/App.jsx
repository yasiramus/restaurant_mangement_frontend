import Home from "./page/Home";

import { Routes, Route } from "react-router-dom";
import Customer from "./page/Customer";
import Owner from "./page/Owner";

const App = () => {

    return (
      
        <>

            <Routes>

                <Route index element={<Home />}></Route>

                <Route path="/bookatable" element={<Customer/>}></Route>

                <Route path="/admin" element={<Owner />}></Route>
                
            </Routes>
            
        </>
        
    )
    
}

export default App
