import { useRef, useState } from "react";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import "./Experiences.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function Experiences() {
    const [selection, setSelection] = useState(1);
    const ref = useRef(null);

    const handleScroll = () => {
        ref.current?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const experienceConfig = () => {
        switch (selection) {
            case 1: {
                return (
                    <div className="experience-content">
                        <span className="experience-title">
                            Frontend SWE Intern{" "}
                            <a
                                href="https://www.ntu.edu.sg/temasek-labs"
                                target="__blank"
                                className="experience-highlight"
                            >
                                @ Temasek Lab
                            </a>
                        </span>
                        <span className="experience-time">
                            Sep 2023 - Dec 2023
                        </span>
                        <ul className="experience-text">
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Tasked with developing the NLPHub frontend
                                dashboard using React and Material-UI to
                                facilitate registration and management of NLP
                                services by administrators, ensuring streamlined
                                accessibility for users.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Utilized Chart.js to build interactive charts
                                that highlight key platform metrics, including
                                historical query data, top users based on
                                request frequency, and the most utilized
                                services.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Constructed a React Redux store for
                                comprehensive state management and implemented
                                optimized API calls using custom React hooks.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Created Artillery load testing scripts and
                                conducting ad-hoc testing via Postman to verify
                                the system's capability to sustain a load of up
                                to 3000 concurrent users.
                            </li>
                        </ul>
                    </div>
                );
            }

            case 2: {
                return (
                    <div className="experience-content">
                        <span className="experience-title">
                            Backend SWE Intern{" "}
                            <a
                                href="https://www.ntu.edu.sg/temasek-labs"
                                target="__blank"
                                className="experience-highlight"
                            >
                                @ Temasek Lab
                            </a>
                        </span>
                        <span className="experience-time">
                            May 2023 - Aug 2023
                        </span>
                        <ul className="experience-text">
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Developed and maintained NLPHub, a centralized
                                gateway for deploying text, video, and
                                audio-based NLP models, using TypeScript Nest.js
                                as backend framework and MongoDB as database
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Established a streamlined CI/CD pipeline on
                                GitHub Actions using separate workflow files to
                                compartmentalize testing, building, and
                                deployment processes.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Implemented Redis caching strategy resulting in
                                a significant enhancement of system performance,
                                reducing response times by 45%, optimizing
                                resource utilization, and improving overall
                                system responsiveness.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Adopted Test Driven Development (TDD) practice
                                and wrote unit tests using Jest that achieved a
                                90% test coverage.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Containerized the system using Docker and
                                utilized Docker Hub for image registry and
                                version control.
                            </li>
                        </ul>
                    </div>
                );
            }
        }
    };

    return (
        <>
            <div className="experiences-wrapper" id="experiences">
                <div>
                    <SectionHeader label={"Experiences"} count={"02."} />
                    <div className="experiences-content">
                        <ul className="experiences-selection">
                            <li>
                                <button
                                    ref={ref}
                                    onClick={(e) => {
                                        setSelection(1);
                                        handleScroll();
                                    }}
                                    className={selection === 1 ? "active" : ""}
                                >
                                    Temasek Lab
                                </button>
                            </li>
                            <li>
                                <button
                                    ref={ref}
                                    onClick={() => {
                                        setSelection(2);
                                        handleScroll();
                                    }}
                                    className={selection === 2 ? "active" : ""}
                                >
                                    Temasek Lab
                                </button>
                            </li>
                        </ul>
                        {experienceConfig()}
                    </div>
                </div>
            </div>
        </>
    );
}
