const PageHeading = ({ title, text }) => (
  <div className="max-w-[700px] mb-9">
    <span className="eyebrow">Device Desk</span>
    <h1 className="text-ink tracking-[-.035em] text-[40px] sm:text-[50px] font-bold my-[7px_0_12px]">
      {title}
    </h1>
    <p className="text-muted text-base leading-normal">{text}</p>
  </div>
)

export default PageHeading
