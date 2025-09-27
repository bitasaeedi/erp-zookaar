import{j as e}from"./index-EjvHy6Kc.js";import{D as o}from"./DemoComponentApi-DDEpzP-j.js";import{D as t}from"./DemoLayout-BkSr_Pi1.js";import{S as p}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const r=()=>e.jsx(p,{language:"js",children:`import sleep from '@/utils/sleep';

const exampleFunction = async () => {
    console.log("Before sleep");
    await sleep(2000);  // Pauses execution for 2 seconds
    console.log("After sleep");
};

exampleFunction()`}),i="SleepDoc",m={title:"sleep",desc:"عملکردی که تأخیری در اجرای کد ایجاد می‌کند یا آن را برای مدت زمان مشخصی متوقف می‌کند و با بازگشت یک پرومیس که پس از زمان داده شده حل می‌شود، انجام می‌شود."},s=[{mdName:"Example",mdPath:i,title:"مثال",desc:"",component:e.jsx(r,{})}],a=[{component:"پارامترها",api:[{propName:"ms",type:"<code>number</code>",default:"-",desc:"تعداد میلی‌ثانیه‌ها برای توقف اجرای کد."}]}],n=e.jsx(o,{hideApiTitle:!0,keyText:"بازگشت",api:[{component:"بازگشت",api:[{propName:"resolve",type:"<code>Promise<void></code>",default:"-",desc:"پرومیس پس از تأخیر حل می‌شود و اجازه می‌دهد تا عملیات بعدی اجرا شود."}]}]}),w=()=>e.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:m,demos:s,api:a,mdPrefixPath:"utils",extra:n,keyText:"پارامتر"});export{w as default};
