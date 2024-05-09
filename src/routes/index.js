import AdminPage from "../page/AdminPage/AdminPage";
import HomePage from "../page/HomePage/HomePage";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage";
import OrderPage from "../page/OrderPage/OrderPage";
import ProductDetailPage from "../page/ProductDetailPage/ProductDetailPage";
import ProductsPage from "../page/ProductsPage/ProductsPage";
import SignInPage from "../page/SignInPage/SignInPage";
import TypeProductPage from "../page/TypeProductPage/TypeProductPage";
import PromotionPage from "../page/PromotionPage/Promotion";


export const routes =[
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
        isShowFooter: true

    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: false,
        isShowFooter: false
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '*',
        page: NotFoundPage

    },
    {
        path: '/type',
        page: TypeProductPage,
        isShowHeader: true,
        isShowFooter: true
        
    },
    {
        path: '/product-details',
        page: ProductDetailPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/admin',
        page: SignInPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/system/admin',
        page: AdminPage,
        isShowHeader: false,
        isShowFooter: true
    },
    {
        path: '/promotion',
        page: PromotionPage,
        isShowHeader: false,
        isShowFooter: false
    },
]