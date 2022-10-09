import { useState } from "react";
function Email() {
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <h3>Input Event Testing</h3>
      <input
        type="email"
        placeholder="Enter email"
        data-testid="email-input"
        value={email}
        onChange={handleEmail}
      />

      {email && !/\S+@\S+\.\S+/.test(email) && (
        <span className="error" data-testid="error-msg">
          Please enter a valid email.
        </span>
      )}
    </div>
  );
}

export default Email;
