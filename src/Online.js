import useOnline from "./hooks/useOnline";

const Online = () => {
  const isOnline = useOnline();
  console.log("isOnline", isOnline);
  return (
    <div>
      {isOnline && <div>I'm online</div>}
      {!isOnline && <div>I'm offline</div>}
    </div>
  );
};

export default Online;
