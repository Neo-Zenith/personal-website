import { useState } from "react";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import "./Experiences.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function Experiences() {
    const [selection, setSelection] = useState(1);

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
                                Work with React and Material-UI to develop a
                                responsive dashboard web application that
                                connects to the NLP gateway platform.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Construct a React Redux store to handle
                                application state and persistent data and
                                streamline API calling with React hooks.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Write Artillery load testing scripts and perform
                                ad-hoc testing with Postman to ensure support
                                for up to 3000 concurrent users.
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
                                Developed and maintained the codebase for an NLP
                                gateway platform using TypeScript NestJS and
                                MongoDB.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Accelerated the development process by up to 15%
                                through the establishment of a CI/CD pipeline
                                using GitHub Actions that performs automated
                                testing using Jest and deployment to Azure VM
                                using Nginx as reverse proxy and load balancer.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Explored and implemented microservice
                                architecture principles while working on the
                                development of OAuth features.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Containerized Redis with Docker to improve
                                system performance by optimizing data caching
                                and retrieval
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
                                    onClick={(e) => setSelection(1)}
                                    className={selection === 1 ? "active" : ""}
                                >
                                    Temasek Lab
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setSelection(2)}
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
