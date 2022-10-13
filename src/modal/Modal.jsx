
const Modal = ({ open, close, children }) => {
    
    if (!open) {
      
        return null;
        
    } else {
        
        return (
        
            <>
                
            <div className="fixed top-0 right-0 bottom-0 left-0 z-50 overlay">
                
                    <div className="bg-stone-50 fixed top-1/2 left-1/2 z-50 p-12 -translate-x-2/4 -translate-y-2/4">

                    {/* the children will diplay the data within the todo form component the one within the modal component  */}
                    <p className="text-center pb-2 font-medium text-base text-pink-500">{children}</p>                                
                        
                    <div className="text-center">

                        <button type="submit" onClick={ close} className="py-2 w-1/2  mx-10 mt-8 bg-gradient-to-r from-orange-500 to-pink-500 text-base text-white capitalize font-normal rounded-lg shadow-md hover:bg-yellow-700  focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"> ok</button>

                    </div>
                     
                </div>
                
            </div>
                
            </>
            
        );
        
    }
    
}

export default Modal;
