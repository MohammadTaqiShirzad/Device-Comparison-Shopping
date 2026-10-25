import { NavLink } from "react-router-dom"
import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu"

// link columns shown across the footer
const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Home", path: "/" },
      { label: "Devices", path: "/devices" },
      { label: "Compare & Plan", path: "/compare" },
    ],
  },
  {
    title: "Catalogue",
    links: [
      { label: "Manage devices", path: "/manage" },
      { label: "Add a device", path: "/manage" },
      { label: "Sample data", path: "/devices" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
    ],
  },
]

const SOCIALS = [
  { label: "GitHub", icon: LuGithub },
  { label: "Twitter", icon: LuTwitter },
  { label: "LinkedIn", icon: LuLinkedin },
]

const Footer = () => (
  <footer className="mt-auto border-t border-white/8 bg-[#0a0c11]">
    <div className="page-shell grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_.9fr_.9fr_.9fr] max-sm:py-11">
      {/* brand column */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-ink">
          <span className="grid h-[38px] w-[38px] place-items-center rounded-xl bg-gradient-to-br from-primary to-success shadow-[0_8px_24px_var(--color-glow-primary)]">
            <span className="relative h-[19px] w-[13px] rounded-[3px] border-2 border-white after:absolute after:bottom-[2px] after:left-[3px] after:h-[3px] after:w-[3px] after:rounded-full after:bg-accent" />
          </span>
          <span className="flex flex-col leading-tight">
            <strong className="text-[16px] font-extrabold tracking-[-.02em]">
              Device Desk
            </strong>
            <small className="text-[10px] uppercase tracking-[.14em] text-muted">
              Compare with clarity
            </small>
          </span>
        </div>
        <p className="max-w-[320px] text-sm leading-[1.7] text-muted">
          A practice workspace to browse a sample catalogue, compare the specs
          that matter, and plan a purchase against your budget.
        </p>
        <div className="flex gap-2.5">
          {SOCIALS.map(({ label, icon: Icon }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="grid h-[38px] w-[38px] place-items-center rounded-lg border border-white/10 bg-white/5 text-muted transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary-text"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* link columns */}
      {COLUMNS.map(({ title, links }) => (
        <nav key={title} className="flex flex-col gap-3">
          <h4 className="mb-1 text-[11px] font-extrabold uppercase tracking-[.13em] text-text-eyebrow">
            {title}
          </h4>
          {links.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              className="w-fit text-sm text-muted transition duration-200 hover:text-primary"
            >
              {label}
            </NavLink>
          ))}
        </nav>
      ))}
    </div>

    {/* bottom bar */}
    <div className="border-t border-white/8">
      <div className="page-shell flex flex-wrap items-center justify-between gap-3 py-6 max-sm:flex-col max-sm:text-center">
        <p className="m-0 text-[12.5px] text-muted">
          © {new Date().getFullYear()} Device Desk. Built for learning and
          demonstration.
        </p>
        <p className="m-0 text-[12px] text-icon-search">
          All specifications, prices, and stock are fictional practice data.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
