"use client";

import Image from "next/image";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 bg-[#fefefefe] dark:bg-gray-900">
        {/* header */}
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-200">
              developedbypk
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* hero */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              John Doe
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
              Full Stack Developer and Tech Enthusiast
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <Link href="#">
              <AiFillTwitterCircle />
            </Link>
            <Link href="#">
              <AiFillLinkedin />
            </Link>
            <Link href="#">
              <AiFillYoutube />
            </Link>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
            <Image
              src={deved}
              alt={"developer-image.png"}
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        {/* body */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
              Since the beginning of my journey as a freelance developer, I've
              done remote work for{" "}
              <span className="text-teal-500">agencies</span> consulted for{" "}
              <span className="text-teal-500">statups</span> and collaborated
              with talented people to create digital products for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={design}
                alt={"design.png"}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your naeeds following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={code}
                alt={"design.png"}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your naeeds following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={consulting}
                alt={"design.png"}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your naeeds following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>

        {/* services */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
              Since the beginning of my journey as a freelance developer, I've
              done remote work for{" "}
              <span className="text-teal-500">agencies</span> consulted for{" "}
              <span className="text-teal-500">statups</span> and collaborated
              with talented people to create digital products for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt={"web1.png"}
                className="rounded-lg"
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt={"web2.png"}
                className="rounded-lg"
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt={"web3.png"}
                className="rounded-lg"
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                alt={"web5.png"}
                className="rounded-lg"
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt={"web4.png"}
                className="rounded-lg"
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                alt={"web6.png"}
                className="rounded-lg"
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
