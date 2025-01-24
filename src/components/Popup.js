import React, {  useState } from 'react'
import AddToCart from './AddToCart'
// import { DispatchContext } from '../context/AppProvider'

function Popup({clearPopup,showPo,showPo2}) {


 

  

  let [pop,setPop]=useState([])
  let [pop2,setPop2]=useState([])

const getPop=(val,val2)=>{
  return(
    setPop(val),
    setPop2(val2)
  )
}


  return (
    <div className='popup'>
        <div className="popup-content">
            <h2>Order Now!!</h2>
           <img src={showPo} width={200} height={200} className="br-10" /> <br></br>
           <h3>{showPo2}</h3><br></br>
            <button onClick={()=>getPop(showPo,showPo2)}>Order now</button>
            <h5 className='popup-close' onClick={clearPopup}>Close</h5>
        </div>
       <AddToCart pop={pop} pop2={pop2}/>
        </div>
  )
}

export default Popup