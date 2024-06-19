import { useRef, useState } from "react";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import "./Experiences.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function Experiences() {
    const [selection, setSelection] = useState(4);

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
                                Developed a gateway platform for deploying text,
                                video, and audio-based NLP models using NestJS
                                and MongoDB.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Built a CI/CD pipeline on GitHub Actions to
                                perform automated testing and deployment to
                                Docker Hub container registry.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Improved system capacity by implementing Redis
                                cache as a middleware layer and Nginx web server
                                as load-balancer.
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

            case 2: {
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
                                Developed the frontend dashboard for NLPHub
                                using React to enable clients to register and
                                manage NLP services.
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
                                services, offering a comprehensive visualization
                                of the platform's dynamics.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Created Artillery load testing scripts and
                                conducting ad-hoc testing via Postman to ensure
                                robust performance and scalability of the
                                application.
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
                                EC2 to scrap e-commerce product listing data,
                                leveraging Python's multiprocessing library as a
                                MapReduce framework to accelerate the scraping
                                process.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Developed a serverless function on AWS Lambda
                                that transforms Ghana GPS information into a
                                format usable by other downstream applications.
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
                                Built an email template visualizer that
                                transforms inputs from Google Sheets into email
                                templates in HTML, providing immediate
                                visualization of the email layout for the
                                business development team.
                            </li>
                        </ul>
                    </div>
                );
            }

            case 4: {
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
                                Developed an MVP showcasing OCBC Bank's history
                                in VR with 3D artifact models in Apple Vision
                                Pro using Swift.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Led backend development of a virtual avatar
                                banking project using Python Flask, integrating
                                OpenAI GPT API for interactive banking
                                operations.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Created mock microservices in Spring Boot to
                                integrate the Flask backend into the existing
                                Spring microservices ecosystem and facilitated
                                communication between Flask and Spring
                                microservices via RabbitMQ.
                            </li>
                            <li>
                                <PlayArrowIcon
                                    sx={{
                                        fontSize: "1.2rem",
                                        color: "var(--highlight)",
                                    }}
                                />
                                Handled Jira tickets for the React web
                                development team, addressing small features and
                                bug fixes as part of BAU activities.
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
                                    ref={buttonRefs[3]}
                                    onClick={() =>
                                        handleButtonClick(4, buttonRefs[3])
                                    }
                                    className={selection === 4 ? "active" : ""}
                                >
                                    OCBC Bank
                                </button>
                            </li>
                            <li>
                                <button
                                    ref={buttonRefs[2]}
                                    onClick={() =>
                                        handleButtonClick(3, buttonRefs[2])
                                    }
                                    className={selection === 3 ? "active" : ""}
                                >
                                    Proxtera
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
                                    Temasek Lab
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
