import useTimer from "./useTimer";

function App() {
  const { seconds, start, stop, reset } = useTimer();

  return (
    <div>
      <h1>Workout Tracker</h1>
      <h2>Timer: {seconds}s</h2>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
