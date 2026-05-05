import PhotoCard from "@/components/PhotoCard";
import React from "react";

const AllPhotosPage = async () => {
  const res = await fetch("https://pixgen-prac-mrm5.vercel.app/data.json");
  const photos = await res.json();
  return (
    <div>
      <h1>All photos</h1>

      <div className="grid grid-cols-4 gap-3">
        {photos.map((photo) => {
          return <PhotoCard key={photo.id} photo={photo} />;
        })}

        {/* {photos.map((photo) => 
          ( <PhotoCard key={photo.id} photo={photo} />)
        )} */}
      </div>
    </div>
  );
};

export default AllPhotosPage;
