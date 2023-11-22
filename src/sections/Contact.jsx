import Button from "../components/Button/Button";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import "./Contact.css";

export default function Contact() {
    return (
        <>
            <div className="contact-wrapper" id="contact">
                <div>
                    <SectionHeader count={"04."} label={"Contact"} />
                    <div className="contact-text">
                        Whether you are an enthusiast of innovative projects or
                        share a passion for crafting software solutions, I am
                        more than excited to connect and explore potential
                        collaborations.
                    </div>
                    <div className="contact-button">
                        <Button
                            label={"Contact Me"}
                            cssOverrides={{
                                minWidth: "15rem",
                            }}
                            onClick={() => {
                                window.open(
                                    "mailto://juin.lee@outlook.com",
                                    "_blank"
                                );
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
