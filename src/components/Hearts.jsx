import { useState } from "react";

export const Hearts = ({ id, hearts }) => {
  const [heartsCount, setHeartsCount] = useState(hearts);
  const [buttonBackground, setButtonBackground] = useState("#d1d1d1"); // Initial background color

  const url = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`;

  const handleHearts = () => {
    console.log("url is", url);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.error(
            "Request failed:",
            response.status,
            response.statusText
          );
          // Handle error response here
        }
        return response.json();
      })
      .then((data) => {
        setHeartsCount((previous) => previous + 1);
        setButtonBackground("#ee8bb4"); // Change background color
      })
      .catch((error) => {
        console.error("Request error:", error);
        // Handle other errors here
      });
  };

  return (
    <>
      <button
        className="likeButton"
        onClick={handleHearts}
        style={{ backgroundColor: buttonBackground }}
      >
        <span className="emoji" aria-label="heart emoji">
          ❤️
        </span>
      </button>
      x {heartsCount}
    </>
  );
};
