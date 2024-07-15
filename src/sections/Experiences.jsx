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
                                Developed NLPHub dashboard using React and
                                Material UI, consolidating the deployment of NLP
                                models from 3 platforms into a centralized
                                gateway.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Implemented Redis caching and containerized the
                                NestJS backend using Docker and Docker Hub for
                                version control, reducing response times by 45%
                                and improving deployment efficiency
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Conducted load testing with Artillery and
                                Postman, ensuring system robustness for up to
                                3000 concurrent users, and implemented unit
                                testing with Jest to achieve 90% test coverage.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Established a CI/CD pipeline on GitHub Actions,
                                and deployed to the Azure cloud platform,
                                reducing deployment times by 30% and
                                streamlining the build, test, and deployment
                                processes
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
                                Created a Selenium web scraper on AWS EC2,
                                accelerating the scraping process by 40% using
                                Python's multiprocessing library and MapReduce.
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
                                applications, enhancing data processing
                                efficiency
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Created a PDF generator microservice in
                                JavaScript that dynamically generates product
                                orders, quotation forms, and purchase orders
                                based on user input details.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Built a PDF generator microservice in Express.js
                                for dynamic document generation (orders,
                                quotations, POs).
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Developed a real-time HTML email template
                                generator from Google Sheets inputs for
                                immediate layout visualization, reducing email
                                template creation time by 50%.
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
                                Assisted in the development and maintenance of a
                                core UI component library used throughout the
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
                                Participated in the backend development of a
                                virtual avatar banking project using Flask and
                                MongoDB, integrating OpenAI GPT API for
                                interactive banking operations.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Explored developing polyglot microservices to
                                integrate the Flask backend with Java Spring
                                Boot and facilitating communication via
                                RabbitMQ.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Built a prototype VR app showcasing OCBC Bank's
                                history in Apple Vision Pro using Swift.
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
