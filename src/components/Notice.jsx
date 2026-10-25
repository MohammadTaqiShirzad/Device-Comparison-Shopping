import { LuCheck, LuInfo } from "react-icons/lu"

// color classes for each notice tone
const tones = {
  neutral: "bg-notice-neutral text-text-list",
  warning: "bg-notice-warning text-notice-warning-text",
  danger: "bg-notice-danger text-danger",
  success: "bg-notice-success text-success",
}

const Notice = ({ children, tone = "neutral" }) => (
  <div
    className={`flex items-center gap-2.5 px-[13px] py-[11px] my-3 rounded-[9px] text-xs ${tones[tone]}`}
  >
    {tone === "success" ? <LuCheck size={18} /> : <LuInfo size={18} />}
    {children}
  </div>
)

export default Notice
