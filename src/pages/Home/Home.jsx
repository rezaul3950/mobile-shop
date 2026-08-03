import Hero from '../../components/hero/Hero'
import TopBrands from '../../components/top-brands/TopBrands'
import Categories from "../../components/Categories/Categories";
import Deals from '../../components/deals/Deals'
import Products from '../../components/products/Products'
import About from '../../components/about/About'
import Contact from '../../components/contact/Contact'

function Home() {
  return (
    <>
      <Hero />
      <TopBrands />
      <About />
      <Categories />
      <Deals />
      <Products />
      <Contact />
    </>
  )
}

export default Home