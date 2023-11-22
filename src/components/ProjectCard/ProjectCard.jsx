import "./ProjectCard.css";
import github from "../../styles/icons/github.svg";

export default function ProjectCard({
    isLeft,
    title,
    bgImg,
    content,
    repoLink,
    tech,
}) {
    const projectConfig = () => {
        if (isLeft) {
            return (
                <>
                    <div className="project-img">
                        <div className="project-img-overlay"></div>
                        <img src={bgImg} />
                    </div>
                    <div className="project-content left">
                        <span className="project-header">Featured Project</span>
                        <span className="project-title left">{title}</span>
                        <div className="project-description">
                            <span className="project-text left">{content}</span>
                        </div>
                        <div className="project-tech-list">
                            {tech.map((t, idx) => {
                                return (
                                    <span key={idx} className="project-tech">
                                        {t}
                                    </span>
                                );
                            })}
                        </div>
                        <div className="project-src">
                            <a href={repoLink} target="__blank">
                                <img className="project-src-img" src={github} />
                            </a>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="project-content right">
                        <span className="project-header">Featured Project</span>
                        <span className="project-title right">{title}</span>
                        <div className="project-description">
                            <span className="project-text right">
                                {content}
                            </span>
                        </div>
                        <div className="project-tech-list">
                            {tech.map((t, idx) => {
                                return (
                                    <span key={idx} className="project-tech">
                                        {t}
                                    </span>
                                );
                            })}
                        </div>
                        <div className="project-src">
                            <a href={repoLink} target="__blank">
                                <img className="project-src-img" src={github} />
                            </a>
                        </div>
                    </div>
                    <div className="project-img">
                        <div className="project-img-overlay"></div>
                        <img src={bgImg} />
                    </div>
                </>
            );
        }
    };

    return (
        <>
            <div className="project-wrapper">{projectConfig()}</div>
        </>
    );
}
