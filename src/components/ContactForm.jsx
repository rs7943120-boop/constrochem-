import { useState } from 'react'
import { ArrowRight, BadgeHelp, FlaskConical, Handshake, Headset, LoaderCircle } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import labImage from '../assets/hero imged.png'

const products = ['Wax Products', 'UV Products', 'Carbon Black', 'Antioxidants', 'Speciality Grade', 'Soda Ash', 'Curing Agents', 'Other Products', 'General Inquiry']
const services = [
  { title: 'Product Inquiries', detail: 'Get detailed information', Icon: FlaskConical },
  { title: 'Technical Support', detail: 'Expert guidance', Icon: Headset },
  { title: 'Quotation Request', detail: 'Discuss your requirements', Icon: BadgeHelp },
  { title: 'Partnership Opportunities', detail: 'Let’s grow together', Icon: Handshake },
]
const initialValues = { name: '', company: '', email: '', phone: '', country: '', interest: '', message: '' }

function ContactForm() {
  const reduceMotion = useReducedMotion()
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const update = (event) => {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }))
    setErrors((current) => ({ ...current, [event.target.name]: '' }))
    setStatus('idle')
  }

  const submit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    for (const field of ['name', 'company', 'email', 'phone', 'message']) {
      if (!values[field].trim()) nextErrors[field] = 'This field is required.'
    }
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = 'Enter a valid email address.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus('error')
      return
    }
    setStatus('loading')
    window.setTimeout(() => setStatus('demo'), 700)
  }

  const inputClass = (field) => `mt-1.5 min-h-11 w-full rounded-xl border bg-white px-3.5 text-sm text-[#348921] outline-none transition placeholder:text-[#348921] focus:border-[#348921]/20 focus:ring-2 focus:ring-[#348921]/10 ${errors[field] ? 'border-[#348921]/20' : 'border-[#348921]/20'}`
  const labelClass = 'block text-xs font-semibold text-[#348921]'
  const errorText = (field) => errors[field] ? <span className="mt-1 block text-[11px] text-[#348921]">{errors[field]}</span> : null

  return (
    <section id="contact-form" aria-labelledby="contact-form-heading" className="scroll-mt-20 bg-[#FFFFFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-3xl border border-[#348921]/20 bg-white p-5 shadow-[0_18px_55px_rgba(52,137,33,0.08)] sm:p-8 lg:p-9">
          <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#348921]">Start a conversation</p>
          <h2 id="contact-form-heading" className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#348921] sm:text-3xl">Send Us a Message</h2>
          <p className="mt-2 text-sm leading-6 text-[#348921]">Fill in the details below and our team will get back to you soon.</p>
          <form onSubmit={submit} noValidate className="mt-7 grid gap-x-4 gap-y-4 sm:grid-cols-2">
            <label className={labelClass}>Your Name *<input autoComplete="name" name="name" value={values.name} onChange={update} className={inputClass('name')} aria-invalid={Boolean(errors.name)} />{errorText('name')}</label>
            <label className={labelClass}>Your Company Name *<input autoComplete="organization" name="company" value={values.company} onChange={update} className={inputClass('company')} aria-invalid={Boolean(errors.company)} />{errorText('company')}</label>
            <label className={labelClass}>Your Email *<input autoComplete="email" type="email" name="email" value={values.email} onChange={update} className={inputClass('email')} aria-invalid={Boolean(errors.email)} />{errorText('email')}</label>
            <label className={labelClass}>Contact Number *<input autoComplete="tel" type="tel" name="phone" value={values.phone} onChange={update} className={inputClass('phone')} aria-invalid={Boolean(errors.phone)} />{errorText('phone')}</label>
            <label className={labelClass}>Country<select name="country" value={values.country} onChange={update} className={inputClass('country')}><option value="">Select country</option><option>India</option><option>United Arab Emirates</option><option>United States</option><option>United Kingdom</option><option>Other</option></select></label>
            <label className={labelClass}>Product Interest<select name="interest" value={values.interest} onChange={update} className={inputClass('interest')}><option value="">Select product</option>{products.map((product) => <option key={product}>{product}</option>)}</select></label>
            <label className={`${labelClass} sm:col-span-2`}>Your Message *<textarea name="message" value={values.message} onChange={update} rows="4" className={`${inputClass('message')} py-3`} aria-invalid={Boolean(errors.message)} />{errorText('message')}</label>
            {status === 'error' && <p role="alert" className="text-xs font-medium text-[#348921] sm:col-span-2">Please correct the highlighted fields.</p>}
            {status === 'demo' && <p role="status" className="rounded-xl bg-white px-4 py-3 text-xs leading-5 text-[#348921] sm:col-span-2">Demo only: your details have not been sent. Connect this form to a backend service to enable delivery.</p>}
            <p className="text-[11px] leading-5 text-[#348921] sm:col-span-2">This form is a frontend demo and is not connected to a message service.</p>
            <button type="submit" disabled={status === 'loading'} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#348921] px-6 text-sm font-semibold text-white transition hover:bg-[#348921] disabled:cursor-wait disabled:opacity-70 sm:col-span-2 sm:justify-self-start">{status === 'loading' ? <>Submitting… <LoaderCircle size={16} className="animate-spin" /></> : <>Send Message <ArrowRight size={16} /></>}</button>
          </form>
        </motion.div>
        <div className="flex flex-col overflow-hidden rounded-3xl bg-[#348921] text-white shadow-lg">
          <div className="relative min-h-[250px] flex-1 overflow-hidden sm:min-h-[330px]"><img src={labImage} alt="Chemical laboratory glassware" className="absolute inset-0 h-full w-full object-cover object-[65%_center] transition duration-700 hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-[#348921]/80 via-transparent to-transparent" /><p className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.18em] text-white sm:bottom-7 sm:left-7">Specialist support, whenever you need it</p></div>
          <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-5">{services.map(({ title, detail, Icon }, index) => <motion.div key={title} initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-3 transition hover:-translate-y-0.5 hover:bg-white/[0.1]"><Icon size={18} className="shrink-0 text-[#348921]" aria-hidden="true" /><span><span className="block text-xs font-semibold">{title}</span><span className="mt-1 block text-[11px] text-white/65">{detail}</span></span></motion.div>)}</div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

