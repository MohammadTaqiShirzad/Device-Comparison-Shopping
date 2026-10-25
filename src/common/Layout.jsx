import Header from "./Header"
import Footer from "./Footer"
import DeviceModal from "../components/DeviceModal"
import { Outlet } from "react-router-dom"

// page shell: header, page content, footer, and the shared details modal.
// the full app object comes as a prop, pages read it through <Outlet /> context.
const Layout = ({ app }) => {
  const { detail, closeDetail, addToCart, compareIds, cart } = app

  return (
    <div className="min-h-screen flex flex-col">
      <Header compareIds={compareIds} cart={cart} />
      <main className="flex-1">
        <Outlet context={app} />
      </main>
      <Footer />
      {detail && (
        <DeviceModal
          device={detail}
          onClose={closeDetail}
          onAdd={() => {
            addToCart(detail.id)
            closeDetail()
          }}
        />
      )}
    </div>
  )
}

export default Layout
