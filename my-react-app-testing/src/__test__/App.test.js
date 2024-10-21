// src/App.test.js
import { render, screen, describe, test, expect } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    test('renders the title', () => {
        render(<App />);

        const titleElement = screen.getByText(/hello react/i); // Mencari teks "hello react" (case insensitive)
        expect(titleElement).toBeInTheDocument();              // Memastikan elemen ada di dalam dokumen
    });
});
