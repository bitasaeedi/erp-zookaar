import{j as e}from"./index-EjvHy6Kc.js";import{D as t}from"./DemoComponentApi-DDEpzP-j.js";import{D as i}from"./DemoLayout-BkSr_Pi1.js";import{S as o}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const p=()=>e.jsx(o,{language:"js",children:`import fileSizeUnit from '@/utils/fileSizeUnit'

// Using SI units (default)
const sizeSI = fileSizeUnit(1500) // output: '1.5 kB'

// Using binary units
const sizeBinary = fileSizeUnit(1500, false) // output: '1.46 KiB'

// Specifying decimal places
const sizeWithDecimal = fileSizeUnit(1536000, true, 2) // output: '1.54 MB'
`}),r="FileSizeUnitDoc",m={title:"fileSizeUnit",desc:"<p><code>fileSizeUnit</code> تابعی است که اندازه فایل (به بایت) را به یک رشته قابل خواندن برای انسان با واحدهای مناسب (kB، MB و غیره) فرمت می‌کند.</p>"},n=[{mdName:"Example",mdPath:r,title:"مثال",desc:"",component:e.jsx(p,{})}],s=[{component:"پارامترها",api:[{propName:"bytes",type:"<code>number</code>",default:"-",desc:"اندازه فایل به بایت."},{propName:"si",type:"<code>boolean</code>",default:"-",desc:"تعیین می‌کند که آیا باید از واحدهای SI (پایه 1000) یا واحدهای باینری (پایه 1024) استفاده شود."},{propName:"dp",type:"<code>number</code>",default:"-",desc:"تعداد ارقام اعشاری که باید در خروجی فرمت شده گنجانده شود."}]}],a=e.jsx(t,{hideApiTitle:!0,keyText:"بازگشت",api:[{component:"پارامترها",api:[{propName:"result",type:"<code>string</code>",desc:"اندازه فایل فرمت شده با واحد مناسب، بر اساس تعداد بایت.",default:"-"}]}]}),I=()=>e.jsx(i,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:m,demos:n,api:s,mdPrefixPath:"utils",extra:a,keyText:"param"});export{I as default};
