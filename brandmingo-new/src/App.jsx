import { useEffect, useState, lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import AOS from "aos";

import "@fortawesome/fontawesome-free/css/all.min.css";

// CSS
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "aos/dist/aos.css";

// COMPONENTS
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";

// admin
import ProtectedRoute from "./admin/ProtectedRoute.jsx";

// LAZY COMPONENTS
const Cursor = lazy(() => import("./components/Cursor/Cursor"));

const BackToTop = lazy(() => import("./components/BackToTop/BackToTop"));

const NewFooter = lazy(() => import("./components/Footer/NewFooter"));

const FloatingContact = lazy(
  () => import("./components/FloatingPopup/FloatingContact"),
);

const EnquiryPopup = lazy(
  () => import("./components/EnquiryPopup/EnquiryPopup"),
);

// ADMIN
const AdminLayout = lazy(() => import("./admin/AdminLayout/AdminLayout"));

const Dashboard = lazy(() => import("./admin/Dashboard/Dashboard"));
const BlogsAdmin = lazy(() => import("./admin/BlogsAdmin/BlogsAdmin"));
const AddBlog = lazy(() => import("./admin/AddBlog/AddBlog"));
const EditBlog = lazy(() => import("./admin/EditBlog/EditBlog"));

const Login = lazy(() => import("./admin/LoginAdmin/Login"));

// WEBSITE PAGES
const NewHome = lazy(() => import("./pages/Home/NewHome"));
const BlogDetails = lazy(() => import("./pages/Blogs/BlogDetails/BlogDetails"));

const About = lazy(() => import("./pages/About/About"));

const PortfolioPage = lazy(
  () => import("./pages/PortfolioPage/PortfolioPage.jsx"),
);

const Blogs = lazy(() => import("./pages/Blogs/Blogs"));

const Services = lazy(() => import("./pages/Services/Services"));

const ContactUs = lazy(() => import("./pages/Contact/ContactUs"));

const WebDevelopmentNew = lazy(
  () => import("./pages/Web Development/WebDevelopmentNew"),
);

const AdsAndCampaigns = lazy(
  () => import("./pages/AdsAndCampaigns/AdsAndCampaigns"),
);

const SocialMediaManagement = lazy(
  () => import("./pages/SocialMediaManagement/SocialMediaManagement"),
);

const UiUx = lazy(() => import("./pages/Uiux/UiUx"));

const SEOOptimizing = lazy(
  () => import("./pages/SEO Optimizing/SEOOptimizing"),
);

const EcomManagement = lazy(
  () => import("./pages/Ecom Management/EcomManagement"),
);

const BrandIdentity = lazy(
  () => import("./pages/Brand Identity/BrandIdentity"),
);

// sub-services pages

const WordpressDetails = lazy(
  () => import("./pages/Web Development/WordpressDetails"),
);
const WoocommDetails = lazy(
  () => import("./pages/Web Development/WoocommDetails"),
);
const ShopifyDetails = lazy(
  () => import("./pages/Web Development/ShopifyDetails"),
);
const ReactDetails = lazy(() => import("./pages/Web Development/ReactDetails"));
const PHPDetails = lazy(() => import("./pages/Web Development/PHPDetails"));
const CRM = lazy(() => import("./pages/Web Development/CRM"));
const PerformanceMarketing = lazy(
  () => import("./pages/AdsAndCampaigns/PerformanceMarketing"),
);
const GoogleAds = lazy(() => import("./pages/AdsAndCampaigns/GoogleAds"));
const FbInstAds = lazy(() => import("./pages/AdsAndCampaigns/FbInstAds"));
const LinkedinAds = lazy(() => import("./pages/AdsAndCampaigns/LinkedinAds"));
const BrandAwareness = lazy(
  () => import("./pages/SocialMediaManagement/BrandAwareness"),
);
const StrategyPlanning = lazy(
  () => import("./pages/SocialMediaManagement/StrategyPlanning"),
);
const ContentCreation = lazy(
  () => import("./pages/SocialMediaManagement/ContentCreation"),
);
const EngagementGrowth = lazy(
  () => import("./pages/SocialMediaManagement/EngagementGrowth"),
);
const CustomWebDesign = lazy(() => import("./pages/Uiux/CustomWebDesign"));
const CorporateBranding = lazy(() => import("./pages/Uiux/CorporateBranding"));
const MobileAppDesign = lazy(() => import("./pages/Uiux/MobileAppDesign"));
const ProductDesign = lazy(() => import("./pages/Uiux/ProductDesign"));
const OrganicTraffic = lazy(
  () => import("./pages/SEO Optimizing/SEOOptimizing"),
);
const LocalSDominance = lazy(
  () => import("./pages/SEO Optimizing/LocalSDominance"),
);
const AmazonManServices = lazy(
  () => import("./pages/Ecom Management/AmazonManServices"),
);
const FlipkartManServices = lazy(
  () => import("./pages/Ecom Management/FlipkartManServices"),
);
const ShopsyManServices = lazy(
  () => import("./pages/Ecom Management/ShopsyManServices"),
);
const SnapdealManServices = lazy(
  () => import("./pages/Ecom Management/SnapdealManServices"),
);
const LogoDesign = lazy(() => import("./pages/Brand Identity/LogoDesign"));
const LabelDesigning = lazy(
  () => import("./pages/Brand Identity/LabelDesigning"),
);
const CorporateIdentityDesi = lazy(
  () => import("./pages/Brand Identity/CorporateIdentityDesi"),
);
const BrandIdentityDesign = lazy(
  () => import("./pages/Brand Identity/BrandIdentityDesign"),
);

// SCROLL TO TOP
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [showLoader, setShowLoader] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      disable: window.innerWidth < 768,
    });

    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (!hasLoaded) {
      setShowLoader(true);

      const handleLoad = () => {
        setShowLoader(false);

        sessionStorage.setItem("hasLoaded", "true");
      };

      window.addEventListener("load", handleLoad);

      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <BrowserRouter>
      <AppContent
        showLoader={showLoader}
        isPopupOpen={isPopupOpen}
        openPopup={openPopup}
        closePopup={closePopup}
      />
    </BrowserRouter>
  );
}

function AppContent({ showLoader, isPopupOpen, openPopup, closePopup }) {
  const location = useLocation();

  useEffect(() => {
    const handlePopup = () => {
      openPopup();
    };

    window.addEventListener("open-enquiry-popup", handlePopup);

    return () => {
      window.removeEventListener("open-enquiry-popup", handlePopup);
    };
  }, []);

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />

      {/* LOADER */}
      {/* {showLoader && <Preloader />}/ */}
      {showLoader && !isAdminRoute && <Preloader />}

      {/* NAVBAR */}
      {!isAdminRoute && <Navbar openPopup={openPopup} />}

      <Suspense fallback={<></>}>
        <Cursor />

        <Routes>
          {/* ADMIN */}
          <Route path="/admin/login" element={<Login />} />

          {/* <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="blogs" element={<BlogsAdmin />} />
            <Route path="blogs/create" element={<AddBlog />} />
            <Route path="/admin/blogs/edit/:id" element={<EditBlog />} />
          </Route> */}

          <Route path="/admin/login" element={<Login />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            {/* DEFAULT */}
            <Route index element={<Navigate to="dashboard" replace />} />

            {/* DASHBOARD */}
            <Route path="dashboard" element={<Dashboard />} />

            {/* BLOGS */}
            <Route path="blogs" element={<BlogsAdmin />} />

            {/* CREATE BLOG */}
            <Route path="blogs/create" element={<AddBlog />} />

            {/* EDIT BLOG */}
            <Route path="blogs/edit/:id" element={<EditBlog />} />
          </Route>

          {/* WEBSITE */}
          <Route path="/" element={<NewHome openPopup={openPopup} />} />

          <Route path="/about" element={<About openPopup={openPopup} />} />
          <Route path="/portfolio" element={<PortfolioPage />} />

          <Route path="/blogs" element={<Blogs />} />

          <Route path="/blogs/:slug" element={<BlogDetails />} />

          <Route path="/services" element={<Services />} />

          <Route path="/contact-us" element={<ContactUs />} />

          <Route
            path="/web-development-new"
            element={<WebDevelopmentNew openPopup={openPopup} />}
          />

          <Route path="/ads-and-campaigns" element={<AdsAndCampaigns />} />
          <Route
            path="/social-media-management"
            element={<SocialMediaManagement />}
          />

          <Route path="/ui-ux-audits" element={<UiUx />} />

          <Route path="/seo-optimizing" element={<SEOOptimizing />} />

          <Route path="/ecommerce-management" element={<EcomManagement />} />

          <Route path="/graphic-designing" element={<BrandIdentity />} />

          {/* SUB-SERVICES PAGE */}
          {/* Web dev */}
          <Route path="/wordpress" element={<WordpressDetails />} />
          <Route path="/woocommerce" element={<WoocommDetails />} />
          <Route path="/shopify" element={<ShopifyDetails />} />
          <Route path="/react" element={<ReactDetails />} />
          <Route path="/php" element={<PHPDetails />} />
          <Route path="/crm-development" element={<CRM />} />

          {/* ADS and campaigns */}
          <Route
            path="/performance-marketing"
            element={<PerformanceMarketing />}
          />
          <Route path="/google-ads" element={<GoogleAds />} />
          <Route path="/facebook-instagram-ads" element={<FbInstAds />} />
          <Route path="/linkedin-ads" element={<LinkedinAds />} />

          <Route path="/brand-awareness" element={<BrandAwareness />} />
          <Route path="/strategy-planning" element={<StrategyPlanning />} />
          <Route
            path="/content-creation-publishing"
            element={<ContentCreation />}
          />
          <Route path="/engagement-growth" element={<EngagementGrowth />} />

          <Route path="/custom-web-design" element={<CustomWebDesign />} />
          <Route path="/corporate-branding" element={<CorporateBranding />} />
          <Route path="/mobile-app-design" element={<MobileAppDesign />} />
          <Route path="/product-design" element={<ProductDesign />} />

          <Route path="/organic-traffic" element={<OrganicTraffic />} />
          <Route path="/local-search-dominance" element={<LocalSDominance />} />
          <Route
            path="/flipkart-management-services"
            element={<FlipkartManServices />}
          />

          <Route
            path="/amazon-management-services"
            element={<AmazonManServices />}
          />
          <Route
            path="/shopsy-management-services"
            element={<ShopsyManServices />}
          />
          <Route
            path="/snapdeal-management-services"
            element={<SnapdealManServices />}
          />
          <Route path="/logo-design" element={<LogoDesign />} />
          <Route path="/label-designing" element={<LabelDesigning />} />
          <Route
            path="/corporate-identity-designing"
            element={<CorporateIdentityDesi />}
          />
          <Route
            path="/brand-identity-design"
            element={<BrandIdentityDesign />}
          />
        </Routes>

        {/* FOOTER */}
        {!isAdminRoute && <NewFooter />}

        {/* BACK TO TOP */}
        {!isAdminRoute && <BackToTop />}

        {/* FLOATING CONTACT */}
        {!isAdminRoute && <FloatingContact />}

        {/* POPUP */}
        {!isAdminRoute && (
          <EnquiryPopup isOpen={isPopupOpen} onClose={closePopup} />
        )}
      </Suspense>
    </>
  );
}

export default App;
