import * as React from "react";
import gameCorner from "../../assets/images/game-corner.svg";

export default function Corners () {
  return (
    <React.Fragment>
      <img src={gameCorner} alt="" style={{position: 'absolute', top: 0, right: 0}}/>
      <img
        src={gameCorner}
        alt=""
        style={{position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)'}}
      />
      <img
        src={gameCorner}
        alt=""
        style={{position: 'absolute', bottom: 0, right: 0, transform: 'rotate(90deg)'}}
      />
      <img
        src={gameCorner}
        alt=""
        style={{position: 'absolute', bottom: 0, left: 0, transform: 'rotate(180deg)'}}
      />
    </React.Fragment>
  )
}