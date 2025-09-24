'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg p-8">
      <div className="text-center border-2 border-border p-8 max-w-md">
        <h2 className="text-2xl font-bold text-fg mb-4">
          Something went wrong!
        </h2>
        <p className="text-muted mb-6">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={reset}
          className="bg-accent text-bg border-2 border-accent px-6 py-3 font-semibold hover:bg-bg hover:text-accent transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
