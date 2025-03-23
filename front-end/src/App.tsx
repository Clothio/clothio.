import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import CategoryPage from './pages/CategoryPage';
import AIDesignPage from './pages/AIDesignPage';
import RentalServicePage from './pages/RentalServicePage';
import LaundryServicePage from './pages/LaundryServicePage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/ai-design" element={<AIDesignPage />} />
            <Route path="/rental-service" element={<RentalServicePage />} />
            <Route path="/laundry-service" element={<LaundryServicePage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;