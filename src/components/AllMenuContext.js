import React, { createContext } from "react"
import { useState ,useEffect} from "react"
import Loading from "./Loading"



export const AllMenuContext=React.createContext()

export const AllMenus = (props) =>{


    let [menu,setMenu]=useState([])
      let [loading,setLoading]=useState(true)
    
    async function getAllTheMenus(){
        console.log("api calling");
        
        const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response=await fetch(API_URL)
        console.log(response,"in response");
        
        let data=await response.json()
        setMenu(data.meals)
        setLoading(false)
    }

     useEffect(()=> {
      getAllTheMenus()
      
    },[]);
    

    return (

       <AllMenuContext.Provider value={menu}>
            {!loading ? props.children : <Loading  />}
        </AllMenuContext.Provider>
    )
}
// export default AllMenus