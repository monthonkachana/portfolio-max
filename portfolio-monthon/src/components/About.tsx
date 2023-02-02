import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.15752-9/327899113_1286061472251026_4728233628547692345_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEcELXY10ylZc4mAHBuiBt45e_qkQSmczbl7-qRBKZzNmTX82PJhS-nxHsPqJiQv9pvztExmyJwxultfAQLIfzL&_nc_ohc=v1GBji3W0UsAX-JPHZE&_nc_ht=scontent.fbkk22-2.fna&oh=03_AdTWRYIwdFRtDeb_UR2vHbnC_HuggGoIn894CRi1K5FZUg&oe=63FB27DF"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:-95 xl:w-[500px] xl:h-[600px]"
      />
      {/* {""} คือ เว้นวรรค ts */}
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a {""}
          <span className="underline decoration-[#F7AB0A]">little</span>
          {""} background
        </h4>
        <p className="text-base">
          i am max you might al so know me as papa reacr ! i; ll be your coach
          memtor inside the papadam here;s a little bit abour me/// i ve been
          coding for over 10year now as a full stack developer i ve worked both
          with startups and large corpotaion to help{" "}
        </p>
      </div>
    </motion.div>
  );
}
