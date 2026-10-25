import { useState } from "react"

import Notice from "./Notice"
import { categories, deviceDefaults } from "../lib/catalogue"

const DeviceForm = ({ initial, onSave, onCancel }) => {
  const [draft, setDraft] = useState(initial ?? deviceDefaults)
  const [error, setError] = useState("")

  const update = (field, value) => setDraft({ ...draft, [field]: value })

  const submit = (e) => {
    e.preventDefault()
    if (!draft.title.trim() || !draft.description.trim())
      return setError("Add a title and description.")
    if (draft.priceAFN <= 0)
      return setError("Practice price must be greater than zero.")
    if (
      [draft.storageGB, draft.memoryGB, draft.stock].some(
        (v) => !Number.isInteger(v) || v < 0,
      )
    )
      return setError(
        "Stock, storage, and memory must be positive whole values (stock may be zero).",
      )
    onSave(draft)
  }

  return (
    <form onSubmit={submit}>
      <div className="grid gap-[15px] grid-cols-1 lg:grid-cols-3">
        <label className="label lg:col-span-2 max-lg:col-span-1">
          <span>Device title</span>
          <input
            value={draft.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="e.g. Kabul Note"
          />
        </label>
        <label className="label">
          <span>Category</span>
          <select
            value={draft.category}
            onChange={(e) => update("category", e.target.value)}
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="label">
          <span>Practice price (AFN)</span>
          <input
            type="number"
            min="1"
            value={draft.priceAFN || ""}
            onChange={(e) => update("priceAFN", Number(e.target.value))}
          />
        </label>
        <label className="label">
          <span>Storage (GB)</span>
          <input
            type="number"
            min="0"
            step="1"
            value={draft.storageGB || ""}
            onChange={(e) => update("storageGB", Number(e.target.value))}
          />
        </label>
        <label className="label">
          <span>Memory (GB)</span>
          <input
            type="number"
            min="0"
            step="1"
            value={draft.memoryGB || ""}
            onChange={(e) => update("memoryGB", Number(e.target.value))}
          />
        </label>
        <label className="label">
          <span>Sample stock</span>
          <input
            type="number"
            min="0"
            step="1"
            value={draft.stock || ""}
            onChange={(e) => update("stock", Number(e.target.value))}
          />
        </label>
        <label className="label lg:col-span-2 max-lg:col-span-1">
          <span>Description</span>
          <textarea
            rows={3}
            value={draft.description}
            onChange={(e) => update("description", e.target.value)}
            placeholder="A short, helpful summary of this device..."
          />
        </label>
      </div>
      {error && <Notice tone="warning">{error}</Notice>}
      <div className="flex justify-end gap-[9px] mt-5">
        <button type="button" className="btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn-primary" type="submit">
          {initial ? "Save changes" : "Create device"}
        </button>
      </div>
    </form>
  )
}

export default DeviceForm
