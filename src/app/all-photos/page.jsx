import PhotoCard from "@/components/PhotoCard";
import React from "react";
import Category from './../../components/Category';

const AllPhotosPage = async ({searchParams}) => {
  const {category} =await searchParams;
  console.log(category);
  const res = await fetch("https://pixgen-prac-mrm5.vercel.app/data.json");
  const photos = await res.json();


const filteredPhotos = category? photos.filter(photo => photo.category.toLowerCase()==category.toLowerCase()):photos;

  return (
    <div>
      <h1>All photos</h1>
      <Category></Category>

      <div className="grid grid-cols-4 gap-3">
        {filteredPhotos.map((photo) => {
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
