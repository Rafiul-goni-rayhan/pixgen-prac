import React from "react";
import PhotoCard from "./PhotoCard";

const TopGeneration = async () => {
  const res = await fetch("https://pixgen-prac-mrm5.vercel.app/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 8);
  // console.log(photos);
  // console.log(topPhotos);
  return (
    <div>
      <h1 className="text-2xl font-bold mt-5">Top generations</h1>
      <div className="grid grid-cols-4 gap-5">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopGeneration;
