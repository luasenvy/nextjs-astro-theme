"use client";

import { useState } from "react";

import Container from "@/components/Container";

const links = [
  {
    to: "/#features",
    label: "Features",
  },
  {
    to: "/#stats",
    label: "Solution",
  },
  {
    to: "/#testimonials",
    label: "Reviews",
  },
  {
    to: "https://github.com/Tailus-UI/astro-theme",
    label: "Astro Version",
  },
];

export function AppHeader() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <header>
      <nav
        id="nav"
        className="group absolute z-10 w-full border-black/5 border-b lg:border-transparent dark:border-white/5"
        data-state={isToggled ? "active" : ""}
      >
        <Container>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-fit">
              <a href="/#home" aria-label="logo" className="flex items-center space-x-2">
                <div aria-hidden="true" className="flex space-x-1">
                  <div className="size-4 rounded-full bg-gray-900 dark:bg-white"></div>
                  <div className="h-6 w-2 bg-primary"></div>
                </div>
                <span className="font-bold text-2xl text-gray-900 dark:text-white">Astrolus</span>
              </a>

              <div className="relative flex max-h-10 items-center lg:hidden">
                <button
                  aria-label="humburger"
                  id="hamburger"
                  className="-mr-6 relative p-6 duration-300 active:scale-95"
                  onClick={() => setIsToggled((prev) => !prev)}
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 origin-top rounded-sm bg-gray-950 transition duration-300 group-data-[state=active]:translate-y-1.5 group-data-[state=active]:rotate-45 dark:bg-white"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="group-data-[state=active]:-translate-y-1 group-data-[state=active]:-rotate-45 m-auto mt-2 h-0.5 w-5 origin-bottom rounded-sm bg-gray-950 transition duration-300 dark:bg-white"
                  ></div>
                </button>
              </div>
            </div>
            <div
              id="navLayer"
              aria-hidden="true"
              className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 group-data-[state=active]:origin-top group-data-[state=active]:scale-y-100 lg:hidden dark:bg-gray-950/70"
            ></div>
            <div
              id="navlinks"
              className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 group-data-[state=active]:visible group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 lg:visible lg:relative lg:flex lg:w-fit lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:group-data-[state=active]:translate-y-0 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:dark:bg-transparent"
            >
              <div className="w-full text-gray-600 lg:w-auto lg:pt-0 lg:pr-4 dark:text-gray-200">
                <div
                  id="links-group"
                  className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm"
                >
                  {links.map((link, i) => (
                    <a
                      key={`link-${i}`}
                      href={link.to}
                      className="block transition hover:text-primary md:px-4 dark:hover:text-white"
                      onClick={() => setIsToggled((prev) => !prev)}
                    >
                      <span>{link.label}</span>
                    </a>
                  ))}
                  <a
                    href="https://tailtips.dev"
                    target="_blank"
                    className="flex gap-2 font-semibold text-gray-700 transition hover:text-primary md:px-4 dark:text-white dark:hover:text-white"
                  >
                    <span>TailwindCSS Tips</span>
                    <span className="flex rounded-full border bg-primary/20 px-2 py-0.5 text-purple-700 text-xs tracking-wider dark:bg-white/10 dark:text-orange-300">
                      New
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-12 lg:mt-0">
                <a
                  href="/register"
                  className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative font-semibold text-sm text-white"> Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
