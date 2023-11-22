import "./Hero.css";

export default function Hero() {
    return (
        <>
            <div className="hero-wrapper">
                <div>
                    <span className="hero-pretext">Hi! My name is</span>
                    <span className="hero-title1">Lee Juin</span>
                    <span className="hero-title2">
                        Software Engineer Intern{" "}
                        <span style={{ color: "var(--highlight)" }}>
                            @ Temasek Lab
                        </span>
                    </span>
                    <span className="hero-subtitle">
                        I build user-centric software solutions that deliver
                        seamless digital experiences for everyone.
                    </span>
                </div>
            </div>
        </>
    );
}
