"use client";
import Image from "next/image";
import Brave from "../brave.gif";
import Congrats from "../congrats.gif";
import HappyDance from "../happydance.gif";
import Pedal from "../pedal.webp";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import "./globals.css";

type RainType = {
  src: string;
  left: string;
  top: string;
  duration: string;
  delay: string;
  width: string;
  rotate: number;
};

export default function Home() {
  const [openedEnvelope, setOpenEnvelope] = useState(false);
  const [rain, setRain] = useState<RainType[]>([]);
  const [drop, setDrop] = useState(false);
  useEffect(() => {
    const duplicates = new Array(10).fill(Pedal);

    const rainDrop = duplicates.map((duplicate) => ({
      src: duplicate.src,
      left: Math.random() * 100 + "%",
      top: 0 + "%",
      duration: Math.random() * 5 + 2 + "s",
      delay: Math.random() * 5 + "s",
      width: Math.random() * 2 + 2 + "px",
      rotate: Math.random() * 180 + Math.random(),
    }));

    setRain(rainDrop);
  }, []);

  return (
    <main className="bg-rose-200 min-h-screen max-w-full flex flex-col align-center items-center overflow-none">
      <div
        className={cn(
          `absolute flex flex-1 z-100 text-center overflow-none`,
          openedEnvelope
            ? " transition-all duration-600 -top-100 delay-400"
            : "top-75 md:top-80",
        )}
      >
        <p className="text-4xl animate-bounce text-primary-foreground italic font-bold">
          You've got mail!
        </p>
      </div>
      <Image
        src={Congrats}
        alt="Background"
        height={5}
        width={300}
        className={cn(
          `absolute flex flex-1 z-100 text-center`,
          openedEnvelope
            ? " transition-all duration-600 top-3 delay-400"
            : "-top-100",
        )}
      />
      {/* Card */}
      <div
        className={cn(
          "flex flex-col flex-1 relative min-w-full min-h-1/2 w-20 bg-green-100 border outline-2 outline-orange-100 rounded-lg justify-center items-center m-auto overflow-hidden",
        )}
      >
        <div
          className={cn(
            "relative flex-1 justify-center items-center flex w-full h-1/2 bg-orange-200 border border-dashed outline-1 outline-orange-700 z-10",
            openedEnvelope
              ? "transform -translate-y-180 transition-all duration-700 delay-200 bottom-100"
              : "bottom-0 overflow-visible",
          )}
        >
          <Button
            variant="outline"
            onClick={() => setOpenEnvelope(!openedEnvelope)}
            className={cn(
              `absolute -bottom-5 h-10 w-20 bg-yellow-900 group-hover:bg-yellow-800 hover:bg-yellow-800 duration-100 transition-all text-sm text-muted-foreground`,
            )}
          >
            <span className="text-white hover:text-white duration-100">
              Open
            </span>
          </Button>
        </div>

        <div
          className={cn(
            `absolute flex flex-1 min-h-1/2 z-100 bg-rose-100 `,
            openedEnvelope
              ? " transition-all duration-600 top-50 delay-400"
              : "-top-200",
          )}
        >
          <div className="text-muted-foreground font-bold text-lg p-5 h-50 m-auto">
            Congrats on another semester!! Doing a great job at being one tough
            cookie 🍪 Keep at it and don't go cuckoo just yet lol. Don't lose
            heart, keep Jesus at the center of it all, He'll bless all your
            efforts, ya know? Good luck to you on your next semester. You got
            this 🥳
          </div>
        </div>
        <div className="relative flex flex-1 h-1/2 w-full bg-red-50 justify-center align-center">
          <div className="bg-blue-50 flex-1">
            <div />
          </div>
          <div className="relative bg-green-50 flex-1"></div>
        </div>
      </div>

      <Image
        src={Brave}
        alt="Background"
        height={200}
        width={200}
        className={cn(
          `
          absolute bottom-0 `,
          openedEnvelope
            ? "transition-all duration-600 -left-100"
            : "left-5 lg:left-30",
        )}
      />

      <Image
        src={HappyDance}
        alt="Background"
        height={200}
        width={200}
        className={cn(
          `
          absolute `,
          openedEnvelope
            ? "block transition-all duration-600 delay-400 bottom-0 right-5 md:right-40 lg:right-75"
            : "right-500",
        )}
      />

      <div
        className={cn(
          `
          absolute bottom-25 md:bottom-15 `,
          openedEnvelope
            ? "transition-all duration-600 delay-400 left-5 md:left-40 lg:left-75 animate-bounce"
            : "-left-100",
        )}
      >
        <p className="text-3xl md:text-4xl font-bold -rotate-20 text-muted-foreground">
          Congratulations
        </p>
        <p className="text-3xl md:text-4xl font-bold -rotate-20 text-muted-foreground">
          Madison!
        </p>
      </div>

      {openedEnvelope && (
        <div className="rain-container ">
          {rain.map((r, i) => (
            <Image
              src={r.src}
              key={i + "hello"}
              width={10}
              height={10}
              alt="property"
              className="drop"
              style={{
                left: r.left,
                animationDelay: r.delay,
                animationDuration: r.duration,

                transform: `rotate(${r.rotate}deg)`,
              }}
            />
          ))}
        </div>
      )}
    </main>
  );
}
