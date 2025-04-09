import Image from "next/image";
import image from "../../../src/images/drt.png"; 

export default function Section6() {
    return (
        <div className="p-[100px]" style={{ display: "flex", minHeight: "100vh" }}>
            <div style={{ flex: 1, position: "relative" }}>
                <Image
                    src={image.src}
                    alt="Dealer marble"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            <div
                style={{
                    flex: 1,
                    padding: "4rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: "white",
                }}
            >
                <h1 style={{ fontSize: "3rem", lineHeight: "1", marginBottom: "1rem" }}>
                    become <br /> a dealer
                </h1>
                <p style={{ maxWidth: "350px", marginBottom: "2rem", color: "#333" }}>
                    Do you want to become a Joli retailer? Please submit the following form and we will contact you!
                </p>
                <button
                    style={{
                        padding: "0.75rem 2rem",
                        border: "1px solid black",
                        background: "white",
                        borderRadius: "25px",
                        fontSize: "1rem",
                        cursor: "pointer",
                        width: "150px",
                    }}
                >
                    learn more
                </button>
            </div>
        </div>
    );
}
