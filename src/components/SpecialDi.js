import { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext";
import AddToCart from "./AddToCart"

function SpecialDi(props){
    console.log("props are:",props.specialMenu);

    const allMenus=useContext(AllMenuContext)

    let [showPopup,setShowPopup]=useState(false)
    let [showPo,setShowPo]=useState("")
    let [showPo2,setShowPo2]=useState("")

   

    function ShowPopupHandler(dishPhoto,dishName){
    
          setShowPo(dishPhoto)
          setShowPo2(dishName)
           
            setShowPopup(true)
        
        
    
    }
    function clearPopup(){
        setShowPopup(false)

    }
    let maxIndex=8

    let specialMenus=allMenus.map((menuItems,index)=>{
        
        if(index<maxIndex)

        return (
        <CardDish menuItems={menuItems} showPopup={ShowPopupHandler} />
            )
    })
    
    return(
        <section className="special-dishes">
           {showPopup && <Popup clearPopup={clearPopup} showPo={showPo} showPo2={showPo2}/> } 
            <div className="container">

            <AddToCart />


                <div className="special-dishes-content text-center" >
            <h2>its our special dishes</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas delectus necessitatibus illum porro accusantium impedit consequatur dolores debitis mollitia aliquid, amet consectetur, minima, ullam voluptate.</p>
        </div>
        <div className="special-dishes-menu text-center">
        <ul className="flex flex-wrap"> 
            {specialMenus}
            </ul>
        </div>
        </div> 
        </section>
    )
}
export default SpecialDi;