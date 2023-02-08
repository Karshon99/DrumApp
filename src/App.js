import Box from "./components/Box.js";
import "./App.css";
const drumsounds = [
  {
    key: "Q",
    drumbeat: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    drumbeat: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    drumbeat: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    drumbeat: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    drumbeat: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    drumbeat: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    drumbeat: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    drumbeat: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    drumbeat: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  return (
    <div className="App">
      <div id="display" className="display">
        {drumsounds.map((drumsounds, id) => (
          <Box text={drumsounds.key} key={id} audio={drumsounds.drumbeat} />
        ))}
      </div>
    </div>
  );
}

export default App;
