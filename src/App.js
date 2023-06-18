import "./App.css";
import { useState } from "react";

function App() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please Provide a comment with detailed description score above 5");
      return;
    }
    console.log("Form submitted! ")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div>
            <label>Score: {score}</label>
            <input
              type="range"
              min={0}
              max={10}
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div>
            <label>Comment: </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
