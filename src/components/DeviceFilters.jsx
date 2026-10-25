import { LuSearch } from "react-icons/lu"
import { categories } from "../lib/catalogue"

const DeviceFilters = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  inStock,
  setInStock,
}) => {
  return (
    <div className="grid gap-3 bg-paper border border-line rounded-2xl p-[14px] shadow-[0_8px_30px_var(--color-shadow-filter)] grid-cols-[minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-cols-[minmax(0,1.6fr)_minmax(0,.75fr)_minmax(0,.75fr)_auto] lg:items-end">
      <label className="label relative min-w-0 md:col-span-2 lg:col-span-1">
        <span className="sr-only">Search devices</span>
        <LuSearch
          size={18}
          className="absolute left-3 bottom-3 text-icon-search"
        />
        <input
          className="pl-[39px]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by device name"
        />
      </label>
      <label className="label min-w-0">
        <span>Category</span>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All categories</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </label>
      <label className="label min-w-0">
        <span>Sort by</span>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="featured">Featured</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </label>
      <label className="label relative flex-row items-center min-h-[42px] px-2 whitespace-nowrap gap-2">
        <input
          type="checkbox"
          className="absolute opacity-0 size-0 pointer-events-none"
          checked={inStock}
          onChange={(e) => setInStock(e.target.checked)}
        />
        <span
          className={`w-9 h-[21px] rounded-full relative transition duration-200 after:content-[''] after:w-[15px] after:h-[15px] after:bg-strong after:rounded-full after:absolute after:top-[3px] after:left-[3px] after:shadow-[0_1px_3px_var(--color-shadow-knob)] after:transition duration-200 ${
            inStock ? "bg-primary after:translate-x-[15px]" : "bg-toggle-off"
          }`}
        />
        <span>In stock only</span>
      </label>
    </div>
  )
}

export default DeviceFilters
