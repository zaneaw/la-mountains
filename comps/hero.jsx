import Image from "next/image";

export default function Hero() {
    return (
        <div className="hero">
            <Image
                className="hero__bg-image bg"
                src="/images/hero-bg.png"
                alt="mountains"
                width={3304}
                height={1700}
                layout="responsive"
                priority
            />
        </div>
    );
}
