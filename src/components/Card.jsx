import React from "react";
import Avatar from "./Avatar";
import Description from "./Description";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Description info={props.tel} />
        <Description info={props.email} />
      </div>
    </div>
  );
}

export default Card;
