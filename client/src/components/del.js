import { useEffect } from "react";

const DelComp = () => {
  const getData = async () => {
    const response = await fetch("/api");
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <h3>DelComp</h3>;
};

export default DelComp;
