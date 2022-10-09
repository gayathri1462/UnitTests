import { useState } from "react";

function Toggle() {
  const [showElement, setShowElement] = useState(false);
  const handleToggle = (e) => {
    setShowElement(e.target.checked);
  };
  return (
    <div className="CheckBox">
      <h3>Check Box Testing</h3>
      <label>
        <input
          type="checkbox"
          data-testid="cbShowHide"
          checked={showElement}
          onChange={handleToggle}
        />
        <span>Show/Hide Box</span>
      </label>
      {showElement && (
        <div className="box" data-testid="box">
          This is testing application.
        </div>
      )}
    </div>
  );
}

export default Toggle;
