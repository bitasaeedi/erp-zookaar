import{j as o}from"./index-EjvHy6Kc.js";import{D as e}from"./DemoComponentApi-DDEpzP-j.js";import{D as t}from"./DemoLayout-BkSr_Pi1.js";import{S as r}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const m=()=>o.jsx(r,{language:"js",children:`import useRandomBgColor from '@/utils/hooks/useRandomBgColor';

const Example = ({ name }: { name: string }) => {
    const getBgColor = useRandomBgColor();

    return (
        <div className={getBgColor(name)}>
            {name}
        </div>
    );
};

export default Example
`}),i="UseRandomBgColorDoc",a={title:"useRandomBgColor",desc:"هوک useRandomBgColor یک رنگ پس‌زمینه تصادفی از یک لیست سفید از رنگ‌های Tailwind CSS بر اساس نام ورودی تولید می‌کند. این هوک برای اختصاص رنگ‌های پس‌زمینه سازگار بر اساس یک رشته، مانند نام کاربری یا نام آیتم، مفید است."},s=[{mdName:"مثال",mdPath:i,title:"مثال",desc:"",component:o.jsx(m,{})}],n=o.jsx(e,{hideApiTitle:!0,keyText:"بازگشت",api:[{api:[{propName:"generateBgColor",type:"<code>(name: string) => string</code>",default:"",desc:"کلاسی از رنگ پس‌زمینه Tailwind CSS را بر اساس رشته نام ورودی برمی‌گرداند."}]}]}),v=()=>o.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:a,demos:s,mdPrefixPath:"utils",extra:n,keyText:"پارامتر"});export{v as default};
