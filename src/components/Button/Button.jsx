import "./Button.css";

export default function Button({ label, cssOverrides, onClick }) {
    return (
        <>
            <div className="button-wrapper">
                <button
                    className="button"
                    style={{ ...cssOverrides }}
                    onClick={onClick}
                >
                    {label}
                </button>
                <div className="bg-div" style={{ ...cssOverrides }}></div>
            </div>
        </>
    );
}
