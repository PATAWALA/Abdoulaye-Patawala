export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900 dark:bg-dark-900 light:bg-white">
      <div className="flex flex-col items-center gap-5">
        {/* Nom avec soulignement comme la navbar */}
        <div className="relative group">
          <span className="text-gold-400 font-display text-4xl md:text-5xl tracking-tight">
            Abdoulaye
          </span>
          <span className="text-white font-display text-4xl md:text-5xl tracking-tight dark:text-white light:text-dark-900">
            Patawala
          </span>
          <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
        </div>

        {/* Indicateur de chargement */}
        <div className="flex items-center gap-1 mt-2">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}