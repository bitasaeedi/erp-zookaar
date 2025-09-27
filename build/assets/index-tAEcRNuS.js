import{j as e}from"./index-EjvHy6Kc.js";import{D as o}from"./DemoComponentApi-DDEpzP-j.js";import{D as t}from"./DemoLayout-BkSr_Pi1.js";import{S as r}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const a=()=>e.jsx(r,{language:"js",children:`import useTranslation from '@/utils/hooks/useTranslation

const Example = () => {
    const { t, ready } = useTranslation(true)

    return (
        <div>
            {ready ? <p>{t('hello', 'Hello')}</p> : <p>Loading translations...</p>}
        </div>
    );
};

export default Example
`}),i="UseTranslationDoc",p={title:"useTranslation",desc:"<code>useTranslation</code> یک wrapper سفارشی برای <code>react-i18next</code> است که از <code>useTranslation</code> استفاده می‌کند."},s=[{mdName:"Example",mdPath:i,title:"مثال",desc:"",component:e.jsx(a,{})}],n=[{component:"پارامترها",api:[{propName:"usePlaceholder",type:"<code>boolean</code>	",default:"-",desc:"پرچم نشان‌دهنده اینکه آیا باید از یک تابع ترجمه placeholder استفاده شود."}]}],m=e.jsx(o,{hideApiTitle:!0,keyText:"بازگشت",api:[{api:[{propName:"t",type:"<code>(key: string, fallback?: string | Record< string, string | number >) => string</code>",default:"-",desc:"یک تابع ترجمه که رشته ترجمه شده یا fallback را در صورت عدم وجود ترجمه برمی‌گرداند."},{propName:"ready",type:"<code>boolean</code>",default:"-",desc:"نشان می‌دهد که آیا ترجمه‌ها آماده استفاده هستند."},{propName:"i18n",type:"<code>string</code>",default:"-",desc:"نمونه i18n یا یک رشته خالی در حالت placeholder."}]}]}),R=()=>e.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:p,demos:s,mdPrefixPath:"utils",extra:m,api:n,keyText:"param"});export{R as default};
