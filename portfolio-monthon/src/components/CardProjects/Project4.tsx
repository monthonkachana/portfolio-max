import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Project4({}: Props) {
  return (
    <div>
      <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t1.15752-9/328691648_912153923312738_7034687420652406518_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeG-uwqK8WKPFhOHQZO97OCsK-dY4F7fS40r51jgXt9LjStNBP-KuuWM3DhRx7vKaItYumNO-iv3VvIV8PdDLqwr&_nc_ohc=Jic_tqUEw1gAX-fiEWB&_nc_ht=scontent.fbkk29-1.fna&oh=03_AdT1GTNKdCmt0Mqg0amwdPtD80GsMVIYccm-0rMkx2jFBw&oe=640213DA"
          className="-mb-0 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-60 md:-9 xl:w-[400px] xl:h-[400px]"
        />

        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">CROUD-MongoDB</h4>
          <p className=" font-bold text-2xl mt-1">Tool</p>
          <div className="flex space-x-2 my-2">
            <img
              className="h-10 w-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySLJ4gKWqyxpa4p9_Hd5bo6ZVzFoZQA_tYA&usqp=CAU"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySLJ4gKWqyxpa4p9_Hd5bo6ZVzFoZQA_tYA&usqp=CAU"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
              alt=""
            />
          </div>
          <p className="uppercase py-5 text-gray-300">
            Stop My Projectgfdygdfghfghf dsfgsdfgdsfgdfsgdfsgdfsgfdg
            sdfgsdfgsdfgdsfgdsfgdsdfgsdfggfdsgfdsgdsfgsdfgdsfg
            sdfgfdgdsgrggggggggggggfg --- Ended...
          </p>

          <ul className="list-disc space-y-5 ml-5 text-lg">
            <li>PROJECT</li>
            <li>PROJECT</li>
            <li>PROJECT</li>
          </ul>
        </div>
      </article>
    </div>
  );
}
