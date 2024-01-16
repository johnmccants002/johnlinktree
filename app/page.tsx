import Avatar from "./(components)/Avatar";
import Card from "./(components)/Card";
import FeaturedCard from "./(components)/FeaturedCard";
import PayMe from "./(components)/PayMe";

import {
  FaGlobe,
  FaBlog,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaMedium,
  FaDiscord,
  FaNewspaper,
  FaChartArea,
  FaLaptop,
  FaRobot,
  FaBars,
  FaShoppingCart,
} from "react-icons/fa";

import { items, tagline } from "../data/data";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto h-screen">
        <section className="flex flex-col items-center gap-5 justify-center my-10">
          <Avatar />
          <div className="text-2xl font-semibold">
            <a href="/">@mrjohnwonder</a>
          </div>

          <div className="text-zinc-500 flex justify-between gap-5">
            {tagline.map((item, index) => (
              <div
                className="text-zinc-500 text-sm text-center font-thin"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <PayMe />

        <div className="w-full flex gap-2 my-2 flex-col items-center justify-center pb-2 lg:pb-10">
          <Card
            title={items.instagram.title}
            icon={<FaInstagram />}
            url={items.instagram.url}
          />
          <Card
            title={items.twitter.title}
            icon={<FaTwitter />}
            url={items.twitter.url}
          />
          <Card
            title={items.github.title}
            icon={<FaGithub />}
            url={items.github.url}
          />
          <Card
            title={items.pomodevs.title}
            icon={<FaGlobe />}
            url={items.pomodevs.url}
          />
          <Card
            title={items.showcase.title}
            icon={<FaBars />}
            url={items.showcase.url}
          />
        </div>
      </div>
    </>
  );
}

// Add this in your global CSS file
