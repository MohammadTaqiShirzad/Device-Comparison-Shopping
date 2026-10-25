import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import { LuPencil, LuPlus, LuTrash2 } from "react-icons/lu"

import Notice from "../components/Notice"
import DeviceForm from "../components/DeviceForm"
import PageHeading from "../components/PageHeading"
import SectionLine from "../components/SectionLine"
import { formatAFN } from "../lib/catalogue"

const iconButton =
  "w-[34px] h-[34px] grid place-items-center border border-line rounded-lg bg-paper"

const ManageDevicesPage = () => {
  const { devices, message, addDevice, saveDevice, removeDevice } =
    useOutletContext()

  // which record is open in the form: "new", a device, or null
  const [editing, setEditing] = useState(null)

  const handleSave = (draft) => {
    if (editing === "new") addDevice(draft)
    else saveDevice(editing.id, draft)
    setEditing(null)
  }

  return (
    <div className="page-shell pt-[58px] pb-[90px] max-sm:pt-[42px] max-sm:pb-[70px]">
      <PageHeading
        title="Manage Devices"
        text="Create and maintain the sample records used in this practice catalogue."
      />

      <div className="flex flex-col gap-[18px]">
        <div className="flex justify-between items-center max-sm:items-start max-sm:gap-[15px]">
          <div>
            <h2 className="text-ink tracking-[-.035em] text-[28px] font-bold m-0">
              Catalogue records
            </h2>
            <p className="text-muted text-[12px] mt-1 mb-0">
              {devices.length} sample records
            </p>
          </div>
          <button className="btn-primary" onClick={() => setEditing("new")}>
            <LuPlus size={18} />
            New device
          </button>
        </div>

        {editing && (
          <div className="border border-primary-line rounded-[15px] bg-edit-panel p-6">
            <SectionLine
              kicker={editing === "new" ? "New record" : "Editing record"}
              title={editing === "new" ? "Add a device" : editing.title}
            />
            <DeviceForm
              initial={editing === "new" ? undefined : editing}
              onCancel={() => setEditing(null)}
              onSave={handleSave}
            />
          </div>
        )}

        {message && <Notice tone="success">{message}</Notice>}

        <div className="border border-line rounded-[14px] overflow-hidden bg-paper">
          {devices.map((d) => (
            <div
              key={d.id}
              className="grid items-center gap-[14px] p-[13px_16px] border-b border-line last:border-b-0 grid-cols-[62px_1.5fr_.8fr_36px_36px] max-sm:grid-cols-[52px_1fr_34px_34px]"
            >
              <img
                src={d.image}
                alt=""
                className="w-[58px] h-12 object-contain bg-soft rounded-[7px] max-sm:w-[50px]"
              />
              <div className="flex flex-col gap-[3px]">
                <strong className="text-[13px]">{d.title}</strong>
                <span className="text-muted text-[11px]">
                  {d.category} · {d.storageGB} GB · {d.memoryGB} GB memory
                </span>
              </div>
              <div className="flex flex-col gap-[3px] max-sm:col-start-2">
                <strong className="text-[13px]">{formatAFN(d.priceAFN)}</strong>
                <span className="text-muted text-[11px]">{d.stock} in stock</span>
              </div>
              <button
                className={`${iconButton} text-text-soft max-sm:row-1`}
                onClick={() => setEditing(d)}
                aria-label={`Edit ${d.title}`}
              >
                <LuPencil size={18} />
              </button>
              <button
                className={`${iconButton} text-danger max-sm:row-1`}
                onClick={() => removeDevice(d.id)}
                aria-label={`Delete ${d.title}`}
              >
                <LuTrash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ManageDevicesPage
