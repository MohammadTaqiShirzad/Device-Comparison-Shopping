import { LuSearch } from "react-icons/lu"
import { useOutletContext } from "react-router-dom"

import PageHeading from "../components/PageHeading"
import DeviceFilters from "../components/DeviceFilters"
import DeviceCard from "../components/DeviceCard"
import Notice from "../components/Notice"

const DevicesPage = () => {
  const {
    visible,
    compareIds,
    cart,
    message,
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
    inStock,
    setInStock,
    openDetail,
    toggleCompare,
    addToCart,
  } = useOutletContext()

  return (
    <div className="page-shell pt-[58px] pb-[90px] max-sm:pt-[42px] max-sm:pb-[70px]">
      <PageHeading
        title="Explore devices"
        text="Search the practice catalogue, check sample stock, and build your shortlist."
      />

      <DeviceFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        inStock={inStock}
        setInStock={setInStock}
      />

      <div className="flex justify-between text-muted mt-6 mb-3.5 mx-0.5 text-[13px]">
        <span className="text-ink font-bold">
          {visible.length} {visible.length === 1 ? "device" : "devices"}
        </span>
        <small className="max-sm:hidden">
          Prices and specifications are practice data
        </small>
      </div>

      {message && (
        <Notice tone={message.startsWith("You can") ? "warning" : "success"}>
          {message}
        </Notice>
      )}

      {visible.length === 0 ? (
        <div className="grid place-items-center text-center py-[70px]">
          <span className="grid h-[56px] w-[56px] place-items-center rounded-full bg-white/5 text-primary mb-4">
            <LuSearch size={24} />
          </span>
          <h3 className="heading text-lg font-bold mb-1">No devices found</h3>
          <p className="text-muted text-sm m-0">
            Try a different search word or clear the filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
          {visible.map((device) => (
            <DeviceCard
              key={device.id}
              device={device}
              compared={compareIds.includes(device.id)}
              inList={!!cart[device.id]}
              onDetails={() => openDetail(device)}
              onCompare={() => toggleCompare(device.id)}
              onAdd={() => addToCart(device.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default DevicesPage
