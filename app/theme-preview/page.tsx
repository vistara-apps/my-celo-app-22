'use client';

import { useTheme } from '../components/ThemeProvider';

export default function ThemePreview() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-bg p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-fg mb-8">Theme Preview</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-fg mb-4">Current Theme: {theme}</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setTheme('default')}
              className={`px-4 py-2 border-2 font-semibold transition-colors ${
                theme === 'default'
                  ? 'bg-accent text-bg border-accent'
                  : 'bg-bg text-fg border-border hover:bg-accent hover:text-bg'
              }`}
            >
              Default Theme
            </button>
            <button
              onClick={() => setTheme('celo')}
              className={`px-4 py-2 border-2 font-semibold transition-colors ${
                theme === 'celo'
                  ? 'bg-accent text-bg border-accent'
                  : 'bg-bg text-fg border-border hover:bg-accent hover:text-bg'
              }`}
            >
              CELO Theme
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-2 border-border p-6">
            <h3 className="text-lg font-semibold text-fg mb-4">Color Palette</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-bg border border-border"></div>
                <span className="text-fg">Background</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-fg border border-border"></div>
                <span className="text-fg">Foreground</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent border border-border"></div>
                <span className="text-fg">Accent</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-muted border border-border"></div>
                <span className="text-fg">Muted</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-border border border-border"></div>
                <span className="text-fg">Border</span>
              </div>
            </div>
          </div>

          <div className="border-2 border-border p-6">
            <h3 className="text-lg font-semibold text-fg mb-4">Components</h3>
            <div className="space-y-4">
              <button className="w-full bg-accent text-bg border-2 border-accent px-4 py-2 font-semibold hover:bg-bg hover:text-accent transition-colors">
                Primary Button
              </button>
              <button className="w-full bg-bg text-fg border-2 border-border px-4 py-2 font-semibold hover:bg-accent hover:text-bg transition-colors">
                Secondary Button
              </button>
              <div className="bg-bg border-2 border-border p-4">
                <p className="text-fg">Card content with border</p>
                <p className="text-muted text-sm mt-2">Muted text example</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
