import CDN_URL from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data;
    return (
        <div className="res-card">
            <img src={CDN_URL+resData?.data?.cloudinaryImageId }
            alt="res-logo" className="res-logo"/>

            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}⭐</h4>
            <h4>₹{costForTwo/100 +" For Two"}</h4>
            <h4>{deliveryTime +" minutes"}</h4>
        </div>
    )
}

export default RestaurantCard;