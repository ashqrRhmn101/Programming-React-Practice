import { useState } from "react";
export default function Count() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleRmv = () => {
    // const rmvCount = count -1;
    // setCount(rmvCount)
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleRestart = () => {
    setCount(0);
  };

  const card = {
    border: "2px solid green",
    marginTop: "5px",
    padding: "10px",
  };

  return (
    <div style={card}>
      <p>Count: {count}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRmv}>⚔️</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}
