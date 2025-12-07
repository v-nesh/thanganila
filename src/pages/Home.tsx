import React from "react";
import { HeroTrending } from "../sections/HeroTrending";
import { Breeds } from "../sections/Breeds";
import { Bundles } from "../sections/Bundles";
import { HomeServices } from "../sections/HomeServices";
import { Testimonials } from "../sections/Testimonials";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Home: React.FC = () => {
  return (
    <>
      <HeroTrending />
      <Reveal>
        <Breeds />
      </Reveal>
      <div className="flex justify-center pb-12 bg-white">
        <Link to="/pets">
          <Button variant="outline" className="gap-2">
            View All Pets <ArrowRight size={16} />
          </Button>
        </Link>
      </div>

      <Reveal>
        <Bundles />
      </Reveal>

      <HomeServices />

      <Reveal>
        <Testimonials />
      </Reveal>
    </>
  );
};
