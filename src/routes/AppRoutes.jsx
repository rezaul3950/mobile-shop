import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Cart from '../pages/Cart/Cart'
import Checkout from '../pages/Checkout/Checkout'
import Login from '../pages/Login/Login'
import Orders from '../pages/Orders/Orders'
import Shops from '../pages/Shops/Shops'
import Categories from '../pages/Categories/Categories'
import Favorite from '../pages/Favorite/Favorite'
import Profile from '../pages/Profile/Profile'
import CategorySmartphones from '../pages/CategorySmartphones/CategorySmartphones'
import CategoryTablets from '../pages/CategoryTablets/CategoryTablets'
import CategoryiPhone from '../pages/CategoryiPhone/CategoryiPhone'
import CategorySamsung from '../pages/CategorySamsung/CategorySamsung'
import CategoryAccessories from '../pages/CategoryAccessories/CategoryAccessories'
import CategoryWearables from '../pages/CategoryWearables/CategoryWearables'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/smartphones" element={<CategorySmartphones />} />
      <Route path="/category/tablets" element={<CategoryTablets />} />
      <Route path="/category/iphone" element={<CategoryiPhone />} />
      <Route path="/category/samsung" element={<CategorySamsung />} />
      <Route path="/category/accessories" element={<CategoryAccessories />} />
      <Route path="/category/wearables" element={<CategoryWearables />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/shops" element={<Shops />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default AppRoutes
