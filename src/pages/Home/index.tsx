import React from "react";

import { Badge } from "@/components/ui/badge";
import CountBtn from "@/components/CountBtn";
import ReactSVG from "@/assets/react.svg";
import PageWrapper from "@/layouts/PageWrapper";
import Navbar from "@/components/navbar/navbar";


const Home = () => {
  return (
    <PageWrapper title="Home">
      <Navbar />
      <div className=" flex flex-col items-center justify-center h-screen bg-background">
        <div className="flex flex-col items-center gap-y-4">
          <div className="inline-flex items-center gap-x-4">
            <img src={ReactSVG} alt="React Logo" className="w-32" />
            <span className="text-6xl">+</span>
            <img src={"/vite.svg"} alt="Vite Logo" className="w-32" />
          </div>
          <a href="https://ui.shadcn.com" rel="noopener noreferrer nofollow" target="_blank">
            <Badge variant="outline">shadcn/ui</Badge>
          </a>
          <CountBtn />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
