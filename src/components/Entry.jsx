import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role={props.emoji} ariel-label={props.name}>
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}
export default Entry;
