import {
  LuArrowRight,
  LuCheck,
  LuGitCompare,
  LuShoppingBag,
} from "react-icons/lu";
import { formatAFN } from "../lib/catalogue";

const DeviceCard = ({
  device,
  compared,
  inList,
  onDetails,
  onCompare,
  onAdd,
}) => (
  <article className=" bg-paper border border-line rounded-2xl overflow-hidden transition duration-200 hover:-translate-y-[3px] hover:border-card-hover-line hover:shadow-[0_16px_40px_var(--color-shadow-medium)]">
    <div className="h-[220px] bg-image-bg relative p-4">
      <img
        src={device.image}
        alt={`${device.title} product illustration`}
        className="w-full h-full object-contain"
      />
      <span
        className={`absolute left-[13px] top-[13px] bg-chip-glass border rounded-full px-[9px] py-[5px] text-[10px] font-bold ${
          device.stock === 0
            ? "text-danger border-status-danger-line"
            : "text-success border-status-success-line"
        }`}
      >
        {device.stock === 0
          ? "Out of sample stock"
          : `${device.stock} in sample stock`}
      </span>
    </div>
    <div className="p-6">
      <div className="eyebrow">{device.category}</div>
      <h3 className="text-ink tracking-[-.035em] text-[21px] mt-1.5 mb-3">
        {device.title}
      </h3>
      <div className="flex gap-1.5 mb-[18px]">
        <span className="text-text-chip bg-chip-bg rounded-2xl px-[7px] py-[5px] text-[10px]">
          {device.storageGB} GB storage
        </span>
        <span className="text-text-chip bg-chip-bg rounded-2xl px-[7px] py-[5px] text-[10px]">
          {device.memoryGB} GB memory
        </span>
      </div>
      <div className="text-[21px] font-bold flex flex-col mb-[5px]">
        {formatAFN(device.priceAFN)}
        <small className="text-muted text-[9px] uppercase tracking-[.08em] mt-[3px]">
          Practice price
        </small>
      </div>
      <button
        onClick={onDetails}
        className="border-0 bg-transparent py-1.5 px-0 inline-flex items-center gap-[5px] font-bold text-[13px] text-primary"
      >
        View details <LuArrowRight size={16} />
      </button>
      <div className="grid grid-cols-2 gap-2 border-t border-line mt-4 pt-4">
        <button
          className={`btn-secondary rounded-2xl ${
            compared
              ? "!text-primary-text !border-primary-border !bg-primary-soft"
              : ""
          }`}
          onClick={onCompare}
        >
          {compared ? <LuCheck size={18} /> : <LuGitCompare size={18} />}
          {compared ? "Compared" : "Compare"}
        </button>
        <button
          className="btn-primary rounded-2xl"
          disabled={device.stock === 0}
          onClick={onAdd}
        >
          {inList ? <LuCheck size={18} /> : <LuShoppingBag size={18} />}
          {inList ? "In list" : "Add to list"}
        </button>
      </div>
    </div>
  </article>
);

export default DeviceCard;
