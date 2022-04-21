import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer bg">
            <div className="footer__div container-lg">
                <a href="#" className="hover-prop">
                    <Image src="/images/logo.png" alt="logo" width={50} height={50}/>
                    <Image
                        src="/images/logo-text.png"
                        alt="los angeles mountains"
                        width={110}
                        height={43}
                    />
                </a>
                <span>Copyright 2022. All rights reserved</span>
            </div>
        </footer>
    );
}