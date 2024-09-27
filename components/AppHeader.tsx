"use client";

import "./AppHeader.css";

import classnames from "classnames";
import Link from "next/link";
import { useState } from "react";

import Container from "./Container";

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
];

export default function Header() {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <header>
      <nav className="fixed z-10 bg-white/70 backdrop-blur-2xl w-full border-b border-black/5 dark:border-white/5">
        <Container>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <Link href="/#home" aria-label="logo" className="flex items-center space-x-2">
                <div aria-hidden="true" className="flex space-x-1">
                  <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                  <div className="h-6 w-2 bg-primary"></div>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">Astrolus</span>
              </Link>

              <div className="relative flex max-h-10 items-center lg:hidden">
                <button
                  aria-label="humburger"
                  id="hamburger"
                  className={classnames("relative -mr-6 p-6", { toggled: isShow })}
                  onClick={() => setIsShow((prev) => !prev)}
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                  ></div>
                </button>
              </div>
            </div>
            <div
              id="navLayer"
              aria-hidden="true"
              className={classnames(
                "fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden",
                { "origin-top": isShow, "scale-y-100": isShow }
              )}
            ></div>
            <div
              id="navlinks"
              className={classnames(
                "invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none",
                {
                  "!visible": isShow,
                  "!scale-100": isShow,
                  "!opacity-100": isShow,
                  "!lg:translate-y-0": isShow,
                }
              )}
            >
              <div className="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
                <ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                  {links.map((link, i) => (
                    <li key={i} onClick={() => setIsShow((prev) => !prev)}>
                      <Link
                        href={link.to}
                        className="hover:text-primary block transition dark:hover:text-white md:px-4"
                      >
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="#latests"
                      className="flex gap-2 font-semibold text-gray-700 transition hover:text-primary dark:text-white dark:hover:text-white md:px-4"
                    >
                      <span>Latests</span>
                      <span className="flex rounded-full bg-primary/20 px-1.5 py-0.5 text-xs tracking-wider text-purple-700 dark:bg-white/10 dark:text-orange-300">
                        {" "}
                        new
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-12 lg:mt-0">
                <Link
                  href="#call-to-action"
                  className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-sm font-semibold text-white"> Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
