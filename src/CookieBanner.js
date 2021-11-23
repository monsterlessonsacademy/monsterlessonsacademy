import useLocalStorage from "./hooks/useLocalStorage";

const CookieBanner = () => {
  const [showCookiesBanner, setCookiesBanner] = useLocalStorage(
    "cookiesBanner"
  );
  return (
    <div>
      <button onClick={() => setCookiesBanner("closed")}>Close banner</button>
      {!showCookiesBanner && <div>cookie banner</div>}
    </div>
  );
};

export default CookieBanner;
