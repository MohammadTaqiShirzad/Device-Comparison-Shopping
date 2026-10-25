import { useState } from "react"
import { LuArrowRight, LuCheck, LuInfo } from "react-icons/lu"

import Notice from "./Notice"

const emptyEnquiry = { alias: "", email: "", message: "" }

const ContactForm = ({ enquiries, sendEnquiry }) => {
  const [sent, setSent] = useState(false)
  const [enquiry, setEnquiry] = useState(emptyEnquiry)

  const update = (key) => (e) =>
    setEnquiry({ ...enquiry, [key]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    // save the enquiry in app state so it stays for this visit
    sendEnquiry(enquiry)
    setSent(true)
  }

  if (sent)
    return (
      <div className="card mx-auto max-w-[580px] p-[45px] text-center">
        <span className="mx-auto mb-[18px] grid h-[60px] w-[60px] place-items-center rounded-full bg-success-soft text-success">
          <LuCheck size={30} />
        </span>
        <h2 className="text-[30px] font-bold tracking-[-.035em] text-ink">
          Sample enquiry received
        </h2>
        <p className="leading-normal text-muted">
          Thanks for trying the form. This is a practice submission, so no
          message was sent.
        </p>
        <button
          className="btn-secondary mx-auto"
          onClick={() => {
            setEnquiry(emptyEnquiry)
            setSent(false)
          }}
        >
          Send another enquiry
        </button>
      </div>
    )

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_.9fr]">
      <div className="card p-8">
        <span className="mb-5 grid h-[42px] w-[42px] place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-transparent text-primary ring-1 ring-primary/30">
          <LuInfo size={18} />
        </span>
        <h2 className="text-[30px] font-bold tracking-[-.035em] text-ink">
          Before you send
        </h2>
        <p className="text-sm leading-[1.75] text-muted">
          This form demonstrates a sample enquiry flow. It does not contact a
          retailer or request a real quotation.
        </p>
        <Notice>
          Never include payment information or other sensitive personal data in
          a practice message.
        </Notice>
        {enquiries.length > 0 && (
          <div className="mt-4">
            <h3 className="heading mb-3 text-sm">
              Enquiries this session ({enquiries.length})
            </h3>
            {enquiries.map((item, index) => (
              <div
                key={index}
                className="mb-2 rounded-xl border border-line bg-soft px-4 py-3 text-left text-xs text-text-list"
              >
                <strong className="text-ink">{item.alias}</strong> ·{" "}
                {item.email}
                <p className="m-0 mt-1 text-muted">{item.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <form className="card flex flex-col gap-4 p-8" onSubmit={submit}>
        <label className="label">
          <span>Buyer alias</span>
          <input
            required
            placeholder="e.g. KabulLearner"
            value={enquiry.alias}
            onChange={update("alias")}
          />
        </label>
        <label className="label">
          <span>Email address</span>
          <input
            required
            type="email"
            placeholder="you@example.com"
            value={enquiry.email}
            onChange={update("email")}
          />
        </label>
        <label className="label">
          <span>Message</span>
          <textarea
            required
            rows={6}
            placeholder="Tell us what you would like to compare or plan..."
            value={enquiry.message}
            onChange={update("message")}
          />
        </label>
        <button className="btn-primary btn-lg" type="submit">
          Submit sample enquiry <LuArrowRight size={18} />
        </button>
      </form>
    </div>
  )
}

export default ContactForm
