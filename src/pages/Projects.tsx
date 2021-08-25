import React from "react";
import { withTranslation } from "react-i18next";

const Projects = (props: any) => {
  const { t } = props;
  return (
    <div>
      <div className="h-36 bg-white dark:bg-gray-700">
        <h1 className="text-5xl md:text-8xl font-bold p-20 text-center md:text-left px-10 dark:text-gray-200">
          {t("projects")}
        </h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5 px-10 py-10 dark:bg-gray-800 pt-20">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quo suscipit ipsa rem
          quibusdam doloribus aspernatur sunt temporibus, aperiam amet cum voluptatibus
          necessitatibus laborum ratione labore vel perspiciatis, cumque corporis.
        </p>
      </div>
    </div>
  );
};

export default withTranslation()(Projects);
