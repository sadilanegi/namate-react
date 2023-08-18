import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () =>{
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);
    return (
        <div className="body">
            <button 
            className="filter-btn"
            onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                    (res)=>res.data.avgRating > 4
                );
                setListOfRestaurants(filteredList);
            }}
            // onMouseOver={()=>{
            //     console.log("button hovered");
            // }}
            >Top Rated Restaurant</button>
            {/* <div className="f">Search</div> */}
            <div className="res-container">
            {
                listOfRestaurants.map((rest) => (
                    <RestaurantCard  key= {rest?.data?.id} resData={rest}/>
                    ))
            }
            </div>
        </div>

    )
}

export default Body;