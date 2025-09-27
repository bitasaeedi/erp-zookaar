import{j as e}from"./index-EjvHy6Kc.js";import{S as s}from"./SyntaxHighlighter-aihePEGP.js";import{D as c}from"./DemoComponentApi-DDEpzP-j.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";const h=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["اکمه 6 نوع چیدمان بعد از ورود به سیستم و 3 نوع چیدمان احراز هویت ارائه می‌دهد. تمامی کامپوننت‌های چیدمان در دایرکتوری"," ",e.jsx("code",{children:"src/components/layouts/PostLoginLayout/components*"})," قرار دارند و تمامی کامپوننت‌هایی که در چیدمان‌ها استفاده شده‌اند در"," ",e.jsx("code",{children:"src/components/template/*"})," یافت می‌شوند."]}),e.jsx("p",{children:"چیدمان‌های بعد از ورود به سیستم به شرح زیر بودند:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["کناری قابل جمع شدن - ",e.jsx("code",{children:"'collapsibleSide'"})]}),e.jsxs("li",{children:["کناری به‌هم‌چیده - ",e.jsx("code",{children:"'stackedSide'"})]}),e.jsxs("li",{children:["نوار بالای کلاسیک - ",e.jsx("code",{children:"'topBarClassic'"})]}),e.jsxs("li",{children:["کناری بدون قاب - ",e.jsx("code",{children:"'framelessSide'"})]}),e.jsxs("li",{children:["پوشش محتوایی - ",e.jsx("code",{children:"'contentOverlay'"})]}),e.jsxs("li",{children:["خالی - ",e.jsx("code",{children:"'blank'"})]})]}),e.jsx("div",{className:"mt-10",id:"configuringLayout",children:e.jsxs("div",{className:"mt-10",id:"classic",children:[e.jsx("h5",{children:"پیکربندی چیدمان"}),e.jsxs("p",{className:"mt-1",children:["شما می‌توانید چیدمان اولیه را در"," ",e.jsx("code",{children:"src/configs/theme.config.ts"})," با استفاده از مقدار رشته‌ای که در بالا ذکر شد، پیکربندی کنید."]}),e.jsx(s,{language:"js",children:`export const themeConfig = {
        ...
        layout: {
            type: 'framelessSide',
            ...
        },
    }`}),e.jsxs("p",{children:["در اینجا مقادیر و کلیدهای موجود برای پیکربندی فیلد ",e.jsx("code",{children:"layout"})," آمده است."]}),e.jsx(c,{hideApiTitle:!0,keyText:"properties",api:[{api:[{propName:"type",type:"<code>'blank'</code>  | <code>'collapsibleSide'</code> | <code>'stackedSide'</code> | <code>'topBarClassic'</code> | <code>'framelessSide'</code> | <code>'contentOverlay'</code>",default:"<code>'modern'</code>",desc:"نوع چیدمان برنامه"},{propName:"sideNavCollapse",type:"<code>boolean</code>",default:"<code>false</code>",desc:"آیا ناوبری کناری باید جمع شود (فقط زمانی که <code>type</code> برابر با <code>'classic'</code> یا <code>'modern'</code> است)"}]}]})]})}),e.jsxs("div",{className:"mt-10",id:"overridingLayouts",children:[e.jsx("h5",{children:"بازنویسی چیدمان‌ها"}),e.jsxs("p",{className:"mt-1",children:["به طور کلی، تمام نمای صفحات بر اساس تنظیمات چیدمان در ",e.jsx("code",{children:"theme.config.ts"})," دنبال خواهند شد. با این حال، اگر مواردی وجود داشته باشد که بخواهید در یک نمای مسیر خاص چیدمان متفاوتی نمایش دهید، می‌توانید مقدار چیدمان مورد نظر را در ",e.jsx("code",{children:"meta"})," مسیر برای بازنویسی چیدمان جاری، همانطور که در راهنمای ",e.jsx("strong",{children:"مسیر یابی"})," ذکر شده است، تنظیم کنید."]}),e.jsx(s,{language:"js",children:`export const protectedRoutes = [
        {
            key: 'a-unique-id-for-this-view'
            path: 'path',
            component: React.lazy(() => import('views/Component')),
            authority: [],
            meta: {
                ...,
                layout: 'blank'
            }
        },			
    ]`})]}),e.jsxs("div",{className:"mt-10",id:"authLayouts",children:[e.jsx("h5",{children:"چیدمان‌های احراز هویت"}),e.jsxs("p",{children:["پیکربندی چیدمان احراز هویت کمی متفاوت است. کافی است به"," ",e.jsx("code",{children:"src/components/layouts/AuthLayout/AuthLayout.ts"})," مراجعه کنید و کامپوننت wrapper را تغییر دهید. به عنوان مثال، تغییر"," ",e.jsx("code",{children:"side"})," به ",e.jsx("code",{children:"simple"})]}),e.jsx(s,{language:"js",wrapLines:!0,showLineNumbers:!0,lineProps:t=>{const o={display:"block"};return[9].includes(t)?o.backgroundColor="#00ff002e":[10].includes(t)&&(o.backgroundColor="#ff00001f"),{style:o}},children:`import { useMemo, lazy } from 'react'
    import type { CommonProps } from '@/@types/common'
    import type { LazyExoticComponent } from 'react'
    
    type LayoutType = 'simple' | 'split' | 'side'
    
    type Layouts = Record<LayoutType, LazyExoticComponent<<T extends CommonProps>(props: T) => JSX.Element>>
    
    const currentLayoutType: LayoutType = 'side'
    const currentLayoutType: LayoutType = 'simple'
    
    const layouts: Layouts = {
        simple: lazy(() => import('./Simple')),
        split: lazy(() => import('./Split')),
        side: lazy(() => import('./Side')),
    }
    
    const AuthLayout = ({ children }: CommonProps) => {
    
        const Layout = useMemo(() => {
            return layouts[currentLayoutType]
        }, [])
    
        return (
            <Layout>{children}</Layout>
        )
    }
    
    export default AuthLayout`})]})]});export{h as default};
