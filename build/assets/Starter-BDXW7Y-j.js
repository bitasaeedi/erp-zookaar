import{j as e,a_ as t}from"./index-EjvHy6Kc.js";import{S as o}from"./SyntaxHighlighter-aihePEGP.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const r=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["همانطور که در بخش"," ",e.jsx(t,{to:"/docs/documentation/installation",children:"نصب"})," ","اشاره شده است، ما نسخه‌ای ابتدایی با اجزای اصلی و تنظیمات عملکرد پایه ارائه داده‌ایم. ما به شدت توصیه می‌کنیم که توسعه‌دهندگان از این نسخه به عنوان اساس برای ساخت برنامه‌های خود استفاده کنند."]}),e.jsxs("p",{children:["زمانی که پکیج ابتدایی را در محیط محلی خود باز می‌کنید، به صفحه ورود هدایت می‌شوید. شما می‌توانید با استفاده از اطلاعات ورود زیر وارد شوید: ",e.jsx("i",{children:"کاربر: admin | رمز عبور: 123Qwe"}),"."]}),e.jsxs("i",{children:["توجه: نسخه ابتدایی به طور پیش‌فرض API ساختگی را فعال کرده است. تمام درخواست‌های API به سرور ساختگی ارسال خواهند شد. اگر می‌خواهید این ویژگی را غیرفعال کنید یا در مورد API ساختگی بیشتر بدانید، مستندات"," ",e.jsx(t,{to:"/docs/documentation/mock-api",children:"API ساختگی"})," ","را بررسی کنید."]}),e.jsxs("div",{className:"mt-10",id:"defaultConfig",children:[e.jsx("h5",{children:"تنظیمات پیش‌فرض"}),e.jsx("p",{children:"در زیر برخی از تنظیمات پیش‌فرض برای نسخه ابتدایی آورده شده است. شما می‌توانید این تنظیمات را متناسب با نیازهای خود تغییر دهید."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"AppConfig"})," -"," ",e.jsx(t,{to:"/docs/documentation/app",children:"مستندات"})]}),e.jsx(o,{language:"js",children:`const appConfig: AppConfig = {
        apiPrefix: '/api',
        authenticatedEntryPath: '/dashboards/ecommerce',
        unAuthenticatedEntryPath: '/sign-in',
        locale: 'en',
        enableMock: true,
    }
    `}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"ThemeConfig"})," -"," ",e.jsx(t,{to:"/docs/documentation/overall-theme-config",children:"مستندات"})]}),e.jsx(o,{language:"js",children:`export const themeConfig: ThemeConfig = {
        schema: 'default',
        direction: THEME_ENUM.DIR_LTR,
        mode: THEME_ENUM.MODE_LIGHT,
        panelExpand: false,
        controlSize: 'md',
        layout: {
            type: THEME_ENUM.LAYOUT_COLLAPSIBLE_SIDE,
            sideNavCollapse: false,
        },
    `}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"RoutesConfig"})," -"," ",e.jsx(t,{to:"/docs/documentation/routing",children:"مستندات"})]}),e.jsx(o,{language:"js",children:`const publicRoutes = [
        {
            key: 'signIn',
            path: '/sign-in',
            component: lazy(() => import('@/views/auth/SignIn')),
            authority: [],
        },
        {
            key: 'signUp',
            path: '/sign-up',
            component: lazy(() => import('@/views/auth/SignUp')),
            authority: [],
        },
        {
            key: 'forgotPassword',
            path: '/forgot-password:id',
            component: lazy(() => import('@/views/auth/ForgotPassword')),
            authority: [],
        },
        {
            key: 'resetPassword',
            path: '/reset-password',
            component: lazy(() => import('@/views/auth/ResetPassword')),
            authority: [],
        },
    ]
    
    export const protectedRoutes = [
        {
            key: 'home',
            path: '/home',
            component: lazy(() => import('@/views/Home')),
            authority: [],
        },
    ]
    `}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"NavConfig"})," -"," ",e.jsx(t,{to:"/docs/documentation/routing",children:"مستندات"})]}),e.jsx(o,{language:"js",children:`const navigationConfig = [
        {
            key: 'home',
            path: '/home',
            title: 'خانه',
            translateKey: 'nav.home',
            icon: 'home',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [],
            subMenu: []
        },
    ]
    `})]})]});export{r as default};
