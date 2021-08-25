import React from "react";
import { SkillBars } from "../components/SkillBars";
import { withTranslation } from "react-i18next";
import { BACKEND, FRONTEND, DB, OTHERS } from "../contents";

const Skills = (props: any) => {
  const { t } = props;
  return (
    <div>
      <div className="h-36 bg-white dark:bg-gray-700">
        <h1 className="text-5xl md:text-8xl font-bold p-20 text-center md:text-left px-10 dark:text-gray-200">
          {t("skills")}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10 py-10 dark:bg-gray-800 pt-20">
        <SkillBars skill={FRONTEND} title={t("frontend")} />
        <SkillBars skill={BACKEND} title={t("backend")} />
        <SkillBars skill={DB} title={t("database")} />
        <SkillBars skill={OTHERS} title={t("tool")}/>
      </div>
    </div>
  );
};

export default withTranslation()(Skills);
