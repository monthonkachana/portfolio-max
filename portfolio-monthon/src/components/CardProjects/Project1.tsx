import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Project1({}: Props) {
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
          className="-mb-0 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-60 md:-9 xl:w-[400px] xl:h-[400px]"
        src="https://scontent.fbkk29-6.fna.fbcdn.net/v/t1.15752-9/327949892_1466930427172091_9188202228791229443_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEnGsbiknsfXHhhlg3G9vic8kej7-4F2ozyR6Pv7gXajFGMeyaJ03q-t1oGlPmi5RE1qc9w_tqQGgz3dJXU3V5K&_nc_ohc=ieZAjPWKue4AX_tgToN&_nc_oc=AQlD4U4MwLAO3EjiOfMqUHb7CpJmCjVkX-X34yyRV-LmUZ1swoxoEhLfbpQBg1Jitujyt9rLR7z4ipvZyn6pH1h5&_nc_ht=scontent.fbkk29-6.fna&oh=03_AdR0eYtDX_wmvJ84oDrxMD1Syy8Y2Qad3YzP5K0Ax0JyOg&oe=64020F63"
          alt=""
        />

        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">E-Commerce-Mern-Stack</h4>
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
