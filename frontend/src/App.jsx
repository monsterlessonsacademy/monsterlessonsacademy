import { useTranslation } from "react-i18next";
import Dashboard from "./Dashboard";

const App = () => {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English" },
    { code: "de", name: "German" },
  ];
  return (
    <div>
      <div>
        {languages.map((language) => (
          <button
            onClick={() => i18n.changeLanguage(language.code)}
            key={language.code}
          >
            {language.name}
          </button>
        ))}
      </div>
      <h1>{t("welcome")} monsterlessons</h1>
      <Dashboard />
    </div>
  );
};

export default App;
