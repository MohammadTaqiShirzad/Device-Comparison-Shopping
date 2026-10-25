import { LuShoppingBag, LuX } from "react-icons/lu"
import Notice from "./Notice"
import { formatAFN } from "../lib/catalogue"

const DeviceModal = ({ device, onClose, onAdd }) => (
  <div
    className="fixed inset-0 z-50 bg-overlay backdrop-blur-[4px] grid place-items-center p-5"
    onMouseDown={onClose}
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-title"
      onMouseDown={(e) => e.stopPropagation()}
      className="w-[min(780px,100%)] max-h-[90vh] overflow-y-auto bg-paper border border-line rounded-[20px] grid grid-cols-[.9fr_1.1fr] max-sm:grid-cols-1 relative shadow-[0_30px_80px_var(--color-shadow-modal)]"
    >
      <button
        onClick={onClose}
        aria-label="Close details"
        className="absolute right-[13px] top-[13px] w-9 h-9 grid place-items-center border border-line rounded-full bg-chip-glass text-ink z-[2]"
      >
        <LuX size={18} />
      </button>
      <div className="bg-soft min-h-[460px] max-sm:min-h-[220px] grid place-items-center">
        <img
          src={device.image}
          alt={`${device.title} illustration`}
          className="w-[90%] max-h-[360px] max-sm:h-[200px] object-contain"
        />
      </div>
      <div className="p-[43px_35px_30px] max-sm:p-[28px_22px_22px]">
        <span className="eyebrow">{device.category}</span>
        <h2
          id="detail-title"
          className="text-ink tracking-[-.035em] text-[37px] max-sm:text-[31px] font-bold my-[7px_0_13px]"
        >
          {device.title}
        </h2>
        <p className="text-muted leading-normal text-sm">{device.description}</p>
        <div className="grid grid-cols-3 gap-2 my-[22px]">
          <div className="bg-soft rounded-lg p-[11px] flex flex-col gap-[5px]">
            <span className="text-muted text-[9px] uppercase">Storage</span>
            <strong className="text-[13px]">{device.storageGB} GB</strong>
          </div>
          <div className="bg-soft rounded-lg p-[11px] flex flex-col gap-[5px]">
            <span className="text-muted text-[9px] uppercase">Memory</span>
            <strong className="text-[13px]">{device.memoryGB} GB</strong>
          </div>
          <div className="bg-soft rounded-lg p-[11px] flex flex-col gap-[5px]">
            <span className="text-muted text-[9px] uppercase">
              Sample stock
            </span>
            <strong className="text-[13px]">{device.stock} units</strong>
          </div>
        </div>
        <div className="flex justify-between items-center max-sm:items-end max-sm:gap-2.5 border-t border-line pt-[19px]">
          <div className="flex flex-col">
            <small className="text-muted uppercase text-[9px]">
              Practice price
            </small>
            <strong className="text-[23px] font-bold mt-1">
              {formatAFN(device.priceAFN)}
            </strong>
          </div>
          <button
            className="btn-primary"
            disabled={device.stock === 0}
            onClick={onAdd}
          >
            <LuShoppingBag size={18} />
            Add to list
          </button>
        </div>
        <Notice>
          Practice specifications and price—not current market information.
        </Notice>
      </div>
    </div>
  </div>
)

export default DeviceModal
