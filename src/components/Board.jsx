import { useState } from "react";
import { Card } from "./Card";

export const Board = () => {
  const [cards, setCards] = useState([
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Max_Verstappen_2017_Malaysia_1.jpg/320px-Max_Verstappen_2017_Malaysia_1.jpg",
      name: "Max Verstappen",
      selected: false,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Anefo_933-1302_Huub_Rothengatter%2C_Alain_Prost%2C_Niki_Lauda_29.10.1984_Prost_crop.jpg/300px-Anefo_933-1302_Huub_Rothengatter%2C_Alain_Prost%2C_Niki_Lauda_29.10.1984_Prost_crop.jpg",
      name: "Alain Prost",
      selected: false,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ayrton_Senna_9.jpg/640px-Ayrton_Senna_9.jpg",
      name: "Ayrton Senna",
      selected: false,
    },
    {
      image:
        "https://www.formula1.com/content/fom-website/en/drivers/fernando-alonso/_jcr_content/image.img.640.medium.jpg/1647334212592.jpg",
      name: "Fernando Alonso",
      selected: false,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg/300px-Lewis_Hamilton_2016_Malaysia_2.jpg",
      name: "Lewis Hamilton",
      selected: false,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Schumi_di_GP_Kanada_2011_cropped.jpg/339px-Schumi_di_GP_Kanada_2011_cropped.jpg",
      name: "Micheal Schumacher",
      selected: false,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lauda_at_1982_Dutch_Grand_Prix.jpg/349px-Lauda_at_1982_Dutch_Grand_Prix.jpg",
      name: "Nikki Lauda",
      selected: false,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sebastian_Vettel_2015_Malaysia_podium_1.jpg/320px-Sebastian_Vettel_2015_Malaysia_podium_1.jpg",
      name: "Sebastian Vettel",
      selected: false,
    },
  ]);
  return (
    <div className="main">
      <h4>
        Get points by clicking on an image but don't click on any more than
        once!
      </h4>
      <div className="cards">
        {cards.map((card) => {
          return <Card key={card.name} card={card} />;
        })}
      </div>
    </div>
  );
};
