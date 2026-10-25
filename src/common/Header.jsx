import { useState } from "react"
import { NavLink, useNavigate ,Link} from "react-router-dom"
import { LuArrowRight, LuMenu, LuShoppingBag, LuX } from "react-icons/lu"

// nav links shown in the header. they match the routes in App.jsx.
const ROUTES = [
  { path: "/", label: "Home" },
  { path: "/devices", label: "Devices" },
  { path: "/manage", label: "Manage Devices" },
  { path: "/about", label: "About" },
]

const COMPARE_PATH = "/compare"

const linkClass = ({ isActive }) =>
  `relative rounded-full px-4 py-2 text-[13.5px] font-semibold transition duration-200 ${
    isActive
      ? "bg-primary/12 text-primary"
      : "text-muted hover:bg-white/5 hover:text-ink"
  }`

const Header = ({ compareIds, cart }) => {
  const [open, setOpen] = useState(false)
  const [light, setLight] = useState(false)
  const navigate = useNavigate()
  const planCount = compareIds.length + Object.keys(cart).length


  return (
    <header className="sticky top-0 z-40">
      {/* thin gradient accent line across the top */}
      <div className="h-[3px] w-full bg-gradient-to-r from-primary via-success to-transparent" />

      <div className="border-b border-white/5 bg-[rgba(10,12,18,0.72)] backdrop-blur-xl">
        <div className="page-shell flex h-[74px] items-center justify-between gap-6">
          {/* brand */}
          <Link
          to="/"
            aria-label="Device Desk home"
            className="flex items-center gap-3 border-0 bg-transparent p-0 text-left text-ink"
          >
            <span className="relative grid h-[38px] w-[38px] place-items-center rounded-xl bg-gradient-to-br from-primary to-success shadow-[0_8px_24px_var(--color-glow-primary)]">
              <span className="relative h-[19px] w-[13px] rounded-[3px] border-2 border-white after:absolute after:bottom-[2px] after:left-[3px] after:h-[3px] after:w-[3px] after:rounded-full after:bg-accent" />
            </span>
            <span className="flex flex-col leading-tight">
              <strong className="text-[16px] font-extrabold tracking-[-.02em]">
                Device Desk
              </strong>
              <small className="text-[10px] uppercase tracking-[.14em] text-muted">
                Practice catalogue
              </small>
            </span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex border border-white/10 rounded-full bg-white/5">
            {ROUTES.map(({ path, label }) => (
              <NavLink key={path} to={path} className={linkClass}>
                {label}
                {path === COMPARE_PATH && planCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 grid h-[16px] min-w-[16px] place-items-center rounded-full bg-accent px-1 text-[9px] font-bold text-accent-ink">
                    {planCount}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* right actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => go("/compare")}
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[13px] font-semibold text-ink transition duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary-text sm:inline-flex"
            >
              <LuShoppingBag size={16} />
              My plan
              {planCount > 0 && (
                <span className="grid h-[18px] min-w-[18px] place-items-center rounded-full bg-primary px-1 text-[10px] font-bold text-ink">
                  {planCount}
                </span>
              )}
            </button>
            <Link
              to="/contact"
              className="bg-primary hidden rounded-full py-1.5 px-4 md:inline-flex items-center justify-center"
            >
              contact <LuArrowRight size={16} />
            </Link>

            {/* mobile toggle */}
            <button
              className="grid h-[40px] w-[40px] place-items-center rounded-lg border border-white/10 bg-white/5 text-ink transition hover:bg-white/10 lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <LuX size={20} /> : <LuMenu size={20} />}
            </button>
          </div>
        </div>

        {/* mobile panel */}
        {open && (
          <nav className="border-t border-white/5 bg-[rgba(10,12,18,0.96)] px-5 py-4 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-1">
              {ROUTES.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "bg-primary/12 text-primary"
                        : "text-muted hover:bg-white/5 hover:text-ink"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className=" p-2 mt-2 w-full"
              >
                Browse devices <LuArrowRight size={18} />
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
