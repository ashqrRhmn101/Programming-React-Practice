import { Map } from "@vis.gl/react-google-maps";
import "./App.css";

function App() {
  return (
    <>
      <h1>React google map</h1>
      <Map
        style={{ width: "90vw", height: "100vh" }}
        defaultCenter={{ lat: 24.4616, lng: 89.7053 }}
        defaultZoom={12}
        gestureHandling="greedy"
        disableDefaultUI
      />
    </>
  );
}

export default App;
