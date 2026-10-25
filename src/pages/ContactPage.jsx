import { useOutletContext } from "react-router-dom"

import PageHeading from "../components/PageHeading"
import ContactForm from "../components/ContactForm"

const ContactPage = () => {
  const { enquiries, sendEnquiry } = useOutletContext()

  return (
    <div className="page-shell pt-[58px] pb-[90px] max-sm:pt-[42px] max-sm:pb-[70px]">
      <PageHeading
        title="Contact"
        text="Ask a question about the sample catalogue."
      />
      <ContactForm enquiries={enquiries} sendEnquiry={sendEnquiry} />
    </div>
  )
}

export default ContactPage
