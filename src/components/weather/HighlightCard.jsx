function HighlightCard({ icon: Icon, label, value }) {
  return (
    <article className="group h-full rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-lg shadow-sky-950/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-white hover:shadow-xl hover:shadow-sky-950/20 dark:border-slate-700 dark:bg-slate-900/75 dark:shadow-slate-950/20 dark:hover:border-sky-200/30 dark:hover:bg-slate-800 dark:hover:shadow-sky-950/30 sm:rounded-3xl sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-sky-500/15 text-sky-700 transition-transform duration-300 group-hover:scale-110 dark:bg-sky-300/15 dark:text-sky-200 sm:size-11 sm:rounded-2xl">
          <Icon aria-hidden="true" className="text-xl sm:text-2xl" />
        </span>
        <p className="text-right text-xs font-medium text-slate-500 dark:text-slate-400 sm:text-sm">
          {label}
        </p>
      </div>
      <p className="mt-6 text-lg font-semibold tracking-tight text-slate-900 dark:text-white sm:mt-7 sm:text-xl">
        {value}
      </p>
    </article>
  );
}

export default HighlightCard;
