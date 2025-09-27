import{j as e}from"./index-EjvHy6Kc.js";import{D as o}from"./DemoLayout-BkSr_Pi1.js";import{S as t}from"./SyntaxHighlighter-aihePEGP.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./classNames-BpQiAtgD.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-CfvZi-kn.js";import"./DemoComponentApi-DDEpzP-j.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const r=()=>e.jsx(t,{language:"js",children:`import cookiesStorage from '@/utils/cookiesStorage';

// Set a cookie
cookiesStorage.setItem('userToken', 'abc123', 7); // expires in 7 days

// Get a cookie
const userToken = cookiesStorage.getItem('userToken')

// Remove a cookie
cookiesStorage.removeItem('userToken')`}),i="CookiesStorageDoc",m={title:"cookiesStorage",desc:"یک تابع ابزاری که رابطی برای ذخیره، بازیابی و حذف موارد از کوکی‌ها فراهم می‌کند."},s=[{mdName:"Example",mdPath:i,title:"مثال",desc:"",component:e.jsx(r,{})}],a=[{component:"cookiesStorage",api:[{propName:"getItem",type:"<code>(name: string) => string | null</code>",default:"-",desc:"مقدار یک کوکی را بازیابی می‌کند یا اگر کوکی وجود نداشته باشد، null را برمی‌گرداند."},{propName:"setItem",type:"<code>(name: string, value: string, expires?: number | Date) => void</code>",default:"-",desc:"یک کوکی با نام، مقدار و تاریخ انقضای ارائه شده تنظیم می‌کند."},{propName:"removeItem",type:"<code>(name: string) => void</code>",default:"-",desc:"یک کوکی را با نام آن حذف می‌کند."}]}],A=()=>e.jsx(o,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:m,demos:s,api:a,mdPrefixPath:"utils"});export{A as default};
