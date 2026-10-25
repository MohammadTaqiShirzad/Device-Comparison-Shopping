import { LuShoppingBag, LuTrash2 } from "react-icons/lu"
import EmptyState from "./EmptyState"
import { formatAFN } from "../lib/catalogue"

const ShoppingSummary = ({
  items,
  devices,
  budget,
  setBudget,
  setQuantity,
  remove,
}) => {
  const selected = devices.filter((d) => items[d.id])
  const total = selected.reduce((sum, d) => sum + d.priceAFN * items[d.id], 0)
  const remaining = budget - total

  return (
    <div>
      <div className="flex items-center justify-between gap-6 mb-[26px] max-sm:flex-col max-sm:items-start">
        <div>
          <span className="eyebrow">Budget builder</span>
          <h2 className="text-ink tracking-[-.035em] text-[34px] font-bold mt-[7px] mb-0">
            Shopping list
          </h2>
        </div>
        <label className="label items-end">
          <span>Your budget</span>
          <span className="relative w-[180px]">
            <input
              type="number"
              min="0"
              className="pr-[45px]"
              value={budget}
              onChange={(e) => setBudget(Math.max(0, Number(e.target.value)))}
            />
            <b className="absolute right-[11px] top-[13px] text-[10px] text-muted font-normal">
              AFN
            </b>
          </span>
        </label>
      </div>

      {!selected.length ? (
        <EmptyState
          icon={<LuShoppingBag size={28} />}
          title="Your list is empty"
          text="Add available devices from the catalogue to begin planning your budget."
        />
      ) : (
        <div className="grid gap-[22px] items-start grid-cols-1 lg:grid-cols-[1fr_310px]">
          <div className="bg-paper border border-line rounded-[14px] overflow-hidden">
            {selected.map((d) => (
              <div
                key={d.id}
                className="grid gap-[14px] items-center p-[14px] border-b border-line last:border-b-0 grid-cols-[64px_1fr_auto_120px_36px] max-sm:grid-cols-[52px_1fr_34px] max-sm:gap-2.5"
              >
                <img
                  src={d.image}
                  alt=""
                  className="w-[64px] h-[58px] object-contain bg-soft rounded-lg max-sm:w-[52px] max-sm:h-[50px]"
                />
                <div className="flex flex-col gap-[3px]">
                  <strong>{d.title}</strong>
                  <span className="text-muted text-[11px]">
                    {formatAFN(d.priceAFN)} each
                  </span>
                </div>
                <div className="flex items-center border border-line rounded-lg overflow-hidden max-sm:row-2 max-sm:col-start-2 max-sm:w-max">
                  <button
                    className="w-[30px] h-8 border-0 bg-panel-raised text-ink"
                    onClick={() => setQuantity(d.id, items[d.id] - 1)}
                    aria-label={`Decrease ${d.title} quantity`}
                  >
                    −
                  </button>
                  <span className="min-w-[28px] text-center">{items[d.id]}</span>
                  <button
                    className="w-[30px] h-8 border-0 bg-panel-raised text-ink"
                    disabled={items[d.id] >= d.stock}
                    onClick={() => setQuantity(d.id, items[d.id] + 1)}
                    aria-label={`Increase ${d.title} quantity`}
                  >
                    +
                  </button>
                </div>
                <strong className="text-right text-[13px] max-sm:row-2 max-sm:col-start-1 max-sm:text-left max-sm:text-[11px]">
                  {formatAFN(d.priceAFN * items[d.id])}
                </strong>
                <button
                  className="w-[34px] h-[34px] grid place-items-center border border-line rounded-lg text-danger bg-paper max-sm:col-start-3 max-sm:row-1"
                  onClick={() => remove(d.id)}
                  aria-label={`Remove ${d.title} from list`}
                >
                  <LuTrash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <aside className="bg-summary-bg text-strong border border-summary-line rounded-[15px] p-[23px] sticky top-[95px] max-lg:static">
            <span className="uppercase text-text-eyebrow text-[10px] tracking-[.12em]">
              Plan summary
            </span>
            <div className="flex justify-between mt-[18px] items-end">
              <small className="text-text-label">Devices</small>
              <strong>{Object.values(items).reduce((a, b) => a + b, 0)}</strong>
            </div>
            <div className="flex justify-between mt-[18px] items-end">
              <small className="text-text-label">Practice total</small>
              <strong>{formatAFN(total)}</strong>
            </div>
            <hr className="border-0 border-t border-summary-divider mt-2 mb-[21px]" />
            <div
              className={`flex flex-col items-start mt-[18px] ${
                remaining >= 0
                  ? "[&_strong]:text-success-bright"
                  : "[&_strong]:text-warning-text"
              }`}
            >
              <small className="text-text-label">
                {remaining >= 0 ? "Remaining budget" : "Budget shortfall"}
              </small>
              <strong className="text-[27px] font-bold mt-[5px]">
                {formatAFN(Math.abs(remaining))}
              </strong>
            </div>
            <p className="text-text-caption text-[11px] leading-normal mt-[14px] mb-0">
              {remaining >= 0
                ? "This sample plan is within your selected budget."
                : "Adjust quantities or increase your budget to cover this sample plan."}
            </p>
          </aside>
        </div>
      )}
    </div>
  )
}

export default ShoppingSummary
