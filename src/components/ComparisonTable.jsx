import { LuGitCompare, LuX } from "react-icons/lu"
import EmptyState from "./EmptyState"
import SectionLine from "./SectionLine"
import { formatAFN } from "../lib/catalogue"

// each row is a label and a function that reads the value from a device
const ROWS = [
  ["Category", (d) => d.category],
  ["Practice price", (d) => formatAFN(d.priceAFN)],
  ["Storage", (d) => `${d.storageGB} GB`],
  ["Memory", (d) => `${d.memoryGB} GB`],
  ["Sample stock", (d) => `${d.stock} units`],
]

const ComparisonTable = ({ devices, onRemove, onReset }) => {
  if (!devices.length)
    return (
      <EmptyState
        icon={<LuGitCompare size={28} />}
        title="No devices selected"
        text="Browse the catalogue and add up to three devices to see their specifications side by side."
      />
    )

  return (
    <div>
      <SectionLine
        kicker="Side by side"
        title="Compare devices"
        action={
          <button
            onClick={onReset}
            className="border-0 bg-transparent py-1.5 px-0 inline-flex items-center gap-[5px] font-bold text-[13px] text-danger"
          >
            Reset comparison
          </button>
        }
      />
      <div className="overflow-x-auto border border-line rounded-[14px]">
        <table className="w-full border-collapse bg-paper min-w-[650px] [&_th]:text-left [&_td]:text-left [&_th]:text-[13px] [&_td]:text-[13px] [&_th]:py-[15px] [&_td]:py-[15px] [&_th]:px-[18px] [&_td]:px-[18px] [&_tbody_tr:last-child>*]:border-b-0 [&_*:last-child]:border-r-0">
          <thead>
            <tr>
              <th className="min-w-[140px] align-middle text-muted bg-panel border-b border-r border-line">
                Specification
              </th>
              {devices.map((d) => (
                <th
                  key={d.id}
                  className="min-w-[180px] align-top bg-panel relative border-b border-r border-line"
                >
                  <img
                    src={d.image}
                    alt=""
                    className="w-[70px] h-[55px] object-contain align-middle mr-[7px]"
                  />
                  <strong>{d.title}</strong>
                  <button
                    onClick={() => onRemove(d.id)}
                    aria-label={`Remove ${d.title}`}
                    className="float-right border-0 bg-transparent text-muted p-1"
                  >
                    <LuX size={16} />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([label, value]) => (
              <tr key={label}>
                <th className="text-muted font-[650] bg-panel-deep border-b border-r border-line">
                  {label}
                </th>
                {devices.map((d) => (
                  <td key={d.id} className="border-b border-r border-line">
                    {value(d)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ComparisonTable
