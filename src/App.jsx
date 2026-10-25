import { useEffect, useState } from "react"
import { BrowserRouter, data, Route, Routes } from "react-router-dom"

import Layout from "./common/Layout"
import HomePage from "./pages/HomePage"
import DevicesPage from "./pages/DevicesPage"
import ComparePlanPage from "./pages/ComparePlanPage"
import ManageDevicesPage from "./pages/ManageDevicesPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import { imageForCategory } from "./lib/catalogue"

// all app data lives here in App.jsx. pages get it through Layout as props.
// devices are fetched from db.json through the /api json-server endpoint.

const MAX_COMPARE = 3

const App = () => {
  // app data
  const [devices, setDevices] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState("")
  const [compareIds, setCompareIds] = useState([])
  const [cart, setCart] = useState({})
  const [budget, setBudget] = useState(50000)
  const [detail, setDetail] = useState(null)
  const [enquiries, setEnquiries] = useState([])

  // filters for the devices page
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All categories")
  const [sort, setSort] = useState("featured")
  const [inStock, setInStock] = useState(false)

  // little toast message that hides itself after a moment
  const [message, setMessage] = useState("")
  useEffect(() => {
    if (!message) return
    const timer = setTimeout(() => setMessage(""), 2500)
    return () => clearTimeout(timer)
  }, [message])

  // fetch the devices from db.json (served at /api/devices) when the app starts
  useEffect(() => {
    let active = true

    const loadDevices = async () => {
      try {
        const response = await fetch("/api/devices")
        if (!response.ok) throw new Error(`Request failed (${response.status})`)
        const data = await response.json()
        if (active) setDevices(data)
      } catch (error) {
        if (active) setLoadError(error.message)
      } finally {
        if (active) setLoading(false)
      }
    }
    console.log(data)

    loadDevices()
    // "active" stops the fetch from updating state if the app unmounts first
    return () => {
      active = false
    }
  }, [])

  // step 1: keep only the devices that match the search text
  // step 2: keep only the devices of the chosen category
  // step 3: keep only devices that are in stock (if the switch is on)
  // step 4: sort the list by price if the user asked for it
  let visible = devices?.filter((device) =>
    device.title.toLowerCase().includes(search.toLowerCase()),
  )
  if (category !== "All categories")
    visible = visible.filter((device) => device.category === category)
  if (inStock) visible = visible.filter((device) => device.stock > 0)
  if (sort === "low") visible = visible.sort((a, b) => a.priceAFN - b.priceAFN)
  if (sort === "high") visible = visible.sort((a, b) => b.priceAFN - a.priceAFN)

  // comparison
  const toggleCompare = (id) => {
    if (compareIds.includes(id)) {
      setCompareIds(compareIds.filter((item) => item !== id))
      setMessage("Device removed from comparison.")
      return
    }
    if (compareIds.length >= MAX_COMPARE) {
      setMessage(`You can compare up to ${MAX_COMPARE} devices. Remove one first.`)
      return
    }
    setCompareIds([...compareIds, id])
    setMessage("Device added to comparison.")
  }

  const removeFromCompare = (id) =>
    setCompareIds(compareIds.filter((item) => item !== id))

  const resetCompare = () => setCompareIds([])

  // shopping cart
  const addToCart = (id) => {
    const device = devices.find((item) => item.id === id)
    if (!device || device.stock === 0) return
    if (!cart[id]) setCart({ ...cart, [id]: 1 })
    setMessage("Device added to your shopping list.")
  }

  const changeQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id)
      return
    }
    const device = devices.find((item) => item.id === id)
    const stock = device ? device.stock : 0
    setCart({ ...cart, [id]: Math.min(quantity, stock) })
  }

  const removeFromCart = (id) => {
    const updated = { ...cart }
    delete updated[id]
    setCart(updated)
  }

  // catalogue management
  const addDevice = (draft) => {
    const newDevice = {
      ...draft,
      id: Date.now(),
      image: imageForCategory(draft.category),
    }
    setDevices([...devices, newDevice])
    setMessage("Catalogue record saved.")
  }

  const saveDevice = (id, draft) => {
    const updated = devices.map((device) =>
      device.id === id ? { ...device, ...draft } : device,
    )
    setDevices(updated)
    setMessage("Catalogue record saved.")
  }

  const removeDevice = (id) => {
    setDevices(devices.filter((device) => device.id !== id))
    removeFromCompare(id)
    removeFromCart(id)
  }

  const sendEnquiry = (enquiry) => {
    setEnquiries([...enquiries, enquiry])
  }

  // everything pages and the header need, ready to spread as props
  const app = {
    devices,
    visible,
    compareIds,
    cart,
    budget,
    setBudget,
    detail,
    message,
    enquiries,
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
    inStock,
    setInStock,
    toggleCompare,
    removeFromCompare,
    resetCompare,
    addToCart,
    changeQuantity,
    removeFromCart,
    addDevice,
    saveDevice,
    removeDevice,
    openDetail: setDetail,
    closeDetail: () => setDetail(null),
    sendEnquiry,
  }

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-slate-500">
        Loading devices…
      </div>
    )

  if (loadError)
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-rose-600">
        Could not load devices: {loadError}
      </div>
    )

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Layout is the parent route, pages render inside its <Outlet /> */}
        <Route element={<Layout app={app} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/compare" element={<ComparePlanPage />} />
          <Route path="/manage" element={<ManageDevicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
