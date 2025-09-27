import{j as e}from"./index-EjvHy6Kc.js";import{S as t}from"./SyntaxHighlighter-aihePEGP.js";import{D as o}from"./DemoComponentApi-DDEpzP-j.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";const m=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["اکمه از"," ",e.jsx("a",{href:"https://reactrouter.com/",target:"_blank",rel:"noopener noreferrer",children:"React Router"})," ","به عنوان سیستم مسیریابی اصلی خود استفاده می‌کند. در این راهنما، شما خواهید آموخت که چگونه مسیرهای جدید بسازید و نحوه عملکرد مسیرهای موجود را درک کنید."]}),e.jsxs("div",{className:"mt-6",id:"overview",children:[e.jsx("h5",{children:"نمای کلی"}),e.jsxs("p",{className:"my-1",children:["پیکربندی مسیریاب برای قالب در"," ",e.jsx("code",{children:"src/configs/routes.config/index.ts"})," قرار دارد. دو گروه اصلی مسیرها وجود دارد:"]}),e.jsx(t,{language:"js",children:`export const publicRoutes = [
        ...
    ]
    
    export const protectedRoutes = [
        ...
    ]`}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"publicRoutes:"}),e.jsx("p",{className:"mt-1",children:"این گروه شامل تمام مسیرهایی است که برای همه کاربران قابل دسترسی هستند."})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"protectedRoutes:"}),e.jsx("p",{className:"mt-1",children:"این گروه شامل مسیرهایی است که برای دسترسی به آن‌ها نیاز به احراز هویت است."})]})]})]}),e.jsxs("div",{className:"mt-10",id:"addingNewRoute",children:[e.jsx("h5",{children:"اضافه کردن مسیر جدید"}),e.jsx("p",{className:"mt-1",children:"برای اضافه کردن یک مسیر جدید، کافی است کد زیر را در گروه مسیر مناسب قرار دهید، بسته به سطح دسترسی که می‌خواهید تخصیص دهید:"}),e.jsx(t,{language:"js",children:`export const protectedRoutes = [
        {
            key: 'a-unique-id-for-this-view',
            path: 'my-new-view-path',
            component: lazy(() => import('@/views/MyNewComponent')),
            authority: [],
            meta: {
                pageContainerType: 'gutterless'
            }
        },			
    ]`})]}),e.jsxs("div",{className:"mt-10",id:"authority",children:[e.jsx("h5",{children:"مجازات‌ها"}),e.jsxs("p",{className:"mt-1",children:["مسیرهای اکمه از کنترل دسترسی مبتنی بر نقش ساده پشتیبانی می‌کنند. شما می‌توانید نقش‌هایی که دسترسی به یک مسیر دارند را با استفاده از فیلد ",e.jsx("code",{children:"authority"})," مشخص کنید. به عنوان مثال، مسیر زیر فقط برای کاربران با نقش"," ",e.jsx("code",{children:"'admin'"})," یا ",e.jsx("code",{children:"'user'"})," قابل دسترسی است. اگر فیلد ",e.jsx("code",{children:"authority"})," به صورت آرایه خالی باشد، مسیر برای تمام نقش‌ها باز خواهد بود."]}),e.jsx(t,{language:"js",children:`export const protectedRoutes = [
        {
            ...
            authority: ['admin', 'user'],
        },			
    ]`}),e.jsxs("p",{children:[e.jsx("code",{children:"AuthorityGuard"})," پیش‌فرض نقش کاربر فعلی را از وضعیت Zustand بررسی می‌کند (",e.jsx("code",{children:"auth.user.authority"}),"). شما می‌توانید از این به عنوان پایه‌ای برای گسترش یا سفارشی‌سازی کنترل دسترسی خود استفاده کنید."]})]}),e.jsxs("div",{className:"mt-10",id:"meta",children:[e.jsx("h5",{children:"متا"}),e.jsxs("p",{className:"mt-1",children:["فیلد ",e.jsx("code",{children:"meta"})," به شما این امکان را می‌دهد که اطلاعات اضافی را به ",e.jsx("code",{children:"PageContainer"})," یا کامپوننت نمای مرتبط با مسیر ارسال کنید."]}),e.jsx(t,{language:"js",children:`export const protectedRoutes = [
        {
            ...
            meta: {
                pageContainerType: 'gutter',
                header: {
                    title: 'My tittle',
                    description: 'Some description'
                    contained: false,
                    extraHeader: lazy(() => import('/SomeComponent')),
                },
                footer: false,
                layout: 'blank',
            }
        },			
    ]`}),e.jsxs("p",{children:["کامپوننت نما قادر خواهد بود به تمام داده‌های ",e.jsx("code",{children:"meta"})," که مشخص شده‌اند دسترسی پیدا کند."]}),e.jsx(o,{hideApiTitle:!0,keyText:"properties",api:[{api:[{propName:"pageContainerType",type:"<code>'default'</code>  | <code>'gutterless'</code> | <code>'contained'</code>",default:"<code>'default'</code>",desc:"نوع کانتینر نمای صفحه را تعریف می‌کند"},{propName:"pageBackgroundType",type:"<code>'default'</code>  | <code>'plain'</code>",default:"-",desc:"نوع پس‌زمینه صفحه را تعیین می‌کند"},{propName:"header",type:`<code> {
                                            title?: string | ReactNode | LazyExoticComponent<() => JSX.Element>
                                            description?: string | ReactNode
                                            contained?: boolean
                                            extraHeader?: string | ReactNode | LazyExoticComponent<() => JSX.Element>
                                        }</code>`,default:"-",desc:"عنوان و تنظیمات بیشتر صفحه را مشخص می‌کند"},{propName:"footer",type:"<code>boolean</code>",default:"<code>true</code>",desc:"تعیین می‌کند که آیا فوتر نمایش داده شود یا خیر"},{propName:"layout",type:"<code>'blank'</code>  | <code>'collapsibleSide'</code> | <code>'stackedSide'</code> | <code>'topBarClassic'</code> | <code>'framelessSide'</code> | <code>'contentOverlay'</code>",default:"-",desc:"طرح‌بندی فعلی صفحه را برای این صفحه بازنویسی می‌کند"}]}]})]})]});export{m as default};
