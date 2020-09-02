import React from "react";

const Thumbnail = (props) => {
  const { thumbNail: src, title: alt } = props.game;
  const { type } = props;
  return (
    <span>
      <img
        src={src}
        alt={alt}
        className="img-responsive"
        style={
          type === Thumbnail.types.MULTIPLE
            ? { width: "50%", padding: 5 }
            : { width: "100%", padding: 5 }
        }
      />
    </span>
  );
};

Thumbnail.types = {
  MULTIPLE: "MULTIPLE",
  SINGLE: "SINGLE",
  TWO: "TWO",
};

export default Thumbnail;
