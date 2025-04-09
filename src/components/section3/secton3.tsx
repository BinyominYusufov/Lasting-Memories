import Image from "next/image";
import image from "../../../src/images/image345.png"


export default function Section3() {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <div style={{ flex: 1, padding: "4rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h1 style={{ fontSize: "3rem", lineHeight: "1" }}>
                    find <br /> a dealer
                </h1>
                <p style={{ marginTop: "1.5rem", maxWidth: "300px" }}>
                    We work together with dealers in 19 countries, all over the world. Find out which one is closest to you.
                </p>
                <input
                    type="text"
                    placeholder="Your location"
                    style={{
                        marginTop: "2rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        width: "250px",
                    }}
                />
                <button
                    style={{
                        marginTop: "1rem",
                        padding: "0.5rem 1.5rem",
                        border: "1px solid black",
                        background: "white",
                        borderRadius: "25px",
                        cursor: "pointer",
                        width: "120px",
                    }}
                >
                    search
                </button>
            </div>
            <div style={{ flex: 1, position: "relative" }}>
                <Image
                    src={image.src}
                    alt="marble background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
        </div>
    );
}
