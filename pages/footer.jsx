import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer bg">
            <div className="footer__div container-lg">
                <Link href="#">
                    <a className="hover-prop">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width={50}
                            height={50}
                        />
                        {/* Not sure why below image is coming out pixelated... */}
                        <Image
                            src="/images/logo-text.png"
                            alt="logo text, Los Angeles Mountains"
                            width={110}
                            height={43}
                        />
                    </a>
                </Link>
                <span>Copyright 2022. All rights reserved</span>
            </div>
        </footer>
    );
}
