import Email from "../EmailInput/Email";
import Toggle from "../ToggleInput/Toggle";
import Users from "../Users/Users";
import { Link } from "react-router-dom";
export default function UserInput() {
  return (
    <div>
      <Email />
      <Toggle />
      <Users />
    </div>
  );
}
