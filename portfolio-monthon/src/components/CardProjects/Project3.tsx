import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};

export default function Project3({}: Props) {
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
          src="https://scontent.fbkk29-9.fna.fbcdn.net/v/t1.15752-9/328488462_6010814715629950_1275124513677999328_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEI8ThmRv9VZmy-g8af_Ekuey9L3cLt-G17L0vdwu34bQA3hcan8kVlGysFh4l3Nv_0VwMMJ2QQjU5brDKXa2pW&_nc_ohc=Av43CQ3kzA8AX80B7X1&_nc_ht=scontent.fbkk29-9.fna&oh=03_AdRbA59RPRLYQAzNOmguyCws0r0h95TubBUL_jyS7Xgq9Q&oe=6401EF68"
          className="-mb-0 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-60 md:-9 xl:w-[400px] xl:h-[400px]"
        />

        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">Clone-Netflix</h4>
          <p className=" font-bold text-2xl mt-1">Tool</p>
          <div className="flex space-x-2 my-2">
            <img
              className="h-10 w-10 rounded-full"
              src="data:image/png;base64,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"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full"
              src="https://logospng.org/download/css-3/logo-css-3-2048.png"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full"
              src="https://reactjs.org/logo-og.png"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full"
              src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png"
              alt=""
            />
          </div>
          <p className="uppercase py-5 text-gray-300">
            This project is a simplified front end clone of netflix. It was
            created with React and taliwindcss to learn responsive web
            &nbsp;&nbsp;
            <span className="underline decoration-[#F7AB0A] ">
              Press the icon to view web pages.
            </span>
          </p>

          <ul className="list-disc space-y-5 ml-5 text-lg">
            <li>WORKSHOP</li>
            <SocialIcon
              url="https://clone-nneetflix-devmax.netlify.app/"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://github.com/monthonkachana/clone-netflix"
              fgColor="gray"
              bgColor="transparent"
            />
          
          </ul>
        </div>
      </article>
    </div>
  );
}
