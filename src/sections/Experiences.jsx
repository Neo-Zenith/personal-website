import { useRef, useState } from "react";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import "./Experiences.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function Experiences() {
    const [selection, setSelection] = useState(3);

    const handleButtonClick = (index, buttonRef) => {
        setSelection(index);

        // If window is less than 768px, scroll to the top of the section
        if (window.innerWidth < 768) {
            buttonRef.current?.scrollIntoView({
                behavior: "smooth",
                inline: "center",
            });
        }
    };

    const experienceConfig = () => {
        switch (selection) {
            case 1: {
                return (
                    <div className="experience-content">
                        <span className="experience-title">
                            Full-stack Software Developer Intern{" "}
                            <a
                                href="https://www.ntu.edu.sg/temasek-labs"
                                target="__blank"
                                className="experience-highlight"
                            >
                                @ Temasek Lab
                            </a>
                        </span>
                        <span className="experience-time">
                            May 2023 - Dec 2023
                        </span>
                        <ul className="experience-text">
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Developed NLPHub, a centralized gateway for
                                deploying text, video, and audio-based NLP
                                models, using React as frontend, NestJS as
                                backend and MongoDB as database.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Improved deployment speed by 30% by establishing
                                a CI/CD pipeline on GitHub Actions to
                                compartmentalize testing, building, and
                                deployment to Docker Hub.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Implemented service-level caching with Redis,
                                improved system responsiveness and reduced
                                response time by 45%.
                            </li>
                        </ul>
                    </div>
                );
            }

            case 2: {
                return (
                    <div className="experience-content">
                        <span className="experience-title">
                            Software Engineer Intern{" "}
                            <a
                                href="https://proxtera.com"
                                target="__blank"
                                className="experience-highlight"
                            >
                                @ Proxtera
                            </a>
                        </span>
                        <span className="experience-time">
                            Jan 2024 - Apr 2024
                        </span>
                        <ul className="experience-text">
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Created a Selenium web scraper deployed on AWS
                                EC2, accelerating the scraping process by 40%
                                using MapReduce paradigm with Python's
                                multiprocessing library.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Developed a serverless function on AWS Lambda to
                                transform Ghana GPS information for downstream
                                applications.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Built a PDF generator micro backend in
                                Express.js for dynamic document generation
                                (orders, quotations, POs).
                            </li>
                        </ul>
                    </div>
                );
            }

            case 3: {
                return (
                    <div className="experience-content">
                        <span className="experience-title">
                            Software Engineer Intern{" "}
                            <a
                                href="https://proxtera.com"
                                target="__blank"
                                className="experience-highlight"
                            >
                                @ OCBC Bank
                            </a>
                        </span>
                        <span className="experience-time">
                            May 2024 - Present
                        </span>
                        <ul className="experience-text">
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Contributed to the development and maintenance
                                of the UI component library used throughout the
                                mobile banking app and website using React and
                                Tailwind CSS.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Developed the backend for a mobile banking
                                assistant using Flask and MongoDB, leveraging
                                LLM-as-a-service such as OpenAI GPT tool calls,
                                Microsoft Azure text-to-speech and avatar
                                generation for interactive banking experience.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Built Spring Boot microservices and integrate
                                with the Flask backend using RabbitMQ as message
                                broker.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Collaborated in debugging issues across multiple
                                microservices, using Elasticsearch and Kibana to
                                identify and resolve system-critical issues
                                raised in UAT.
                            </li>
                        </ul>
                    </div>
                );
            }
        }
    };

    const buttonRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    return (
        <>
            <div className="experiences-wrapper" id="experiences">
                <div>
                    <SectionHeader label={"Experiences"} count={"02."} />
                    <div className="experiences-content">
                        <ul className="experiences-selection">
                            <li>
                                <button
                                    ref={buttonRefs[2]}
                                    onClick={() =>
                                        handleButtonClick(3, buttonRefs[2])
                                    }
                                    className={selection === 3 ? "active" : ""}
                                >
                                    OCBC Bank
                                </button>
                            </li>
                            <li>
                                <button
                                    ref={buttonRefs[1]}
                                    onClick={() =>
                                        handleButtonClick(2, buttonRefs[1])
                                    }
                                    className={selection === 2 ? "active" : ""}
                                >
                                    Proxtera
                                </button>
                            </li>
                            <li>
                                <button
                                    ref={buttonRefs[0]}
                                    onClick={() =>
                                        handleButtonClick(1, buttonRefs[0])
                                    }
                                    className={selection === 1 ? "active" : ""}
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
