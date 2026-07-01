import { CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { resData } = props;
  const navigate = useNavigate();
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla, id } =
    resData.info;
    
  // const handleCardClick = () => {
  //   navigate(`/restaurant/${id}`);
  // };
    
  return (
    <div className="card">
      <div>
        <div className="card-image-wrap">
          <img
            className="card-image"
            src={CDN_URL + cloudinaryImageId}
            alt="Card Image"
          />
          <span className="card-badge">Bestseller</span>
        </div>
        <div className="card-content">
          <div key={resData.info.id}>
            <p className="res-name">{name}</p>
            <p className="res-subtitle">
              {cuisines.join(" • ")} •{" "}
              {costForTwo}
            </p>
            <div className="card-info">
              <span className="rating">
                ⭐ {avgRating}
              </span>
              <span className="time">{sla.deliveryTime} mins</span>
              <span className="delivery">Free delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
