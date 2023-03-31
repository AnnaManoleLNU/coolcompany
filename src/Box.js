import { useState } from "react";

const Box = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageStyle = {
    backgroundImage: `url(${props.backgroundImage})`,
    opacity: !isHovered ? 0.2 : 0.6
  }

  const textStyle = {
    opacity: 1
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }
  return (
    <div className="box"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="box-image" style={imageStyle}></div>
      <div className="box-text" style={textStyle}>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default Box;