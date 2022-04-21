import Image from "next/image";

export default function History() {
    return (
        <section className="history" id="history">
            <div className="container-lg">
                <Image
                    src="/images/history-header.png"
                    alt="history section header. 01. History."
                    width={244}
                    height={131}
                />
                <p className="history__text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Expedita modi ad nobis beatae quae? Sequi numquam tenetur
                    dignissimos officia voluptates facilis asperiores, incidunt
                    molestiae quaerat quasi dolor illo natus, distinctio eos
                    perferendis beatae ducimus maiores atque sunt ab officiis
                    harum. Similique corrupti inventore vel quidem amet corporis
                    cumque sunt voluptatum?
                </p>
            </div>

            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-touch="true"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active carousel-indicators-button"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        className="carousel-indicators-button"
                        aria-label="Slide 2"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image
                            src="/images/carousel-img-1.png"
                            className="d-block w-100"
                            alt="mountain climber standing on the edge of a rock overlooking a distant mountain range"
                            width={253}
                            height={169}
                        />
                    </div>
                    <div className="carousel-item">
                        <Image
                            src="/images/carousel-img-2.png"
                            className="d-block w-100"
                            alt="foggy setting in a mountainous valley"
                            width={253}
                            height={169}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
