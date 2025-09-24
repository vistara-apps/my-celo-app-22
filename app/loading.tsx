export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg">
      <div className="animate-pulse space-y-4 w-full max-w-md p-8">
        <div className="h-8 bg-border w-1/2 mx-auto"></div>
        <div className="h-16 bg-border w-24 mx-auto"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-12 bg-border"></div>
            <div className="h-12 bg-border"></div>
          </div>
          <div className="h-12 bg-border"></div>
        </div>
      </div>
    </div>
  );
}
