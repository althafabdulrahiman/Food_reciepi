import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Hero from "./Hero";
import SpecialDi from "./SpecialDi";
import Footer from "./Footer";
import FilterdDi from "./FilterdDi";
// import Loading from "./Loading";
import Header from "./Header";
import React from "react";
// import { createContext } from "react";
import { AllMenus } from "./AllMenuContext";
import AddToCart from "./AddToCart";
import Checkout from "./Checkout";
import axios from "axios";


// step 1 .create react global context to share it to its childrens

// export const AllMenuContext = React.createContext();

function Menus() {
  // let [menu, setMenu] = useState([]);
  let [categoryMenu, setCategoryMenu] = useState([]);
  // let [loading, setLoading] = useState(true);
  let [singleData, setSingleData] = useState([]);

  // function getAllTheMenus(){
  //     console.log("api calling");

  //     const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c";
  //     axios.get(API_URL)
  //       .then(response => {
  //         console.log(response,"in response");

  //         let data = response.data;
  //         setMenu(data.meals);
  //         setLoading(false);
  //       })
  //       .catch(error => {
  //         console.error("Error fetching data:", error);
  //       });
  // }

  function getAllTheCategorys() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    axios.get(API_URL)
      .then(response => {
        let categoryData = response.data;

        setCategoryMenu(categoryData.categories);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  function getSingleData() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    axios.get(API_URL)
      .then(response => {
        let single = response.data;
        setSingleData(single.meals);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  console.log("category data:", categoryMenu);
  // console.log("all menu:",menu);
  console.log("single data", singleData);

  useEffect(() => {
    // getAllTheMenus();
    getAllTheCategorys();
    getSingleData();
  }, []);

  // console.log("menu:",menu);
  // let menuImages=menu.map((items)=>{
  //    return(
  //     <div>
  //     <img src= {items.strMealThumb}  />
  //     <h2>{items.strCategory}</h2>
  //     </div>
  //    )
  // })

  // useEffect(() => {
  // const fetchData = () =>{
  //     const API_URL="http://www.themealdb.com/api/json/v1/1/search.php?f=a";
  //     axios.get(API_URL)
  //       .then(response => {
  //         let data = response.data;
  //         console.log(data);
  //       })
  //       .catch(error => {
  //         console.error("Error fetching data:", error);
  //       });
  // };
  // fetchData();

  // },[]);

  return (
    <div>
      <Router>
      
        <Header />
        <div className="Hero-1">
          {/* {menuImages} */}

          <Hero />
          <AddToCart />
          {/* <AllMenuContext.Provider value={menu}> */}

          <AllMenus>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <SpecialDi />
                    <FilterdDi
                      filterdMenu={categoryMenu}
                      singleData={singleData}
                      setSingleData={setSingleData}
                    />
                  </>
                }
              />
              {/* {!loading ? <SpecialDi  /> : <Loading  />} */}

              {/* // <Route exact path="/" element={<FilterdDi filterdMenu={categoryMenu}  singleData={singleData} setSingleData={setSingleData}/>} /> */}
              {/* {!loading ? <FilterdDi filterdMenu={categoryMenu}  singleData={singleData} setSingleData={setSingleData}/> : null} */}
              {/* </AllMenuContext.Provider> */}

              <Route exact path="/Checkout" element={<Checkout />} />
            </Routes>
          </AllMenus>

          <Footer />
        </div>
       
      </Router>
    </div>
  );
}

export default Menus;
