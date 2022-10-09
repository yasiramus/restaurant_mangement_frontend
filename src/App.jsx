import Home from "./page/Home";

import { Routes, Route } from "react-router-dom";
import Customer from "./page/Customer";

const App = () => {

    return (
      
        <>

            <Routes>

                <Route index element={<Home />}></Route>

                <Route path="/bookatable" element={<Customer/>}></Route>

            </Routes>
            
        </>
        
    )
    
}

export default App
