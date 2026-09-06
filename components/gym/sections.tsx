'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, MapPin, Phone, MessageCircle, Dumbbell, HeartPulse, Users,
  Sparkles, Zap, ShieldCheck, ChevronRight, ChevronLeft, ChevronDown, Send,
} from 'lucide-react'

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`

// ---- Template config: edit these to re-skin this template for a new gym ----
const GYM_NAME = 'Global Gym'
const WHATSAPP_NUMBER = '919876543210' // digits only, country code first, no + or spaces
const ADDRESS_LINE = '2nd Floor, R City Mall Road, Ghatkopar West, Mumbai 400086'
const waLink = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${GYM_NAME}, ${ADDRESS_LINE}`)}`
const TRIAL_MESSAGE = `Hi! I'd like to book a free trial at ${GYM_NAME} Ghatkopar.`
const ENQUIRY_MESSAGE = `Hi! I'd like to know more about ${GYM_NAME} Ghatkopar.`
const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(waLink(ENQUIRY_MESSAGE))}`
// -----------------------------------------------------------------------------

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function IconWhatsapp({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  )
}
function IconYoutube({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 8.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-.9C16.4 4.8 12 4.8 12 4.8h0s-4.4 0-7.1.2c-.4 0-1.3 0-2.1.9C2.2 6.6 2 8.2 2 8.2S1.8 10 1.8 11.9v1.8c0 1.9.2 3.7.2 3.7s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.3.2 7.3.2s4.4 0 7.1-.2c.4 0 1.3 0 2.1-.9.6-.7.8-2.3.8-2.3s.2-1.9.2-3.7v-1.8c0-1.9-.2-3.7-.2-3.7ZM9.9 15.3V8.9l5.8 3.2-5.8 3.2Z" />
    </svg>
  )
}

const navLinks = ['About', 'Services', 'Gallery', 'Trainers', 'Contact']

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden items-center justify-center gap-6 bg-primary py-2 text-primary-foreground sm:flex">
        <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest hover:opacity-80">
          <MapPin size={13} /> {ADDRESS_LINE}
        </a>
        <span className="h-3 w-px bg-primary-foreground/40" />
        <a href="tel:+919876543210" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest hover:opacity-80">
          <Phone size={13} /> +91 98765 43210
        </a>
      </div>
      <div className="border-b border-border/50 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="font-heading text-2xl tracking-wide text-foreground">GLOBAL<span className="text-primary">.</span></a>
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map(x => (
              <a key={x} href={`#${x.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">{x}</a>
            ))}
            <a href={waLink(TRIAL_MESSAGE)} target="_blank" rel="noreferrer" className="bg-primary px-5 py-3 text-xs font-black uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5">Start Free Trial</a>
          </nav>
          <a href={waLink(TRIAL_MESSAGE)} target="_blank" rel="noreferrer" aria-label="Start free trial" className="bg-primary px-3 py-2 text-xs font-black uppercase text-primary-foreground lg:hidden">Trial</a>
        </div>
      </div>
    </header>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden">
      <video autoPlay muted loop playsInline poster={img('photo-1534438327276-14e5300c3a48')} className="absolute inset-0 h-full w-full object-cover opacity-45">
        {/* Drop an mp4 at /public/hero-video.mp4 to autoplay a loop here — falls back to the poster image until then */}
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/10" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-44 lg:px-8 lg:pb-28">
        <Reveal>
          <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="mb-5 flex w-fit items-center gap-3 font-mono text-sm font-bold uppercase tracking-[.3em] text-primary hover:opacity-80 sm:text-base">
            <span className="h-px w-10 bg-primary" /> Ghatkopar, Mumbai
          </a>
          <h1 className="max-w-4xl font-heading text-[clamp(4.5rem,13vw,10.5rem)] leading-[.8] tracking-tight text-foreground">SERIOUSLY<br /><span className="text-primary">FUN</span> FITNESS</h1>
          <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground">A high-energy training floor built for real people, real progress, and a community that makes showing up the best part.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waLink(TRIAL_MESSAGE)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary px-6 py-4 text-sm font-black uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-1">Start Free Trial <ArrowUpRight size={17} /></a>
            <a href="#services" className="inline-flex items-center gap-2 border border-foreground/40 px-6 py-4 text-sm font-black uppercase tracking-wider text-foreground hover:border-primary hover:text-primary">Explore Programs</a>
          </div>
        </Reveal>
      </div>
      <div className="absolute bottom-0 right-0 hidden h-20 w-2/5 -skew-x-[25deg] translate-x-1/4 bg-primary lg:block" />
      <a href="#about" aria-label="Scroll down" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-foreground/70 hover:text-primary lg:block">
        <ChevronDown size={26} />
      </a>
    </section>
  )
}

const tickerItems = ['STRENGTH', 'CONDITIONING', 'ZUMBA', 'RECOVERY', 'COMMUNITY', 'RESULTS']
export function Marquee() {
  const items = [...tickerItems, ...tickerItems, ...tickerItems]
  return (
    <div className="overflow-hidden border-y border-border bg-surface py-3">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-xs font-bold uppercase tracking-[.3em] text-muted-foreground">
            {t} <span className="text-primary">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal>
          <div className="group relative overflow-hidden">
            <img className="h-[430px] w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" src={img('photo-1581009146145-b5ef050c2e1e')} alt="Athlete training with a barbell" />
            <div className="absolute -bottom-4 -right-4 bg-primary p-5 font-heading text-4xl leading-none text-primary-foreground">NO<br />EXCUSES.</div>
          </div>
        </Reveal>
        <Reveal>
          <p className="eyebrow">THE GLOBAL WAY</p>
          <h2 className="section-title mt-4">TRAIN HARD.<br /><span className="text-primary">LIVE LOUD.</span></h2>
          <p className="mt-7 max-w-lg text-muted-foreground leading-7">Global Gym is more than a place to lift. We built a seriously fun training community where big energy meets smart programming, and every member has a reason to come back tomorrow.</p>
          <p className="mt-4 max-w-lg text-muted-foreground leading-7">No intimidation. No ego. Just good people, great coaching, and the kind of results you can feel.</p>
          <a href="#services" className="mt-8 inline-flex items-center gap-2 font-bold uppercase tracking-widest text-primary">What we do <ChevronRight size={17} /></a>
        </Reveal>
      </div>
    </section>
  )
}

const services = [
  [Dumbbell, 'Strength Training', 'Machines, free weights, and a plan that gets you stronger.'],
  [HeartPulse, 'Cardio', 'Build your engine with treadmills, cycles, and high-intensity conditioning.'],
  [Users, 'Group Classes', 'Big energy, loud music, zero judgement. Find your people.'],
  [ShieldCheck, 'Personal Training', 'One-on-one coaching that makes every rep count.'],
  [Zap, 'Zumba', 'Dance, sweat, and forget you are working out.'],
  [Sparkles, 'Spa & Recovery', 'Reset hard with recovery zones built for your next session.'],
] as const
export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">THE PLAYBOOK</p>
          <h2 className="section-title mt-4">EVERY WAY<br /><span className="text-primary">TO MOVE.</span></h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([Icon, title, desc], i) => (
            <Reveal key={title} delay={i * 0.06}>
              <article className="group min-h-60 bg-background p-7 transition-colors hover:bg-surface">
                <div className="mb-12 flex items-start justify-between">
                  <Icon className="text-primary transition-transform duration-300 group-hover:scale-110" size={29} strokeWidth={1.5} />
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="font-heading text-3xl tracking-wide text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const gallery = ['photo-1534438327276-14e5300c3a48', 'photo-1571019613454-1cb2f99b2d8b', 'photo-1583454110551-21f2fa2afe61', 'photo-1517836357463-d25dfeac3438', 'photo-1581009146145-b5ef050c2e1e', 'photo-1546483875-ad9014c88eba']
export function Gallery() {
  return (
    <section id="gallery" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">THE FLOOR</p>
              <h2 className="section-title mt-4">SEE YOU<br /><span className="text-primary">INSIDE.</span></h2>
            </div>
            <span className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground sm:block">Scroll / Sweat / Repeat</span>
          </div>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((id, i) => (
            <Reveal key={id} delay={i * 0.05} className={i === 0 || i === 5 ? 'col-span-2 overflow-hidden' : 'overflow-hidden'}>
              <img className={`w-full object-cover grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0 ${i === 0 || i === 5 ? 'h-72 md:h-96' : 'h-56 md:h-72'}`} src={img(id)} alt={`Global Gym training space ${i + 1}`} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const trainers = [
  ['Vineet Mankani', 'Strength & Conditioning', 'photo-1567013127542-490d757e51fc'],
  ['Anaya Shah', 'Functional Training', 'photo-1594381898411-846e7d193883'],
  ['Vikram Singh', 'Performance Coach', 'photo-1534438327276-14e5300c3a48'],
  ['Nisha Patil', 'Zumba & Mobility', 'photo-1549476464-37392f717541'],
  ['Rohan Deshmukh', 'Strength Coach', 'photo-1571019613454-1cb2f99b2d8b'],
  ['Sana Iyer', 'Group Fitness', 'photo-1583454110551-21f2fa2afe61'],
  ['Karan Bhatt', 'Recovery & Mobility', 'photo-1517836357463-d25dfeac3438'],
] as const
export function Trainers() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const scroll = (dir: 1 | -1) => scrollerRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })
  return (
    <section id="trainers" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">THE CREW</p>
              <h2 className="section-title mt-4">MEET YOUR<br /><span className="text-primary">COACHES.</span></h2>
            </div>
            <div className="hidden gap-2 sm:flex">
              <button onClick={() => scroll(-1)} aria-label="Scroll left" className="border border-border p-3 text-foreground transition-colors hover:border-primary hover:text-primary">
                <ChevronLeft size={18} />
              </button>
              <button onClick={() => scroll(1)} aria-label="Scroll right" className="border border-border p-3 text-foreground transition-colors hover:border-primary hover:text-primary">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>
        <div ref={scrollerRef} className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {trainers.map(([name, specialty, id], i) => (
            <Reveal key={name} delay={i * 0.05} className="w-64 shrink-0 snap-start sm:w-72">
              <article className="group">
                <div className="overflow-hidden">
                  <img className="aspect-[4/5] w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0" src={img(id)} alt={`${name}, ${specialty}`} />
                </div>
                <h3 className="mt-5 font-heading text-2xl tracking-wide">{name}</h3>
                <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-primary">{specialty}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:hidden">Swipe to see more →</p>
      </div>
    </section>
  )
}

export function Testimonials() {
  const quotes = [
    ['"Finally, a gym where I actually look forward to showing up. The coaches remember your name and your goals."', 'PRIYA K.'],
    ['"The group classes are absolute fire. I have more energy, more confidence, and my jeans fit better."', 'ARJUN R.'],
    ['"Global feels like a community, not a membership. Best training decision I have made in Mumbai."', 'MEERA S.'],
  ]
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">MEMBER ENERGY</p>
          <h2 className="section-title mt-4">GOOD VIBES.<br /><span className="text-primary">REAL RESULTS.</span></h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {quotes.map(([quote, name], i) => (
            <Reveal key={name} delay={i * 0.08}>
              <blockquote className="h-full border-l-2 border-primary bg-surface p-7 transition-transform duration-300 hover:-translate-y-1">
                <p className="text-lg leading-8 text-foreground">{quote}</p>
                <footer className="mt-8 font-mono text-[10px] font-bold tracking-widest text-primary">— {name}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Connect() {
  const cards = [
    { icon: MessageCircle, title: 'WhatsApp Us', desc: 'Fastest way to reach us', href: waLink(ENQUIRY_MESSAGE), external: true },
    { icon: Phone, title: 'Call Us', desc: '+91 98765 43210', href: 'tel:+919876543210', external: false },
    { icon: MapPin, title: 'Visit Us', desc: 'Get directions', href: MAPS_LINK, external: true },
  ]
  return (
    <section id="contact" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">GET IN TOUCH</p>
          <h2 className="section-title mt-4">LET&apos;S GET<br /><span className="text-primary">STARTED.</span></h2>
          <p className="mt-6 max-w-lg text-muted-foreground leading-7">Reach out however&apos;s easiest — WhatsApp, a call, or drop your details below and we&apos;ll get back to you.</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noreferrer' : undefined}
                className="group flex h-full flex-col justify-between border border-border p-6 transition-colors hover:border-primary hover:bg-background"
              >
                <c.icon className="text-primary transition-transform duration-300 group-hover:scale-110" size={26} strokeWidth={1.5} />
                <div>
                  <p className="mt-8 font-heading text-xl tracking-wide">{c.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
          <Reveal delay={0.18}>
            <div className="flex h-full flex-col items-center justify-center gap-3 border border-border p-6 text-center">
              <a href={waLink(ENQUIRY_MESSAGE)} target="_blank" rel="noreferrer">
                <img src={QR_SRC} alt="Scan to chat with us on WhatsApp" className="h-28 w-28 bg-white p-1.5" />
              </a>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Scan to WhatsApp</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          {/* FormSubmit: replace your-email@example.com below with the gym's real inbox, then confirm the activation email FormSubmit sends on first submit */}
          <form action="https://formsubmit.co/your-email@example.com" method="POST" className="grid max-w-2xl gap-4 border border-border bg-background p-7 sm:grid-cols-2">
            <input type="hidden" name="_subject" value={`New enquiry — ${GYM_NAME} website`} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="name" required placeholder="Name" className="border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none sm:col-span-1" />
            <input type="tel" name="phone" required placeholder="Phone" className="border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none sm:col-span-1" />
            <textarea name="message" required placeholder="Message" rows={4} className="border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none sm:col-span-2" />
            <button type="submit" className="inline-flex w-fit items-center gap-2 bg-primary px-6 py-3 text-xs font-black uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5 sm:col-span-2">
              Send Message <Send size={15} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <Reveal>
          <p className="font-mono text-xs font-bold uppercase tracking-[.3em] opacity-75">YOUR NEXT REP STARTS HERE</p>
          <h2 className="mt-4 max-w-3xl font-heading text-6xl leading-[.85] tracking-tight lg:text-8xl">READY TO HAVE<br />SOME FUN?</h2>
        </Reveal>
        <a href={waLink(TRIAL_MESSAGE)} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-3 border border-primary-foreground/50 px-6 py-4 text-sm font-black uppercase tracking-wider hover:bg-primary-foreground hover:text-primary">
          <MessageCircle size={18} /> Book a free trial
        </a>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-background py-14">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-3 lg:px-8">
        <div>
          <a href="#top" className="font-heading text-3xl">GLOBAL<span className="text-primary">.</span></a>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">Seriously fun fitness for Ghatkopar. Come for the workout, stay for the crew.</p>
          <div className="mt-6 flex gap-4">
            <a href="#" aria-label="Instagram" className="text-foreground transition-colors hover:text-primary"><IconInstagram /></a>
            <a href={waLink(ENQUIRY_MESSAGE)} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-foreground transition-colors hover:text-primary"><IconWhatsapp /></a>
            <a href="#" aria-label="YouTube" className="text-foreground transition-colors hover:text-primary"><IconYoutube /></a>
          </div>
        </div>
        <div>
          <p className="eyebrow">FIND US</p>
          <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="mt-4 flex gap-3 text-sm leading-6 text-muted-foreground hover:text-primary">
            <MapPin size={18} className="shrink-0 text-primary" /> {ADDRESS_LINE}
          </a>
          <p className="mt-4 flex gap-3 text-sm text-muted-foreground"><Phone size={16} className="text-primary" /> +91 98765 43210</p>
        </div>
        <div>
          <p className="eyebrow">QUICK LINKS</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
            {navLinks.map(x => <a key={x} href={`#${x.toLowerCase()}`} className="hover:text-primary">{x}</a>)}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-border px-5 pt-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} [Your Gym Name] · Built to move
      </div>
    </footer>
  )
}

export function WhatsAppFloat() {
  return (
    <a
      href={waLink(ENQUIRY_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
      <IconWhatsapp size={26} />
    </a>
  )
}
