import { createSignal } from 'solid-js';
import solidLogo from '../assets/solid.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div>
        <style>
          {`
@scope {


  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.solid:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  .card {
    padding: 2em;
  }

  .read-the-docs {
    color: #888;
  }
}

`}
        </style>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  );
}

export default App;
