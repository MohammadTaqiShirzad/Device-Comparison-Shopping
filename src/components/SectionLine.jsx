const SectionLine = ({ kicker, title, action }) => (
  <div className="flex items-center justify-between gap-6 mb-[26px] max-sm:items-start">
    <div>
      <span className="eyebrow">{kicker}</span>
      <h2 className="text-ink tracking-[-.035em] text-[34px] font-bold mt-[7px] mb-0">
        {title}
      </h2>
    </div>
    {action}
  </div>
)

export default SectionLine
