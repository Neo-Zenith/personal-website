import SectionHeader from "../components/SectionHeader/SectionHeader";
import "./About.css";
import profile from "../styles/img/profile.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function About() {
    return (
        <>
            <div className="about-wrapper" id="about">
                <div>
                    <SectionHeader count={"01."} label={"About Me"} />
                    <div className="about-content">
                        <div className="about-text">
                            <span>
                                Hello! My name is Lee Juin, and I am a software
                                engineer with a passion for full-stack
                                development. My journey into software
                                engineering began during my freshman year at
                                university when I became fascinated by the
                                potential of software to solve real-world
                                problems and positively impact people's lives.
                                To me, software engineering is akin to art,
                                where each line of code is like a brushstroke
                                that together turn abstract ideas into reality.
                            </span>
                            <span>
                                I am currently in my final year pursuing a
                                Bachelor's degree in Computer Science at Nanyang
                                Technological University, Singapore. Throughout
                                my learning journey, I have had the privilege of
                                leading and developing software projects at
                                scale using various frameworks such as NodeJS,
                                Python Django, and Java Spring Boot.
                            </span>
                            <span>
                                Currently, I am working as a Software Engineer
                                Intern at{" "}
                                <a
                                    href="https://ocbc.com"
                                    target="__blank"
                                    className="about-highlight"
                                >
                                    OCBC Bank
                                </a>{" "}
                                where I participate in the research and
                                development of innovative digital solutions that
                                transform the banking experience.
                            </span>
                            <span>
                                Here are a few technologies I've been working
                                with recently:
                            </span>
                            <span id="about-tech">
                                <ul className="about-tech-list">
                                    <li>
                                        <PlayArrowIcon
                                            sx={{
                                                fontSize: "1.2rem",
                                                color: "var(--highlight)",
                                            }}
                                        />
                                        Java Spring Boot
                                    </li>
                                    <li>
                                        <PlayArrowIcon
                                            sx={{
                                                fontSize: "1.2rem",
                                                color: "var(--highlight)",
                                            }}
                                        />
                                        RabbitMQ
                                    </li>
                                    <li>
                                        <PlayArrowIcon
                                            sx={{
                                                fontSize: "1.2rem",
                                                color: "var(--highlight)",
                                            }}
                                        />
                                        Docker
                                    </li>
                                </ul>
                                <ul className="about-tech-list">
                                    <li>
                                        <PlayArrowIcon
                                            sx={{
                                                fontSize: "1.2rem",
                                                color: "var(--highlight)",
                                            }}
                                        />
                                        ReactJS
                                    </li>
                                    <li>
                                        <PlayArrowIcon
                                            sx={{
                                                fontSize: "1.2rem",
                                                color: "var(--highlight)",
                                            }}
                                        />
                                        Tailwind CSS
                                    </li>
                                    <li>
                                        <PlayArrowIcon
                                            sx={{
                                                fontSize: "1.2rem",
                                                color: "var(--highlight)",
                                            }}
                                        />
                                        Python Flask
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className="about-img-container">
                            <div className="about-img">
                                <div className="about-img-overlay"></div>
                                <img src={profile} />
                                <div className="about-img-bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
