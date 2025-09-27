import{j as e}from"./index-EjvHy6Kc.js";import{D as t}from"./DemoComponentApi-DDEpzP-j.js";import{D as o}from"./DemoLayout-BkSr_Pi1.js";import{S as m}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const r=()=>e.jsx(m,{language:"js",children:`import classNames from '@/utils/classNames';

const Example = ({ primary, disabled }) => {
    return (
        <button
            className={classNames(
                'p-2 text-base',
                primary && 'bg-blue-500 text-white',
                disabled && 'bg-gray-500 cursor-not-allowed'
            )}
            disabled={disabled}
        >
            Click me
        </button>
    );
}`}),s="ClassNamesDoc",a={title:"classNames",desc:"تابع ابزاری که چندین نام کلاس را با استفاده از کتابخانه <code>classnames</code> ترکیب می‌کند و تضادهای کلاس Tailwind CSS را با استفاده از ابزار <code>tailwind-merge</code> ادغام می‌کند."},i=[{mdName:"Example",mdPath:s,title:"مثال",desc:"",component:e.jsx(r,{})}],p=[{component:"پارامترها",api:[{propName:"name",type:"<code>cn.ArgumentArray</code>",default:"-",desc:"لیستی با طول متغیر از نام‌های کلاس یا شرایطی که به نام‌های کلاس تبدیل می‌شوند."}]}],d=e.jsx(t,{hideApiTitle:!0,keyText:"بازگشت",api:[{component:"بازگشت",api:[{propName:"classNames",type:"<code>string</code>",default:"-",desc:"نام‌های کلاس"}]}]}),H=()=>e.jsx(o,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:a,demos:i,api:p,mdPrefixPath:"utils",extra:d,keyText:"پارامتر"});export{H as default};
