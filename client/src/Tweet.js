import React from "react";

const Tweet = (props) => {
  console.log(props);
  return (
    <div className="tweetCard">
      <p>{props.name}</p>
    </div>
  );
};

export default Tweet;
