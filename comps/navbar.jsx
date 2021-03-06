import Image from "next/image";
import Link from "next/link";

export default function Header({ scrollActive }) {
    return (
        <header className="header">
            <div
                className={`nav__container ${
                    scrollActive && "scrolling-active"
                }`}
            >
                <nav className="nav container-lg">
                    <Link href="#">
                        <a className="nav__logo hover-prop">
                            <Image
                                className="nav__image"
                                src="/images/logo.png"
                                alt="logo"
                                width={50}
                                height={50}
                            />
                            {/* Have to disable and use reg img tag because of default styling added */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="nav__image-text"
                                src="/images/logo-text-transparent.png"
                                alt="logo text, Los Angeles Mountains"
                                width={110}
                                height={43}
                            />
                        </a>
                    </Link>
                    <ul className="nav__list">
                        <li className="nav__list-item hover-prop">
                            <Link href="#history">
                                <a className="nav__list-link header-font">
                                    01. History
                                </a>
                            </Link>
                        </li>
                        <li className="nav__list-item hover-prop">
                            <Link href="#team">
                                <a className="nav__list-link header-font">
                                    02. Team
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
