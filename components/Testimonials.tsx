import Image from "next/image";

import Container from "@/components/Container";

import Avatar0 from "@/public/images/avatars/avatar-0.webp";
import Avatar1 from "@/public/images/avatars/avatar-1.webp";
import Avatar2 from "@/public/images/avatars/avatar-2.webp";
import Avatar3 from "@/public/images/avatars/avatar-3.webp";
import Avatar4 from "@/public/images/avatars/avatar-4.webp";

export async function Testimonials() {
  return (
    <div className="text-gray-600 dark:text-gray-300" id="reviews">
      <Container>
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center font-bold text-2xl text-gray-800 md:text-4xl dark:text-white">
            We have some fans.
          </h2>
        </div>
        <div className="gap-8 space-y-8 md:columns-2 lg:columns-3">
          <div className="aspect-auto rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="h-12 w-12 rounded-full"
                src={Avatar0}
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="font-medium text-gray-700 text-lg dark:text-white">Daniella Doe</h6>
                <p className="text-gray-500 text-sm dark:text-gray-300">Mobile dev</p>
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
          <div className="aspect-auto rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="h-12 w-12 rounded-full"
                src={Avatar1}
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="font-medium text-gray-700 text-lg dark:text-white">Jane doe</h6>
                <p className="text-gray-500 text-sm dark:text-gray-300">Marketing</p>
              </div>
            </div>
            <p className="mt-8">
              {" "}
              Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
              cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div className="aspect-auto rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="h-12 w-12 rounded-full"
                src={Avatar2}
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="font-medium text-gray-700 text-lg dark:text-white">Yanick Doe</h6>
                <p className="text-gray-500 text-sm dark:text-gray-300">Developer</p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
              deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero
              voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div className="aspect-auto rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="h-12 w-12 rounded-full"
                src={Avatar3}
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="font-medium text-gray-700 text-lg dark:text-white">Jane Doe</h6>
                <p className="text-gray-500 text-sm dark:text-gray-300">Mobile dev</p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
              deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero
              voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div className="aspect-auto rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="h-12 w-12 rounded-full"
                src={Avatar4}
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="font-medium text-gray-700 text-lg dark:text-white">Andy Doe</h6>
                <p className="text-gray-500 text-sm dark:text-gray-300">Manager</p>
              </div>
            </div>
            <p className="mt-8">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
              deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero
              voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div className="aspect-auto rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
            <div className="flex gap-4">
              <Image
                className="h-12 w-12 rounded-full"
                src={Avatar2}
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="font-medium text-gray-700 text-lg dark:text-white">Yanndy Doe</h6>
                <p className="text-gray-500 text-sm dark:text-gray-300">Mobile dev</p>
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
