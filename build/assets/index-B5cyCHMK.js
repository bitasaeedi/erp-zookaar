import{j as o}from"./index-EjvHy6Kc.js";import{D as t}from"./DemoComponentApi-DDEpzP-j.js";import{D as e}from"./DemoLayout-BkSr_Pi1.js";import{S as r}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const i=()=>o.jsx(r,{language:"js",children:`import useScrollTop from '@/utils/hooks/useScrollTop';

const Example = () => {
    const { isSticky } = useScrollTop();

    return (
        <header className={isSticky ? 'sticky' : ''}>
            <h1>My Sticky Header</h1>
        </header>
    );
};

export default Example
`}),m="UseScrollTopDoc",p={title:"useScrollTop",desc:"این هوک موقعیت اسکرول پنجره را پیگیری می‌کند و یک مقدار بولی را برمی‌گرداند که نشان می‌دهد آیا کاربر از بالای صفحه اسکرول کرده است یا خیر."},s=[{mdName:"مثال",mdPath:m,title:"مثال",desc:"",component:o.jsx(i,{})}],a=o.jsx(t,{hideApiTitle:!0,keyText:"بازگشت",api:[{api:[{propName:"isSticky",type:"<code>boolean</code>",default:"",desc:"نشان می‌دهد که آیا صفحه از بالا اسکرول شده است (یعنی آیا عنصر باید چسبنده باشد)."}]}]}),b=()=>o.jsx(e,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:p,demos:s,mdPrefixPath:"utils",extra:a,keyText:"پارامتر"});export{b as default};
