import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English" },
    { code: "de", name: "German" },
  ];
  return (
    <div>
      <h1>
        {t("welcome")} Monsterlessons Academy {t("news")}
      </h1>
      {languages.map((language) => (
        <button
          onClick={() => i18n.changeLanguage(language.code)}
          key={language.code}
        >
          {language.name}
        </button>
      ))}
    </div>
  );
};

export default App;
