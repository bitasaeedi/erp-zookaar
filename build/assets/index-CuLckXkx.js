import{j as e}from"./index-EjvHy6Kc.js";import{D as t}from"./DemoComponentApi-DDEpzP-j.js";import{D as o}from"./DemoLayout-BkSr_Pi1.js";import{S as r}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const n=()=>e.jsx(r,{language:"js",children:`import { useState, useCallback } from 'react'
import Input from '@/components/ui/Input'
import useDebounce from '@/utils/hooks/useDebounce'
import type { ChangeEvent } from 'react'

const Example = () => {
    const [query, setQuery] = useState('')

    const handleSearch = (input: string) => {
        console.log('Searching for:', input)
    };

    const debouncedSearch = useDebounce(handleSearch, 300);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setQuery(value)
        debouncedSearch(value)
    }, [debouncedSearch])

    return (
        <Input 
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="جستجو..."
        />
    );
};

export default Example
`}),a="UseDebounceDoc/",p={title:"useDebounce ",desc:"این هوک راهی آسان برای تأخیر در هر تابع را فراهم می‌کند و اطمینان می‌دهد که تنها پس از یک تأخیر مشخص اجرا می‌شود."},m=[{mdName:"مثال",mdPath:a,title:"مثال",desc:"",component:e.jsx(n,{})}],c=[{component:"پارامترها",api:[{propName:"func",type:"<code> (...args: any)</code>",default:"-",desc:"تابعی که باید تأخیر داشته باشد."},{propName:"wait",type:"<code>number</code>",default:"-",desc:"تعداد میلی‌ثانیه‌ها برای تأخیر. اگر ارائه نشود، تابع با تأخیر پیش‌فرض (معمولاً تعیین‌شده توسط lodash) تأخیر خواهد داشت."}]}],s=e.jsx(t,{keyText:"بازگشت",api:[{component:"بازگشت",api:[{propName:"func",type:"<code> (...args: any)</code>",default:"-",desc:"نسخه‌ای تأخیر یافته از تابع ارائه‌شده، که اجرای آن بر اساس زمان تأخیر مشخص‌شده و گزینه‌ها تأخیر خواهد داشت."}]}]}),P=()=>e.jsx(o,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:p,demos:m,mdPrefixPath:"docs/SharedComponentsDoc/components",api:c,extra:s,keyText:"پارامتر"});export{P as default};
