import React from "react";
import Image from "next/image";
import { Card, Chip, Divider, Button } from "@heroui/react";
import { FaHeart, FaRegCalendarAlt, FaExpand, FaRobot } from "react-icons/fa";
import { BiDownload, BiUser, BiCodeBlock } from "react-icons/bi";
import { MdOutlineDateRange } from "react-icons/md";

const PhotoDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://pixgen-prac-mrm5.vercel.app/data.json");
  const photos = await res.json();
  const photo = photos.find((p) => p.id == id);

  if (!photo)
    return <div className="text-center p-10 text-xl">Photo not found!</div>;

  // তারিখ ফরম্যাট করার জন্য
  const formattedDate = new Date(photo.createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Card className="max-w-6xl mx-auto border-none shadow-2xl bg-white dark:bg-zinc-950 rounded-[2rem] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* বাম পাশ: ইমেজ সেকশন */}
        <div className="relative w-full aspect-square lg:h-[750px] overflow-hidden bg-gray-100 dark:bg-zinc-900">
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            fill
            priority
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <Chip
            color="primary"
            variant="shadow"
            className="absolute left-6 top-6 px-4 py-1 text-sm font-bold uppercase"
          >
            {photo.category}
          </Chip>
        </div>

        {/* ডান পাশ: বিস্তারিত তথ্য */}
        <div className="p-8 lg:p-12 flex flex-col space-y-8">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              {photo.title}
            </h1>

            {/* Tags Section */}
            <div className="flex flex-wrap gap-2 mb-6">
              {photo.tags.map((tag, index) => (
                <Chip
                  key={index}
                  variant="flat"
                  size="sm"
                  className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  #{tag}
                </Chip>
              ))}
            </div>
          </div>

          {/* Prompt Section */}
          <div className="bg-gray-50 dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-zinc-800">
            <div className="flex items-center gap-2 mb-3 text-blue-600 font-bold text-sm uppercase tracking-wider">
              <BiCodeBlock size={20} />
              <span>Generation Prompt</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
              "{photo.prompt}"
            </p>
          </div>

          {/* Technical Specs Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 dark:border-zinc-800">
              <FaExpand className="text-gray-400" />
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-bold">
                  Resolution
                </p>
                <p className="font-semibold">{photo.resolution}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 dark:border-zinc-800">
              <FaRobot className="text-gray-400" />
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-bold">
                  AI Model
                </p>
                <p className="font-semibold">{photo.model}</p>
              </div>
            </div>
          </div>

          {/* Likes & Downloads */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/20 text-rose-600">
              <div className="flex items-center gap-2">
                <FaHeart />
                <span className="text-sm font-bold">Likes</span>
              </div>
              <span className="text-xl font-black">{photo.likes}</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/20 text-blue-600">
              <div className="flex items-center gap-2">
                <BiDownload size={20} />
                <span className="text-sm font-bold">Downloads</span>
              </div>
              <span className="text-xl font-black">{photo.downloads}</span>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex items-center justify-between pt-4 text-sm text-gray-500 border-t border-gray-100 dark:border-zinc-800">
            <div className="flex items-center gap-2">
              <BiUser className="text-lg" />
              <span>
                By{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Rayhan
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineDateRange className="text-lg" />
              <span>{formattedDate}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              size="lg"
              color="primary"
              className="flex-1 font-bold h-14 rounded-2xl shadow-xl shadow-blue-500/40 text-lg"
              startContent={<BiDownload size={24} />}
            >
              Download Image
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="font-bold h-14 rounded-2xl border-2 px-8"
              isIconOnly
            >
              <FaHeart size={22} className="text-rose-500" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PhotoDetails;
