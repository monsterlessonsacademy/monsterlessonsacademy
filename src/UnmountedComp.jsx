import { useEffect, useRef, useState } from "react";

const fetchAsyncData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data");
    }, 2000);
  });
};

const UnmountedComp = () => {
  const [data, setData] = useState(null);
  const isMounted = useRef(true);

  useEffect(() => {
    fetchAsyncData().then((data) => {
      console.log(data, isMounted.current);
      // if (isMounted.current) {
      setData(data);
      // }
    });

    // return () => {
    //   isMounted.current = false;
    // };
  }, []);

  return <div>Umount comp {data}</div>;
};

export default UnmountedComp;
