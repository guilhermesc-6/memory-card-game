export const Card = ({ card }) => {
  return (
    <div className="card" key={card.name}>
      <img src={card.image} alt={card.name} />
      <span>{card.name}</span>
    </div>
  );
};
