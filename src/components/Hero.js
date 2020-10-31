import React from "react";
export default function Hero({children}) {
  return (
    <div className="hero">
       <div className="banner">
          <h1>Buy--Use--Enjoy</h1>
          <p>Keep healthy, ride every day.</p>
          {children}
       </div>
    </div>
  )
}
