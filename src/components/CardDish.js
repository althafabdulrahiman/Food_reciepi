import React from 'react'

function CardDish(props) {

   

  return (

        
        <li>
            <a href="javascript:;" onClick={()=>props.showPopup(props.menuItems.strMealThumb,props.menuItems.strMeal)}>
                <img src={props.menuItems.strMealThumb} width={200} height={200} className="br-10"/>
            <h3>{props.menuItems.strMeal}</h3>
            </a>

        </li>
        
 
  )
}

export default CardDish