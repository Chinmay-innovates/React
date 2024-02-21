
import "./Ranks.css"
const Ranks = ({ ranks }) => {
  return (
    <div>
      {ranks.map((rank) => (
        <span key={rank} className="ranks">{rank}</span>
      ))}
    </div>
  );
};

export default Ranks;
