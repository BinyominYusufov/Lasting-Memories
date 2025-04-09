import Image from "next/image";
import img1 from "../../../src/images/terrace1.png";
import img2 from "../../../src/images/terrace2.png";
import img3 from "../../../src/images/terrace3.png";

export default function Section4() {
    return (
        <div
            style={{
                backgroundColor: "#121212",
                color: "#fff",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                position: "relative",
                textAlign: "center",
            }}
        >
            <div style={{ position: "absolute", left: "5%", top: "10%", width: "200px", height: "300px" }}>
                <Image src={img1.src} alt="left" layout="fill" objectFit="cover" />
            </div>

            <div style={{ position: "absolute", right: "5%", top: "10%", width: "200px", height: "150px" }}>
                <Image src={img2.src} alt="right-top" layout="fill" objectFit="cover" />
            </div>

            <div style={{ position: "absolute", right: "5%", bottom: "10%", width: "200px", height: "150px" }}>
                <Image src={img3.src} alt="right-bottom" layout="fill" objectFit="cover" />
            </div>

            <h1 style={{ fontSize: "3rem", fontWeight: "normal", marginBottom: "1rem" }}>terrace</h1>
            <h2 style={{ fontSize: "2rem", fontWeight: "normal", color: "#ccc", marginBottom: "3rem" }}>
                ceremonies & meetings
            </h2>

            <button
                style={{
                    padding: "0.75rem 2rem",
                    border: "1px solid white",
                    borderRadius: "25px",
                    background: "transparent",
                    color: "white",
                    fontSize: "1rem",
                    cursor: "pointer",
                }}
            >
                inspire me
            </button>
        </div>
    );
}
