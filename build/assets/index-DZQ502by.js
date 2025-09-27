import{j as e}from"./index-EjvHy6Kc.js";import{D as t}from"./DemoComponentApi-DDEpzP-j.js";import{D as o}from"./DemoLayout-BkSr_Pi1.js";import{S as r}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const m=()=>e.jsx(r,{language:"js",children:`import useInterval from '@/utils/hooks/useInterval'

const Example = () => {
    const [count, setCount] = useState(0)

    useInterval(() => {
        setCount((prevCount) => prevCount + 1)
    }, 1000)

    return <div>Count: {count}</div>;
};

export default Example
`}),p="UseIntervalDoc/",n={title:"useInterval",desc:"این هوک راهی آسان برای تأخیر در هر تابع را فراهم می‌کند و اطمینان می‌دهد که تنها پس از یک تأخیر مشخص اجرا می‌شود."},a=[{mdName:"مثال",mdPath:p,title:"مثال",desc:"",component:e.jsx(m,{})}],i=[{component:"پارامترها",api:[{propName:"callback",type:"<code>() => void</code>",default:"-",desc:"تابعی که باید در هر بازه زمانی اجرا شود."},{propName:"delay",type:"<code>number | null</code>",default:"-",desc:"تأخیر بین هر اجرای callback به میلی‌ثانیه. اگر null باشد، بازه متوقف می‌شود."}]}],s=e.jsx(t,{keyText:"بازگشت",api:[{component:"بازگشت",api:[{propName:"intervalRef",type:"<code>React.MutableRefObject<number | null></code>",default:"-",desc:"یک شیء ref که شناسه بازه را نگه می‌دارد و می‌توان از آن برای مدیریت دستی بازه استفاده کرد."}]}]}),T=()=>e.jsx(o,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:n,demos:a,mdPrefixPath:"docs/SharedComponentsDoc/components",api:i,extra:s,keyText:"پارامتر"});export{T as default};
