import Image from "next/image";
import Banner from './../components/Banner';
import TopGeneration from "@/components/TopGeneration";
import SignUpPage from './signup/page';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner/>
      <TopGeneration/>
      
    </div>
  );
}
