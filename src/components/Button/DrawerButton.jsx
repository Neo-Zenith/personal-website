import "./DrawerButton.css";

export default function DrawerButton({ state, onOpen, onClose, cssOverrides }) {
    const handleState = (active) => {
        if (active) {
            onOpen();
        } else {
            onClose();
        }
    };

    return (
        <div style={{ ...cssOverrides }}>
            <input
                type="checkbox"
                id="toggle"
                checked={state}
                onChange={(e) => {
                    handleState(e.target.checked);
                }}
            />
            <label for="toggle" class="hamburger">
                <div class="line line1"></div>
                <div class="line line2"></div>
                <div class="line line3"></div>
            </label>
        </div>
    );
}
