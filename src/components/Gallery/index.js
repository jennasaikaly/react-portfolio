import React from "react";

function Gallery() {
  const currentSection = {
    name: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  };
  return (
    <section className = "gallery-container">
      <h1>{currentSection.name}</h1>
      <p>{currentSection.name}</p>
    </section>
  );
}
export default Gallery;