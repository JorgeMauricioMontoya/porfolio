import { FaGithub } from "react-icons/fa";

export const Github = (props: any) => {
  const { link } = props;
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="text-base font-normal text-gray-600 dark:text-gray-300"
    >
      <FaGithub size={24} />
    </a>
  );
};
