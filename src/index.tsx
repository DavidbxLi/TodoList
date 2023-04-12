import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('root') as Element;

// Create a root.
const root = createRoot(container);

// Initial render: Render an element to the root.
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
