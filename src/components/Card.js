import { CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { resData } = props;
  const navigate = useNavigate();
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla, id } =
    resData.card.card.info;

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
        </div>
        <div className="card-content">
          <div key={resData.card.card.info.id}>
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

// Adding Higher order components for Promoted restaurants
export const withPromotedLabel = (CardComponent) => {
  return (props) => {
    const { resData } = props;
    if (resData.card.card.info.promoted) {
      return (
        <div className="promoted-card">
          <label className="bg-black absolute text-white m-2 p-2 rounded-lg z-9">Promoted</label>
          <CardComponent {...props} />
        </div>
      );
    }
    return <CardComponent {...props} />;
  };
};

export default Card;
