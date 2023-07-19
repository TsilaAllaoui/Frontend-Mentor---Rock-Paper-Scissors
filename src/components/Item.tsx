import "../styles/Item.scss";

const Item = ({ image, type }: { image: string; type: string }) => {
  const r1 = "rgb(255,54,84)";
  const r2 = "rgb(156,22,49)";

  const y1 = "rgb(239,158,17)";
  const y2 = "rgb(201,110,29)";

  const b1 = "rgb(70,101,244)";
  const b2 = "rgb(39,67,192)";

  return (
    <div className="item">
      <div
        className="circle-1"
        style={{
          backgroundColor: type == "paper" ? b2 : type == "scissor" ? y2 : r2,
        }}
      ></div>
      <div
        className="circle-2"
        style={{
          backgroundColor: type == "paper" ? b1 : type == "scissor" ? y1 : r1,
        }}
      >
        <div
          className="circle-3"
          style={{ backgroundColor: "rgb(189,191,212)" }}
        ></div>
        <div className="circle-4" style={{ backgroundColor: "white" }}></div>
      </div>
      <img src={image} alt={image} />
    </div>
  );
};

export default Item;
