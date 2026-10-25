import { useOutletContext } from "react-router-dom"

import PageHeading from "../components/PageHeading"
import Notice from "../components/Notice"
import ComparisonTable from "../components/ComparisonTable"
import ShoppingSummary from "../components/ShoppingSummary"

const ComparePlanPage = () => {
  const {
    message,
    devices,
    compareIds,
    cart,
    budget,
    setBudget,
    changeQuantity,
    removeFromCompare,
    resetCompare,
    removeFromCart,
  } = useOutletContext()

  // the devices the user picked for comparison, in pick order
  const comparedDevices = compareIds
    .map((id) => devices.find((device) => device.id === id))
    .filter((device) => device !== undefined)

  return (
    <div className="page-shell pt-[58px] pb-[90px] max-sm:pt-[42px] max-sm:pb-[70px]">
      <PageHeading
        title="Compare & Plan"
        text="Bring your shortlist and budget together in one clear workspace."
      />

      <div className="flex flex-col gap-[70px]">
        {message && (
          <Notice tone={message.startsWith("You can") ? "warning" : "success"}>
            {message}
          </Notice>
        )}

        <ComparisonTable
          devices={comparedDevices}
          onRemove={removeFromCompare}
          onReset={resetCompare}
        />

        <ShoppingSummary
          items={cart}
          devices={devices}
          budget={budget}
          setBudget={setBudget}
          setQuantity={changeQuantity}
          remove={removeFromCart}
        />
      </div>
    </div>
  )
}

export default ComparePlanPage
