import{j as e}from"./index-EjvHy6Kc.js";import{S as o}from"./SyntaxHighlighter-aihePEGP.js";import{D as t}from"./DemoComponentApi-DDEpzP-j.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";const m=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["ساختار ناوبری خود را به صورت آرایه‌ای از اشیاء تعریف کرده و در نهایت آن را در رابط کاربری رندر می‌کنیم. شما می‌توانید به راحتی ناوبری برنامه را با دسترسی به"," ",e.jsx("code",{children:"src/configs/navigation.config/index.ts"})," تغییر داده یا سفارشی کنید."]}),e.jsx("p",{children:"در اینجا نوع یک آیتم منو آورده شده است"}),e.jsx(o,{language:"ts",children:`export type HorizontalMenuMeta = {
        layout: 'default'
    } | {
        layout: 'columns'
        showColumnTitle?: boolean
        columns: 1 | 2 | 3 | 4 | 5
    } | {
        layout: 'tabs'
        columns: 1 | 2 | 3 | 4 | 5
    }
    
    export interface NavigationTree {
        key: string
        path: string
        isExternalLink?: boolean
        title: string
        translateKey: string
        icon: string
        type: 'title' | 'collapse' | 'item'
        authority: string[]
        subMenu: NavigationTree[]
        description?: string
        meta?: {
            horizontalMenu?: HorizontalMenuMeta
            description?: {
                translateKey: string
                label: string
            }
        }
    }
    `}),e.jsx("br",{}),e.jsx(t,{hideApiTitle:!0,keyText:"properties",api:[{api:[{propName:"key",type:"<code>string</code>",default:"-",desc:"یک کلید منحصر به فرد که باید با مسیری که این منو به آن هدایت می‌کند مطابقت داشته باشد"},{propName:"path",type:"<code>string</code>",default:"-",desc:"آدرس URL که این آیتم منو به آن لینک می‌دهد"},{propName:"isExternalLink",type:"<code>boolean</code>",default:"-",desc:"آیا لینک در تب جدید باز می‌شود یا خیر"},{propName:"title",type:"<code>string</code>",default:"-",desc:"متنی که برای این آیتم منو رندر می‌شود"},{propName:"translateKey",type:"<code>string</code>",default:"-",desc:"کلید ترجمه برای ترجمه متن رندر شده در آیتم منو، در صورت خالی یا نامعتبر بودن به <code>title</code> باز می‌گردد"},{propName:"icon",type:"<code>string</code>",default:"-",desc:"آیکون مورد نظر را در آیتم منو رندر می‌کند. مقدار رشته‌ای باید با کلید شیء در <code>navigation-icon.config.tsx</code> مطابقت داشته باشد"},{propName:"type",type:"<code>'title'</code>  | <code>'collapse'</code> | <code>'item'</code>",default:"-",desc:"برای تعریف نوع آیتم منو فعلی"},{propName:"authority",type:"<code>string[]</code>",default:"-",desc:"آیتم‌های منو را برای کاربرانی که دارای نقش‌های مشخص شده هستند، نمایش می‌دهد. اگر این فیلد تعریف نشده یا آرایه خالی باشد، هیچ محدودیتی برای دسترسی وجود نخواهد داشت"},{propName:"subMenu",type:"<code>navigationConfig[]</code>",default:"-",desc:"آیا این آیتم منو دارای زیرمنو است، در صورتیکه <code>type</code> برابر با <code>'title'</code> یا <code>'collapse'</code> باشد، این فیلد ویژگی‌های جدول فوق را می‌پذیرد"},{propName:"meta",type:`<code> {
            horizontalMenu?: HorizontalMenuMeta
            description?: {
                translateKey: string
                label: string
            }
        }</code>`,default:"-",desc:"این یک فیلد تنظیمات اختیاری برای ناوبری است که می‌تواند اطلاعات اضافی را در مواقع خاص ارائه دهد"},{propName:"meta.horizontalMenu",type:`<code> {
        layout: 'default'
    } | {
        layout: 'columns'
        showColumnTitle?: boolean
        columns: 1 | 2 | 3 | 4 | 5
    } | {
        layout: 'tabs'
        columns: 1 | 2 | 3 | 4 | 5
    }</code>`,default:"-",desc:"تنظیمات اضافی برای منوی افقی، مانند <code>layout</code>، <code>columns</code> و غیره"},{propName:"meta.description",type:"<code>navigationConfig[]</code>",default:"-",desc:"توضیحات صفحه، توضیحات فقط زمانی در دسترس هستند که <code>themeConfig.layout.type</code> برابر با <code>'contentOverlay'</code> باشد"}]}]}),e.jsx("p",{children:"یک مثال از تنظیمات ساختار ناوبری"}),e.jsx(o,{language:"ts",children:`const navigationConfig = [
        {
            key: 'uiComponent',
            path: '',
            title: 'Ui Component',
            translateKey: 'nav.uiComponents',
            icon: 'uiComponents',
            type: 'title',
            authority: ['admin', 'user'],
            /** می‌توانیم تنظیمات منو را در اینجا تعریف کنیم، اگر از منوی افقی استفاده می‌کنیم */
            meta: {
                horizontalMenu: {
                    layout: 'columns',
                    columns: 4
                }
            },
            subMenu: [
                {
                    key: 'uiComponent.common',
                    path: '',
                    title: 'Common',
                    translateKey: 'nav.uiComponentsCommon.common',
                    icon: 'common',
                    type: 'collapse',
                    authority: ['admin', 'user'],
                    subMenu: [
                        {
                            key: 'uiComponent.common.button',
                            path: '/button',
                            title: 'Button',
                            translateKey: 'nav.uiComponentsCommon.button',
                            icon: '',
                            type: 'item',
                            authority: ['admin', 'user'],
                            subMenu: []
                        },
                        {
                            key: 'uiComponent.common.typography',
                            path: '/typography',
                            title: 'Typography',
                            translateKey: 'nav.uiComponentsCommon.typography',
                            icon: '',
                            type: 'item',
                            authority: ['admin', 'user'],
                            subMenu: []
                        }
                    ]
                }
            ]
        }
    ]`}),e.jsxs("div",{className:"mt-10",id:"configuringNavigationIcon",children:[e.jsx("h5",{children:"تنظیم آیکون ناوبری"}),e.jsxs("p",{className:"mt-1",children:["تنظیمات آیکون ناوبری در فایل جداگانه‌ای در"," ",e.jsx("code",{children:"src/configs/navigation-icon.config.tsx"})," قرار دارد"]}),e.jsxs("p",{children:["در مثال بالا، از مقدار رشته‌ای"," ",e.jsx("code",{children:"uiComponents"})," در فیلد ",e.jsx("code",{children:"icon"})," استفاده می‌کنیم، بنابراین باید از این مقدار در"," ",e.jsx("code",{children:"navigation-icon.config.ts"})," برای تعریف آیکون استفاده کنیم."]}),e.jsxs("p",{children:["ابتدا، آیکونی که می‌خواهید را از"," ",e.jsx("a",{href:"https://react-icons.github.io/react-icons/",target:"_blank",rel:"noreferrer",children:"react-icons"}),"وارد کنید"]}),e.jsx(o,{language:"ts",children:`import { FaBeer } from 'react-icons/fa'
    
    const navigationIcon = {}
    `}),e.jsxs("p",{children:["حالا مقدار استفاده شده در فیلد ",e.jsx("code",{children:"icon"})," را به عنوان کلید و کامپوننت آیکون وارد شده را به عنوان مقدار تنظیم کنید"]}),e.jsx(o,{language:"tsx",children:`import { FaBeer } from 'react-icons/fa'
    
    const navigationIcon = {
        uiComponents: <FaBeer />
    }
    `}),e.jsxs("p",{children:["حالا آیتم منو مربوطه آیکون ",e.jsx("code",{children:"FaBeer"})," را به عنوان آیکون منو رندر خواهد کرد."]})]})]});export{m as default};
