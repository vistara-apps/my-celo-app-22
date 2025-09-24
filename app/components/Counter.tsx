'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="bg-bg border-2 border-border p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-fg">
          Counter App
        </h1>
        
        <div className="text-center mb-8">
          <div className="text-6xl font-bold text-accent mb-4">
            {count}
          </div>
          <p className="text-muted">Current Count</p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={decrement}
              className="bg-bg border-2 border-border text-fg px-6 py-3 font-semibold hover:bg-accent hover:text-bg transition-colors"
              aria-label="Decrease count"
            >
              -
            </button>
            <button
              onClick={increment}
              className="bg-bg border-2 border-border text-fg px-6 py-3 font-semibold hover:bg-accent hover:text-bg transition-colors"
              aria-label="Increase count"
            >
              +
            </button>
          </div>
          
          <button
            onClick={reset}
            className="w-full bg-accent text-bg border-2 border-accent px-6 py-3 font-semibold hover:bg-bg hover:text-accent transition-colors"
          >
            Reset
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted">
            Tap the buttons to change the counter
          </p>
        </div>
      </div>
    </div>
  );
}
