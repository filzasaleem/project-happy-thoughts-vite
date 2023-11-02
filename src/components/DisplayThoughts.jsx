import { Hearts } from "./Hearts";
export const DisplayThoughts = ({ allThoughts }) => {
  function calculateTimeAgo(timestamp) {
    const now = new Date();
    const createdAt = new Date(timestamp);
    const timeDifference = now - createdAt;

    // Calculate time in minutes, hours, and days
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysAgo = Math.floor(hoursAgo / 24);

    if (minutesAgo < 1) {
      return "Just now";
    } else if (minutesAgo < 60) {
      return `${minutesAgo} minute${minutesAgo === 1 ? "" : "s"} ago`;
    } else if (hoursAgo < 24) {
      return `${hoursAgo} hour${hoursAgo === 1 ? "" : "s"} ago`;
    } else {
      return `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
    }
  }

  return (
    <>
      {allThoughts.map((thought) => (
        <div key={thought._id} className="thoughtBox">
          <p className="message">{thought.message}</p>
          <section className="likes-and-date">
          <section>
            <Hearts id={thought._id} hearts={thought.hearts} />
          </section>
          <section className="timeinfo">Created {calculateTimeAgo(thought.createdAt)}</section>
          </section>
        </div>
      ))}
   </>
  );
};
