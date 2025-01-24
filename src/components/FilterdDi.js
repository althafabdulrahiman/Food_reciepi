import React, { useContext, useState } from 'react'
import Pagination from './Pagination';
import CardDish from './CardDish';
import { AllMenuContext } from './AllMenuContext';

function FilterdDi(props) {

    
    console.log("filterd props:",props.filterdMenu);
    console.log("all menus:",props.allMenus);
    console.log("single props:",props.singleData);

    const all=useContext(AllMenuContext)
    

    let [allMenus,setAllMenus]=useState(all)
    let [filterdDishes,setFilterdDishes]=useState([])

    let [sam,setSam]=useState("")
    let [activeDish,setActiveDish]=useState("Beef")

    let [currentPage,setCurrentPage]=useState(1)
    let [itemPerPage,setItemPerPage]=useState(4)

    let con=4
 

    let single=props.singleData.map((items,index)=>{    
         if(index<con)
        return (
    
            <li >
                <img src={items.strMealThumb} alt='' width={200} height={200} className="br-10"></img>
               <h3>{items.strMeal}</h3> 
                </li>
           
        )
    }
   )


    
function filterResult(category){
    // alert("hai")
//    alert("please collect the category:"+category)
//    let filterdDishesAre= allMenus.filter((item)=>{
//         return item.strCategory === category
props.setSingleData([])
setActiveDish(category)
let filterdDishesAre= all.filter((menuItems)=> menuItems.strCategory === category)
    .map((menuItems)=>{
        return(

        <CardDish menuItems={menuItems}/>

        );
    }
);
// console.log("hai",filterdDishesAre);

setFilterdDishes(filterdDishesAre);

setSam(category) 


}

let data=props.filterdMenu.map((categoryItems)=>{    

    return (

        <li className={categoryItems.strCategory == activeDish ? "active" : " "} onClick={()=>filterResult(categoryItems.strCategory)}>
           <h3>{categoryItems.strCategory}</h3> 
            </li>
       
    )
})

// let dataResult=props.allMenus.map((resultItems)=>{
//     return (

//         <li>
        
//         </li>
//     )
// })


  return (
    <div className='filterd-dishes'>
        <div className='container'>
            <div className='text-center'>
       <h2>Choose your dishes</h2>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ratione architecto, voluptate veniam consequatur corporis debitis delectus libero sit minus.</p>
       </div><div>
        <ul className="flex flex-wrap">
            {data}
            
            </ul>
        
        </div> 
        <div className='special-dishes'>
       <div className="special-dishes-content">
        <div className="head text-center" >
            <h1>{sam}</h1>
        </div>
        <ul className="flex flex-wrap">
     {single}
           { single != 0 || filterdDishes.length != 0 ? filterdDishes : 
           
           <div className='alert text-center' ><h3> Items are not available</h3>
           <h4>please select another item</h4>  </div> 
           }
       </ul>
       <Pagination filterdDishes={filterdDishes}/>
       </div>
       </div>
     
        </div>
        
        </div>
  )
}

export default FilterdDi