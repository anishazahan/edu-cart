import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import frontendDevelopment from "../../src/assets/img/frontend-development.png";
import nextJsImg from "../../src/assets/img/next-js.png";
import nodeJs from "../../src/assets/img/node-js.png";
import uiUX from "../../src/assets/img/ui-ux.png";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getImageByTitle(title) {
  const titleToImageMap = {
    "Next JS beginner to advance": nextJsImg,
    "UI/UX design": uiUX,
    "Node.js crash course": nodeJs,
    "Frontend Development": frontendDevelopment,
  };

  return titleToImageMap[title] || null;
}
