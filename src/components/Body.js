import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import ShimmerUi from "./ShimmerUi";

const Body = () =>{
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);

    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();                              // in useEffect the first argument  is a callback function 
    },[]);                                       // and the seconf argument is an dependency array
            
    
    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1282743&lng=72.8677092&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        
        const json = await data.json();
        console.log('line22',json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          ); 
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } 
    
    // Conditional Rendering
    // if (listOfRestaurants.length === 0){
    //     return <ShimmerUi/>
    // }

    return listOfRestaurants.length === 0 ? <ShimmerUi/> : (
        <div className="body">
            <div className="filter">              
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}></input>
                    <button
                    onClick={()=>{
                        const searchList = listOfRestaurants.filter(  //if i add {} and add the code in line 42 & 43 it does not work ??
                        (res)=>
                            res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
                        );
                        setFilteredRestaurants(searchList);
                    }}
                    >Search</button>
                </div>
                <button
                className="filter-btn"
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res)=>res?.info?.avgRating > 4
                    );
                    setFilteredRestaurants(filteredList);
                }}
                // onMouseOver={()=>{
                //     console.log("button hovered");
                // }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
            {
                filteredRestaurants.map((rest) => (
                    <RestaurantCard  key= {rest?.info?.id} resData={rest?.info}/>
                    ))
            }
            </div>
        </div>
        
    )
}

export default Body;