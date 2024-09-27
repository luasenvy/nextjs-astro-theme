import Image from "next/image";

import Container from "./Container";

import avatar0 from "@/public/images/avatars/avatar-0.webp";
import avatar1 from "@/public/images/avatars/avatar-1.webp";
import avatar2 from "@/public/images/avatars/avatar-2.webp";
import avatar3 from "@/public/images/avatars/avatar-3.webp";
import avatar4 from "@/public/images/avatars/avatar-4.webp";

export default function Testimonials() {
  return (
    <div className="text-gray-600 dark:text-gray-300 -mt-28 pt-28" id="testimonials">
      <Container>
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            We have some fans.
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src={avatar0}
                alt="user avatar"
                width="400"
                height="400"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae
              quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a
              suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
              cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src={avatar1}
                alt="user avatar"
                width="200"
                height="200"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p>
              </div>
            </div>
            <p className="mt-8">
              {" "}
              Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
              cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src={avatar2}
                alt="user avatar"
                width="200"
                height="200"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanick Doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
              deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero
              voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src={avatar3}
                alt="user avatar"
                width="200"
                height="200"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane Doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
              deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero
              voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src={avatar4}
                alt="user avatar"
                width="200"
                height="200"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Andy Doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Manager</p>
              </div>
            </div>
            <p className="mt-8">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
              deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero
              voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="w-12 h-12 rounded-full"
                src={avatar2}
                alt="user avatar"
                width="400"
                height="400"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanndy Doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
              deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero
              voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
