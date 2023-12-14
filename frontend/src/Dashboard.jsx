import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  return <h2>{t("news")}</h2>;
};

export default Dashboard;
