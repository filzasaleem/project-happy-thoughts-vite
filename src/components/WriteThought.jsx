import { useState } from "react";

export const WriteThought = ({ updateThoughts }) => {
  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const maxCharacters = 140;
  const handleChange = (event) => {
    const inputText = event.target.value;

    if (inputText.length <= maxCharacters) {
      setText(inputText);
    }
  };
  const sendThought = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: text }),
    })
      .then((response) => {
        if (!response.ok) {
          console.error(
            "Request failed:",
            response.status,
            response.statusText
          );
        }
        return response.json();
      })
      .then((newThought) => {
        updateThoughts(newThought);
        setText("");
      });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (text.length === 0) {
      setError("No thoughts written to send");
    } else if (text.length < 5) {
      setError("Message is too short.");
    } else if (text.length > maxCharacters) {
      setError("Message is too long.");
    } else {
      sendThought();
      setError(null);
    }
  };
  return (
    <>
      <h2 className="writeFormHeading">What is making you happy right now!!</h2>
      <form className="writeForm" onSubmit={handleFormSubmit}>
        <div className="textareaWraper">
          <textarea
            rows={4}
            value={text}
            onChange={handleChange}
            placeholder="Share your Thoughts with us..."
          />
        </div>
        <div
          className="formSections"
          style={{ justifyContent: error ? "space-between" : "flex-end" }}
        >
          {error && <section className="errorSection">{error}</section>}
          <section
            className="characterCount"
            style={{
              color: text.length > maxCharacters - 30 ? "red" : "inherit",
            }}
          >
            {text.length}/{maxCharacters}
          </section>
        </div>
        <button className="formButton" type="submit">
          <span className="emoji" aria-label="heart emoji">
            ❤️
          </span>
          send happy thought
          <span className="emoji" aria-label="heart emoji">
            ❤️
          </span>
        </button>
      </form>
    </>
  );
};
