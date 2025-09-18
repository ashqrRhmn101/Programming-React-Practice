import { useState } from "react";

export default function Cricket() {
  const [count, setCount] = useState(0);
  const [sixs, setSixes] = useState(0);
  const [fours, setFours] = useState(0);
  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const fourCount = () => {
    const updateFour = count + 4;
    const foursCount = fours + 1;
    setFours(foursCount);
    setCount(updateFour);
  };

  const sixCount = () => {
    const sixUpdate = count + 6;
    const sixCount = sixs + 1;
    setSixes(sixCount);
    setCount(sixUpdate);
  };

  return (
    <div className="cards">
      <h2>Cricket Run Score</h2>
      {count > 50 && <p>Your Score : 50+ </p>}
      <h2>Run: {count}</h2>
      <p>Four: {fours}</p>
      <p>Six: {sixs}</p>
      <button onClick={handleCount}>Count</button>
      <button onClick={fourCount}>Four</button>
      <button onClick={sixCount}>Six</button>
    </div>
  );
}
