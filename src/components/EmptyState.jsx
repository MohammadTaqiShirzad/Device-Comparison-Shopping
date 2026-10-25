// icon is passed in as a static svg node by the caller
const EmptyState = ({ icon, title, text }) => (
  <div className="min-h-[220px] border border-dashed border-empty-line bg-paper rounded-[15px] flex flex-col items-center justify-center text-center p-[30px]">
    <span className="w-[52px] h-[52px] grid place-items-center bg-primary-soft text-primary rounded-full mb-3.5">
      {icon}
    </span>
    <h3 className="text-ink tracking-[-.035em] mb-1.5">{title}</h3>
    <p className="text-muted max-w-[420px] m-0 leading-normal text-[13px]">
      {text}
    </p>
  </div>
)

export default EmptyState
