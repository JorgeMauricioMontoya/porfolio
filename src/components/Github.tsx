import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';

export const Github = () => {
  return (
    <Link
      to={"userData.socialLinks.twitter"}
      className="text-base font-normal text-gray-600 dark:text-gray-300"
    >
      <FaGithub size={24} />
    </Link>
  );
};