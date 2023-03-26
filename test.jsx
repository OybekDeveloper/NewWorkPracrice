import React, { useState } from "react";
import "./Test.scss"

const Test = () => {
    const [styles, setStyles] = useState({ card: {}, glow: {} });
    const [bounds, setBounds] = useState(null);

  function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x2 + center.y2);

    const cardStyle = `
      transform: 
        scale3d(1.07, 1.07, 1.07),
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
        `;
    const glowStyle = `
      backgroundImage: 
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )`;

    setStyles({ card: cardStyle, glow: glowStyle });

  }
  function handleMouseEnter(e) {
    setBounds(e.target.getBoundingClientRect());
    document.addEventListener("mousemove", rotateToMouse);
  }

  function handleMouseLeave() {
    document.removeEventListener("mousemove", rotateToMouse);
    setStyles({ card: {}, glow: {} });
  }

    return (
      <>
        <div
        className="hover_card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={styles.card}
      >
        3D Card
        <div className="glow" style={styles.glow} />
      </div>
        <div
        className="hover_card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={styles.card}
      >
        3D Card
        <div className="glow" style={styles.glow} />
      </div>
        <div
        className="hover_card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={styles.card}
      >
        3D Card
        <div className="glow" style={styles.glow} />
      </div>
      </>
    );
  
};

export default Test;