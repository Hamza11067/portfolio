import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-0 ">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6 ">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Hamza Khalid</span>
            </h1>
            <p className="max-w-125 mb-9 text-white/80">
              I excel at crafting elegant digital experience and I am proficient
              in various programming languages and technologies.
            </p>

            {/* Buttons and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/cv.pdf" download>
                <Button>
                  <span>Download CV</span>
                  <FiDownload />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-0 mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* Stats */}
      <Stats />
    </section>
  );
}
