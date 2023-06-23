import type { NextPage } from "next";
import Head from "next/head";
import DarkModeToggle from "@components/DarkModeToggle";
import Layout from "@components/Layout";
import { motion } from "framer-motion";
import Image from "next/image";

import { Js } from "styled-icons/fa-brands";
import {
  Amazonaws,
  Docker,
  Github,
  Gitlab,
  Googlecloud,
  Javascript,
  Laravel,
  Nextdotjs,
  Nodedotjs,
  Php,
  ReactLogo,
  Typescript,
  Webflow,
  Wordpress,
  Python,
  Ruby,
  Mysql,
} from "styled-icons/simple-icons";

const Home: NextPage = () => {
  return (
    <Layout
      title={"Vilmar Fonseca | Software Engineer"}
      meta={"The best Software Engineer you could get."}
    >
      <section className="min-h-[768px]">
        <div className="container gap-16 md:gap-10 w-full flex flex-col-reverse md:flex-row justify-between py-[50px] md:py-[100px] ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-4/6 flex flex-col gap-6 md:gap-8 items-center md:items-start"
          >
            <h1 className="font-bold text-5xl md:text-6xl text-center md:text-left">
              Need a Software Engineer?
            </h1>
            <p className="text-lg md:text-xl md:pr-[20%] text-center md:text-left">
              Look no further! I'm working with Web Development for over fives
              years. My expertise is frontend development with frameworks such
              as ReactJS, NextJS and Wordpress.
            </p>
            <a
              href="mailto:vilmarfonsec@gmail.com"
              className="cursor-pointer hover:bg-crimson transition-all duration-200 shadow-lg px-5 py-3 bg-pantone w-full text-center md:max-w-fit rounded-full text-anti-flash-white font-bold"
            >
              Contact Me
            </a>
          </motion.div>
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="shadow-xl bg-white w-full p-5 md:p-10 rounded-lg md:w-[80%] dark:bg-anti-flash-white dark:text-space-coast"
            >
              <div className="shadow-lg flex justify-center mx-auto border-2 border-space-coast w-[200px] rounded-full overflow-hidden">
                <Image
                  src="images/profile.jpg"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex justify-center flex-col items-center mt-4">
                <h2 className="font-bold text-xl">Vilmar Fonseca</h2>
                <h3 className=" opacity-50">Londrina, Brazil</h3>
              </div>

              <div className="flex gap-3 flex-wrap mt-8 justify-center">
                <ReactLogo className="h-5 w-5" />
                <Nextdotjs className="h-5 w-5" />
                <Wordpress className="h-5 w-5" />
                <Webflow className="h-5 w-5" />
                <Nodedotjs className="h-5 w-5" />
                <Mysql className="h-5 w-5" />
                <Laravel className="h-5 w-5" />
                <Github className="h-5 w-5" />
                <Gitlab className="h-5 w-5" />
                <Docker className="h-5 w-5" />
                <Amazonaws className="h-5 w-5" />
                <Googlecloud className="h-5 w-5" />
                <Javascript className="h-5 w-5" />
                <Typescript className="h-5 w-5" />
                <Php className="h-5 w-5" />
                <Python className="h-5 w-5" />
                <Ruby className="h-5 w-5" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
