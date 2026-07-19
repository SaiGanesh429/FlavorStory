import "./Shimmer.css";

const ShimmerCard = () => (
  <div className="shimmer-card" aria-hidden>
    <div className="shimmer-image" />
    <div className="shimmer-badge" />
    <div className="shimmer-content">
      <div className="shimmer-line long" />
      <div className="shimmer-line medium" />
      <div style={{ height: 8 }} />
      <div className="shimmer-info">
        <div className="shimmer-pill" />
        <div className="shimmer-pill" />
        <div className="shimmer-pill" />
      </div>
    </div>
  </div>
);

const Shimmer = ({ count = 8 }) => {
  return (
    <div className="shimmer-wrapper">
      {Array.from({ length: count }).map((_, i) => (
        <ShimmerCard key={i} />
      ))}
    </div>
  );
};

export default Shimmer;
