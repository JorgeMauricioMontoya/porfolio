import React from "react";
import { withTranslation } from "react-i18next";
import { CardExperience } from "../components/CardExperience";

const Projects = (props: any) => {
  const { t } = props;
  return (
    <div>
      <div className="h-36 bg-white dark:bg-gray-700">
        <h1 className="text-5xl md:text-8xl font-bold p-20 text-center md:text-left px-10 dark:text-gray-200">
          {t("projects")}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 px-10 py-10 dark:bg-gray-800 pt-20">
          <CardExperience />
          <CardExperience />
      </div>
    </div>
  );
};

export default withTranslation()(Projects);