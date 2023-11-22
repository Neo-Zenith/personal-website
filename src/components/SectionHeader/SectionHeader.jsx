import "./SectionHeader.css";

export default function SectionHeader({ count, label }) {
    return (
        <div className="section-header-wrapper">
            <span className="section-header-count">{count}</span>
            <span className="section-header-label">{label}</span>
        </div>
    );
}
