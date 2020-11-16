import React from "react"
import Layout from "../components/layout"
import Prez from "../components/Presentation/presentation"
import Presta from "../components/Presta/presta"
import Story from "../components/Story/story"
import Testimonial from "../components/Testimonial/testimonial"
import Contact from "../components/Contact/contact"

export default function Home() {
  return (
    <Layout>
     
      <Prez />
      <Presta />
      <Story />
      <Testimonial />
      <Contact />
    </Layout>
  )
}
