function HighlightCard({ icon: Icon, label, value }) {
  return (
    <article className="group h-full rounded-2xl border border-white/15 bg-white/10 p-4 shadow-lg shadow-slate-950/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-200/30 hover:bg-white/15 hover:shadow-xl hover:shadow-sky-950/30 sm:rounded-3xl sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-sky-300/15 text-sky-200 transition-transform duration-300 group-hover:scale-110 sm:size-11 sm:rounded-2xl">
          <Icon aria-hidden="true" className="text-xl sm:text-2xl" />
        </span>
        <p className="text-right text-xs font-medium text-slate-400 sm:text-sm">
          {label}
        </p>
      </div>
      <p className="mt-6 text-lg font-semibold tracking-tight text-white sm:mt-7 sm:text-xl">
        {value}
      </p>
    </article>
  );
}

export default HighlightCard;
