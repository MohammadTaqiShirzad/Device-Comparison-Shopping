import { useNavigate, useOutletContext } from "react-router-dom"
import {
  LuArrowRight,
  LuCheck,
  LuGitCompare,
  LuSearch,
  LuShoppingBag,
} from "react-icons/lu"

import SectionLine from "../components/SectionLine"
import { formatAFN } from "../lib/catalogue"

const visualCard =
  "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_28px_70px_rgba(0,0,0,0.45)]"

const floatCard =
  "absolute rounded-2xl border border-white/10 bg-[rgba(18,21,29,0.8)] backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.4)] z-[2]"

const featureCard =
  "rounded-2xl border border-white/8 bg-paper p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_45px_var(--color-shadow-soft)]"

const HomePage = () => {
  const { devices } = useOutletContext()
  const navigate = useNavigate()
  const goDevices = () => navigate("/devices")
  const goPlan = () => navigate("/compare")

  return (
    <>
      <section className="relative overflow-hidden">
        {/* soft glow blobs behind the hero */}
        <div className="pointer-events-none absolute -top-[220px] left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--color-glow-primary),transparent)] blur-2xl" />
        <div className="page-shell relative grid min-h-[620px] items-center gap-[80px] pt-[62px] pb-[76px] grid-cols-1 max-lg:gap-10 max-lg:pt-[55px] lg:grid-cols-[1.02fr_.98fr] max-sm:min-h-0 max-sm:pt-[42px] max-sm:pb-[58px]">
          <div className="relative z-[2] max-lg:text-center">
            <span className="mb-[22px] inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-[14px] py-2 text-xs font-[750] tracking-[.02em] text-primary-text">
              <LuCheck size={14} /> Compare clearly. Plan confidently.
            </span>
            <h1 className="heading mb-[22px] text-[43px] font-bold leading-[1.03] lg:text-[clamp(46px,5.1vw,70px)]">
              Find the right device for your{" "}
              <em className="glow-text not-italic">real-world budget.</em>
            </h1>
            <p className="mb-[30px] max-w-[570px] text-lg leading-[1.65] text-muted max-lg:mx-auto">
              Explore a practice catalogue, compare the details that matter, and
              create a shopping plan before you decide.
            </p>
            <div className="flex flex-wrap gap-3 max-lg:justify-center">
              <button className="btn-primary btn-lg" onClick={goDevices}>
                Browse devices <LuArrowRight size={18} />
              </button>
              <button className="btn-secondary btn-lg" onClick={goPlan}>
                Open budget planner
              </button>
            </div>
            <div className="mt-7 flex gap-5 text-xs text-muted max-lg:justify-center max-sm:flex-col max-sm:items-center max-sm:gap-[9px]">
              <span className="flex items-center gap-[5px]">
                <LuCheck className="text-success" />
                Clear specifications
              </span>
              <span className="flex items-center gap-[5px]">
                <LuCheck className="text-success" />
                Simple comparison
              </span>
              <span className="flex items-center gap-[5px]">
                <LuCheck className="text-success" />
                No sign-up
              </span>
            </div>
          </div>

          <div className="relative h-[460px] max-lg:mx-auto max-lg:w-[min(570px,100%)] max-sm:h-[390px]">
            <div
              className={`${visualCard} absolute left-1/2 top-1/2 h-[388px] w-[310px] -translate-x-1/2 -translate-y-1/2 rotate-[2deg] rounded-3xl p-5 max-sm:h-[330px] max-sm:w-[255px]`}
            >
              <span className="eyebrow">Popular practice pick</span>
              <img
                src="/images/phone.webp"
                alt="Featured phone"
                className="h-[270px] w-full rounded-xl object-cover max-sm:h-[215px]"
              />
              <div className="flex justify-between border-t border-white/10 pt-[14px]">
                <strong>{devices[0] ? devices[0].title : "Sadaf One"}</strong>
                <span className="text-[13px] font-bold text-primary">
                  {devices[0]
                    ? formatAFN(devices[0].priceAFN)
                    : formatAFN(25000)}
                </span>
              </div>
            </div>
            <div
              className={`${floatCard} bottom-[38px] left-[-22px] flex flex-col p-[14px_18px] max-sm:bottom-[10px] max-sm:left-[-5px]`}
            >
              <span className="text-[10px] text-muted">Budget check</span>
              <strong className="my-[3px] text-xl text-danger">
                5,000 AFN
              </strong>
              <small className="text-[10px] text-muted">
                shortfall on a 55,000 AFN plan
              </small>
            </div>
            <div
              className={`${floatCard} right-[-10px] top-[58px] flex items-center gap-2.5 p-[12px_15px] text-primary max-sm:right-[-6px] max-sm:top-[26px]`}
            >
              <LuGitCompare size={18} />
              <span className="flex flex-col">
                <strong className="text-[13px] text-ink">3 devices</strong>
                <small className="text-[10px] text-muted">
                  ready to compare
                </small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.02] py-20 max-sm:py-[58px]">
        <div className="page-shell">
          <div className="mx-auto mb-10 max-w-[610px] text-center">
            <span className="eyebrow">Built for better choices</span>
            <h2 className="heading mt-[7px] mb-[10px] text-[34px] font-bold">
              Everything you need to plan
            </h2>
            <p className="leading-normal text-muted">
              Move from a broad shortlist to a clear plan without juggling tabs
              or doing the maths yourself.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
            <article className={featureCard}>
              <span className="mb-5 grid h-[42px] w-[42px] place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-transparent text-primary ring-1 ring-primary/30">
                <LuSearch size={18} />
              </span>
              <h3 className="heading mb-2 text-lg">Discover</h3>
              <p className="m-0 text-sm leading-normal text-muted">
                Search and filter a clear set of phones, laptops, and tablets.
              </p>
            </article>
            <article className={featureCard}>
              <span className="mb-5 grid h-[42px] w-[42px] place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-transparent text-primary ring-1 ring-primary/30">
                <LuGitCompare size={18} />
              </span>
              <h3 className="heading mb-2 text-lg">Compare</h3>
              <p className="m-0 text-sm leading-normal text-muted">
                See consistent specifications for up to three devices side by
                side.
              </p>
            </article>
            <article className={featureCard}>
              <span className="mb-5 grid h-[42px] w-[42px] place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-transparent text-primary ring-1 ring-primary/30">
                <LuShoppingBag size={18} />
              </span>
              <h3 className="heading mb-2 text-lg">Plan</h3>
              <p className="m-0 text-sm leading-normal text-muted">
                Build a stock-aware shopping list and see your budget balance
                instantly.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-shell py-[82px] max-sm:py-[58px]">
        <SectionLine
          kicker="A useful starting point"
          title="Featured devices"
          action={
            <button
              onClick={goDevices}
              className="inline-flex items-center gap-[5px] border-0 bg-transparent px-0 py-1.5 text-[13px] font-bold text-primary"
            >
              View all devices <LuArrowRight size={16} />
            </button>
          }
        />
        <div className="grid grid-cols-3 gap-[18px] max-sm:grid-cols-1">
          {devices.slice(0, 3).map((d) => (
            <article
              key={d.id}
              className="flex items-center gap-4 rounded-2xl border border-white/8 bg-paper p-[14px] transition duration-300 hover:border-primary/40 hover:shadow-[0_14px_35px_var(--color-shadow-soft)]"
            >
              <img
                src={d.image}
                alt=""
                className="h-[82px] w-[92px] rounded-xl bg-soft object-cover"
              />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] text-muted">{d.category}</span>
                <strong>{d.title}</strong>
                <b className="text-[13px] text-primary">
                  {formatAFN(d.priceAFN)}
                </b>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
