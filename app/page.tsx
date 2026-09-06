import { Nav, Hero, Marquee, About, Services, Gallery, Trainers, Connect, Testimonials, CTA, Footer, WhatsAppFloat } from '@/components/gym/sections'

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <Trainers />
        <Connect />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
