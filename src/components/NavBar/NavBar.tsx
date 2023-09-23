import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "src/assets/logo-black.png";
import "./NavBar.scss";
import { Inter, Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"] });

const links = [
  {
    id: 0,
    title: "Home",
    url: "/",
  },
  {
    id: 1,
    title: "Characters",
    url: "/characters",
  },
  {
    id: 2,
    title: "Locations",
    url: "/locations",
  },
  {
    id: 3,
    title: "Episodes",
    url: "/episodes",
  },
];
const NavBar = () => {
  return (
    <header className={`${karla.className} header`}>
      <nav className="nav wrapper">
        <Link href="/">
          <Image
            className="link-logo"
            src={logo}
            alt="logo"
            width={46}
            height={49}
          />
        </Link>
        <ul className="nav__list">
          {links.map((link) => (
            <li className="link" key={link.id}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
