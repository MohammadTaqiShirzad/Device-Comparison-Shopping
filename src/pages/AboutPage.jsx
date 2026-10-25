import { LuCheck, LuInfo } from "react-icons/lu"

import Notice from "../components/Notice"
import PageHeading from "../components/PageHeading"

const AboutPage = () => (
  <div className="page-shell pt-[58px] pb-[90px] max-sm:pt-[42px] max-sm:pb-[70px]">
    <PageHeading
      title="About"
      text="A transparent practice tool for learning how to compare and plan."
    />
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-[1.1fr_.9fr]">
      <section className="card p-8">
        <span className="w-[42px] h-[42px] grid place-items-center text-primary bg-primary-soft rounded-[11px] mb-5">
          <LuInfo size={18} />
        </span>
        <h2 className="heading text-[30px] font-bold">
          Practice first, clarity always
        </h2>
        <p className="text-muted leading-[1.75] text-sm">
          Device Desk is a demonstration catalogue created to practise comparing
          specifications and planning a purchase. Every product, price, and
          stock count shown here is fictional practice data—not current market
          information or a sales offer.
        </p>
        <p className="text-muted leading-[1.75] text-sm mb-0">
          The consistent comparison rows help learners weigh practical
          differences, while the budget planner makes trade-offs visible before
          any real-world shopping begins.
        </p>
      </section>
      <aside className="card p-8">
        <h3 className="heading mb-5">What this project demonstrates</h3>
        <ul className="list-none p-0 m-0 mb-6 flex flex-col gap-[15px]">
          <li className="flex items-center gap-[9px] text-text-list text-sm">
            <LuCheck size={18} className="shrink-0 text-success" />
            Search, filtering, and sorting
          </li>
          <li className="flex items-center gap-[9px] text-text-list text-sm">
            <LuCheck size={18} className="shrink-0 text-success" />
            Stock-aware quantity controls
          </li>
          <li className="flex items-center gap-[9px] text-text-list text-sm">
            <LuCheck size={18} className="shrink-0 text-success" />
            Accessible comparison patterns
          </li>
          <li className="flex items-center gap-[9px] text-text-list text-sm">
            <LuCheck size={18} className="shrink-0 text-success" />
            Validated catalogue management
          </li>
        </ul>
        <Notice>
          For learning purposes only. Verify specifications, stock, and prices
          with a trusted seller before purchasing.
        </Notice>
      </aside>
    </div>
  </div>
)

export default AboutPage
