export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900">
      <div className="flex flex-col items-center gap-6">
        <span className="text-5xl font-display text-gold-400 animate-pulse">AP</span>
        <div className="w-8 h-8 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}