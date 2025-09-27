import{j as e}from"./index-EjvHy6Kc.js";import{D as t}from"./DemoComponentApi-DDEpzP-j.js";import{D as o}from"./DemoLayout-BkSr_Pi1.js";import{S as a}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const r=()=>e.jsx(a,{language:"js",children:`import useLayout from '@/utlis/hooks/useLayout';

const Example = () => {
    const { type, adaptiveCardActive, pageContainerReassemble } = useLayout();

    return (
        <div>
            <h1>Layout Type: {type}</h1>
            {adaptiveCardActive && <p>Adaptive Card is active</p>}
            {/* Example usage of pageContainerReassemble if provided */}
            {pageContainerReassemble && pageContainerReassemble({
                defaultClass: 'default-class',
                pageContainerGutterClass: 'gutter-class',
                pageContainerDefaultClass: 'container-class',
                PageContainerHeader: () => <header>Header</header>,
                PageContainerBody: () => <div>Body</div>,
                PageContainerFooter: () => <footer>Footer</footer>,
            })}
        </div>
    );
};

export default Example;
`}),i="UseLayoutDoc",p={title:"useLayout",desc:"هوک useLayout دسترسی به زمینه چیدمان را فراهم می‌کند، که داده‌ها و روش‌های مختلف چیدمان برای بازسازی مجدد کانتینر صفحه را ارائه می‌دهد، که به‌طور خاص برای چیدمان الگو طراحی شده است."},s=[{mdName:"مثال",mdPath:i,title:"مثال",desc:"",component:e.jsx(r,{})}],d=e.jsx(t,{hideApiTitle:!0,keyText:"بازگشت",api:[{api:[{propName:"type",type:"<code>LayoutType</code>",default:"-",desc:"نوع چیدمان فعلی را نشان می‌دهد، که ممکن است بر نحوه نمایش کامپوننت‌ها تأثیر بگذارد."},{propName:"adaptiveCardActive",type:"<code>boolean | undefined</code>",default:"-",desc:"نشان‌دهنده این است که آیا چیدمان کارت تطبیقی فعال است یا خیر."},{propName:"pageContainerReassemble",type:"<code>(props: PageContainerReassembleProps) => ReactNode | undefined</code>",default:"-",desc:"تابع اختیاری برای بازسازی دینامیک ساختار کانتینر صفحه با ویژگی‌ها و کامپوننت‌های سفارشی."}]}]}),F=()=>e.jsx(o,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:p,demos:s,mdPrefixPath:"utils",extra:d,keyText:"پارامتر"});export{F as default};
