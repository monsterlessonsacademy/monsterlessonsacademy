import useLocalStorage from "./hooks/useLocalStorage";

const CookieBanner = () => {
  const [cookiesBanner, setCookiesBanner] = useLocalStorage("cookiesBanner");

  return (
    <div>
      <button onClick={() => setCookiesBanner("closed")}>Close banner</button>
      {!cookiesBanner && <div>Cookie banner</div>}
    </div>
  );
};

export default CookieBanner;
