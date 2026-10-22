import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductsHero from '../components/ProductsHero'
import ProductCategories from '../components/ProductCategories'
import ProductsDetail from '../components/ProductsDetail'
import ProductCTA from '../components/ProductCTA'

function ProductsPage() {
  return (
    <>
      <Navbar activeSection="products" />
      <main>
        <ProductsHero />
        <ProductCategories />
        <ProductsDetail />
        <ProductCTA />
      </main>
      <Footer />
    </>
  )
}

export default ProductsPage

