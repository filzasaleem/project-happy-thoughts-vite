import { FetchThoughts } from "./FetchThoughts";
import { WriteThought } from "./WriteThought";
import { useState } from "react";
import "./HappyThoughts.css";

export const HappyThoughts = () => {
  const [newThought, setNewThought] = useState(null);

  const updateThoughts = (thought) => {
    setNewThought(thought);
  };
  return (
    <div className="thoughtsContainer">
      <div className="wrtieThoughts">
        <WriteThought updateThoughts={updateThoughts} />
      </div>
      <div className="fetchThoughts">
        <FetchThoughts newThought={newThought} />
      </div>
    </div>
  );
};
