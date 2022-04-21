import Image from "next/image";

export default function Header() {
    return (
        <header className="header">
            <div className="nav__container">
                <nav className="nav container-lg">
                    <a href="#" className="nav__logo hover-prop">
                        <Image
                            className="nav__image"
                            src="/images/logo.png"
                            alt="logo"
                            width={50}
                            height={50}
                        />
                        <Image
                            className="nav__image-text"
                            src="/images/logo-text-transparent.png"
                            alt="logo text, Los Angeles Mountains"
                            width={110}
                            height={50}
                        />
                    </a>
                    <ul className="nav__list">
                        <li className="nav__list-item hover-prop">
                            <a
                                className="nav__list-link header-font"
                                href="#history"
                            >
                                01. History
                            </a>
                        </li>
                        <li className="nav__list-item hover-prop">
                            <a
                                className="nav__list-link header-font"
                                href="#team"
                            >
                                02. Team
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
