import React from "react";
import { AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai";
import { LuBaggageClaim } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

export const rightLinks = [
  {
    id: 1,
    url: "/tickets",
    title: "بلیط",
    icon: <IoIosArrowDown />,
  },
  {
    id: 2,
    url: "/residence",
    title: "اقامت",
    icon: <IoIosArrowDown />,
  },
  {
    id: 3,
    url: "/tour",
    title: "تور",
  },
  {
    id: 4,
    url: "/more",
    title: "بیشتر",
    icon: <IoIosArrowDown />,
  },
];

export const leftLinks = [
  {
    id: 1,
    url: "/support",
    title: "مرکز پشتیبانی آنلاین",
    icon: <AiOutlineQuestionCircle />,
  },
  {
    id: 2,
    url: "/trips",
    title: "سفرهای من",
    icon: <LuBaggageClaim />,
  },
  {
    id: 3,
    url: "/login",
    title: "ورود یا ثبت نام",
    icon: <AiOutlineUser />,
  },
];
