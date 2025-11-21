import React, { useState, Suspense, lazy } from 'react';
import Home from './pages/Home';
import PureDisplay from './components/PureDisplay';
import ErrorBoundary from './components/ErrorBoundary';
import ModalPortal from './components/ModalPortal';
import PortalHost from './components/PortalHost';

const HeavyPage = lazy(() => import('./pages/HeavyPage')); // Lazy loading

function App() {
  const [view, setView] = useState('home');
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>React Advanced Features Demo</h1>

      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setView('home')}>Home</button>
        <button onClick={() => setView('lazy')}>Lazy Load</button>
        <button onClick={() => setView('pure')}>Pure Component</button>
        <button onClick={() => setView('error')}>Error Boundary</button>
        <button onClick={() => setView('portal')}>Portal (Modal)</button>
      </nav>

      {/* Conditional rendering */}
      {view === 'home' && <Home />}

      {view === 'lazy' && (
        <Suspense fallback={<p>Loading heavy page...</p>}>
          <HeavyPage />
        </Suspense>
      )}

      {view === 'pure' && <PureDisplay name="React Learner" />}

      {view === 'error' && (
        <ErrorBoundary>
          <BuggyComponent />
        </ErrorBoundary>
      )}

      {view === 'portal' && (
        <PortalHost>
          <button onClick={() => setShowModal(true)}>Open Modal</button>
          {showModal && (
            <ModalPortal onClose={() => setShowModal(false)}>
              <h2>This is a Portal Modal!</h2>
              <p>Rendered using PortalHost.</p>
            </ModalPortal>
          )}
        </PortalHost>
      )}
    </div>
  );
}

// A component that throws an error (for testing ErrorBoundary)
function BuggyComponent() {
  throw new Error("This is a simulated error!");
}

export default App;
