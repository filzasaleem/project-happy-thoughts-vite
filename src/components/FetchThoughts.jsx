import { DisplayThoughts } from "./DisplayThoughts";
import { useState, useEffect } from "react";

export const FetchThoughts = ({ newThought }) => {
  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const [allThoughts, setAllThoughts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAllThoughts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (newThought) {
      setAllThoughts((previousThoughts) => [newThought, ...previousThoughts]);
    }
  }, [newThought]);

  console.log(allThoughts);

  return (
    <>
      {allThoughts ? (
        <DisplayThoughts allThoughts={allThoughts} />
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};
