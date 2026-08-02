function HighlightCard({ icon: Icon, label, value }) {
  return (
    <article className="group h-full rounded-3xl border border-slate-200/80 bg-white/75 p-5 shadow-xl shadow-sky-950/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-white/85 hover:shadow-2xl hover:shadow-sky-950/15 dark:border-slate-700/80 dark:bg-slate-900/75 dark:shadow-slate-950/25 dark:hover:border-sky-200/25 dark:hover:bg-slate-900/85 dark:hover:shadow-sky-950/35 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-sky-500/15 text-sky-700 transition-transform duration-300 group-hover:scale-110 dark:bg-sky-300/15 dark:text-sky-200 sm:size-11 sm:rounded-2xl">
          <Icon aria-hidden="true" className="text-xl sm:text-2xl" />
        </span>
        <p className="text-right text-xs font-medium text-slate-500 dark:text-slate-400 sm:text-sm">
          {label}
        </p>
      </div>
      <p className="mt-7 text-lg font-semibold tracking-tight text-slate-900 dark:text-white sm:mt-8 sm:text-xl">
        {value}
      </p>
    </article>
  );
}

export default HighlightCard;
