import CDN_URL from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo, sla} = resData;
    return (
        <div className="res-card">
            <img src={CDN_URL+resData?.cloudinaryImageId }
            alt="res-logo" className="res-logo"/>

            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime +" minutes"}</h4>
        </div>
    )
}

export default RestaurantCard;