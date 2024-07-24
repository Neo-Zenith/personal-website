import ProjectCard from "../components/ProjectCard/ProjectCard";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import "./Projects.css";
import jobwise from "../styles/img/repo-cards/jobwise.png";
import findr from "../styles/img/repo-cards/findr.png";
import ases from "../styles/img/repo-cards/ases.png";
import textsentiment from "../styles/img/repo-cards/textsentiment.png";
import quickmafs from "../styles/img/repo-cards/quickmafs.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Projects() {
    return (
        <>
            <div className="projects-wrapper" id="projects">
                <div>
                    <SectionHeader count={"03."} label={"Projects"} />
                    <div className="projects-list">
                        <ProjectCard
                            bgImg={jobwise}
                            isLeft={true}
                            title={"JobWise"}
                            content={
                                "A job application tracker that tracks LinkedIn job applications and provides tailored resume analysis, feedback and scoring. "
                            }
                            tech={[
                                "React",
                                "Spring Boot",
                                "Azure",
                                "PostgreSQL",
                                "Google Gemini",
                            ]}
                            repoLink={
                                "https://github.com/Neo-Zenith/sc4052-job-application-tracker"
                            }
                        />
                        <ProjectCard
                            bgImg={quickmafs}
                            isLeft={false}
                            title={"QuickMafs"}
                            content={
                                " A LLM-integrated code generator for embedded convex optimization, addressing the challenges engineers face in translating complex mathematical expressions with convex objectives into efficient C code for embedded devices."
                            }
                            tech={[
                                "React",
                                "Material UI",
                                "Express.js",
                                "Azure",
                                "GPT-4",
                            ]}
                            repoLink={"https://github.com/Neo-Zenith/quickmafs"}
                        />
                        <ProjectCard
                            bgImg={findr}
                            isLeft={true}
                            title={"FindR: E-Commerce Price Comparison Web App"}
                            content={
                                "A web app that provides a unified channel for online shoppers to compare product prices with just a single search. User may search, sort and filter items based on their prices, ratings and available platforms. User may also create and modify wishlist items and get recommended items based on search patterns."
                            }
                            tech={["React", "Django", "PostgreSQL", "Azure"]}
                            repoLink={
                                "https://github.com/Neo-Zenith/sc2006-findr"
                            }
                        />
                        <ProjectCard
                            bgImg={ases}
                            isLeft={false}
                            title={"aSES: Automated Student Engagement System"}
                            content={
                                "A hackathon project that dynamically detects the engagement level of students based on eye aspect ratio (EAR)."
                            }
                            tech={["Django", "OpenCV", "Sqlite", "Chart.js"]}
                            repoLink={
                                "https://github.com/Neo-Zenith/ases-automated-student-engagement-system"
                            }
                        />
                        <ProjectCard
                            bgImg={textsentiment}
                            isLeft={true}
                            title={"Text Message Sentiment Analyzer"}
                            content={
                                "A web app that analyzes the sentiment of text messages using natural language processing (NLP) models such as logistic regression, naive bayes, and support vector machines. User may enter a text message and obtain the percentage distribution of 6 different emotions."
                            }
                            tech={[
                                "Python",
                                "Jupyter",
                                "Streamlit",
                                "Scikit-learn",
                            ]}
                            repoLink={
                                "https://github.com/Neo-Zenith/text-message-sentiment-analyzer"
                            }
                        />
                    </div>
                    <div className="projects-link">
                        <a
                            href="https://github.com/Neo-Zenith?tab=repositories"
                            target="__blank"
                        >
                            <div className="projects-link-icon">
                                <ArrowForwardIcon
                                    sx={{
                                        color: "var(--highlight)",
                                        fontSize: "1.8rem",
                                    }}
                                />
                            </div>
                            View All Projects
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
