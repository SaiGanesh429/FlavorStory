import { CDN_URL } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  return (
    <div className="card">
      <div>
        <div className="card-image-wrap">
          <img
            className="card-image"
            src={CDN_URL + resData.card.card.info.cloudinaryImageId}
            alt="Card Image"
          />
          <span className="card-badge">Bestseller</span>
        </div>
        <div className="card-content">
          <div key={resData.card.card.info.id}>
            <p className="res-name">{resData.card.card.info.name}</p>
            <p className="res-subtitle">
              {resData.card.card.info.cuisines.join(" • ")} •{" "}
              {resData.card.card.info.costForTwo}
            </p>
            <div className="card-info">
              <span className="rating">
                ⭐ {resData.card.card.info.avgRating}
              </span>
              <span className="time">{props.deliveryTime}</span>
              <span className="delivery">Free delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
