import{j as t}from"./index-EjvHy6Kc.js";import{S as e}from"./SyntaxHighlighter-aihePEGP.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const c=()=>t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"در این الگو، ما از Zustand برای مدیریت وضعیت استفاده کرده‌ایم. Zustand یک راه‌حل مدیریت وضعیت کوچک، سریع و مقیاس‌پذیر است که به شما این امکان را می‌دهد که وضعیت را خارج از درخت کامپوننت React مدیریت کنید، که این یک روش کارآمدتر برای مدیریت وضعیت جهانی در سراسر برنامه شما فراهم می‌کند."}),t.jsx("p",{children:"ما از Zustand برای مدیریت برخی از وضعیت‌های اصلی در الگو استفاده می‌کنیم، اما این کاملاً اختیاری است و شما می‌توانید به راحتی از آن در پروژه‌های خود استفاده کنید. اگر ترجیح می‌دهید از کتابخانه دیگری برای مدیریت وضعیت یا حتی از وضعیت داخلی React استفاده کنید، می‌توانید به راحتی به آن چیزی که بهترین مناسب شما است تغییر دهید."}),t.jsxs("div",{className:"mt-10",id:"creating-zustand-state",children:[t.jsx("h5",{children:"ایجاد وضعیت در Zustand"}),t.jsx("p",{children:"ایجاد یک store در Zustand بسیار ساده است. در زیر مثالی آورده شده است که نحوه ایجاد وضعیت جهانی برای مدیریت یک شمارنده ساده را نشان می‌دهد:"}),t.jsx(e,{language:"typescript",children:`import create from 'zustand'
    
    type CouterState = {
        count: number
    }
    
    type CouterAction = {
        increaseCount: () => void
        decreaseCount: () => void
    }
    
    // تعریف store
    const useCounterStore = create<CouterState & CouterAction>((set) => ({
        count: 0,
        increaseCount: () => set((state) => ({ count: state.count + 1 })),
        decreaseCount: () => set((state) => ({ count: state.count - 1 })),
    }))
    
    export default useCounterStore`}),t.jsxs("p",{children:["در این مثال، ما یک store با وضعیت ",t.jsx("code",{children:"count"})," و دو اکشن"," ",t.jsx("code",{children:"increaseCount"})," و ",t.jsx("code",{children:"decreaseCount"})," ایجاد کرده‌ایم. این اکشن‌ها وضعیت را با افزایش یا کاهش ",t.jsx("code",{children:"count"})," به‌روز می‌کنند."]})]}),t.jsxs("div",{className:"mt-10",id:"using-zustand-state",children:[t.jsx("h5",{children:"استفاده از وضعیت Zustand در یک کامپوننت"}),t.jsxs("p",{children:["پس از ایجاد store، استفاده از آن در یک کامپوننت ساده است. در اینجا نحوه ادغام ",t.jsx("code",{children:"useCounterStore"})," در یک کامپوننت React را می‌بینید:"]}),t.jsx(e,{language:"tsx",children:`import useCounterStore from './path/to/store'
    
    const Counter = () => {
        const { count, increaseCount, decreaseCount } = useCounterStore()
    
        return (
            <div>
                <h1>شمارنده: {count}</h1>
                <button onClick={increaseCount}>افزایش</button>
                <button onClick={decreaseCount}>کاهش</button>
            </div>
        )
    }
    
    export default Counter`}),t.jsxs("p",{children:["در این کامپوننت، ما از hook ",t.jsx("code",{children:"useCounterStore"})," برای دسترسی به وضعیت ",t.jsx("code",{children:"count"})," و دو اکشن استفاده می‌کنیم. UI به‌طور خودکار هر بار که وضعیت تغییر می‌کند به‌روز می‌شود و دکمه‌ها به کاربر این امکان را می‌دهند که با وضعیت تعامل کند."]})]}),t.jsxs("p",{children:["این فقط یک مثال ساده برای شروع کار با Zustand است. Zustand انعطاف‌پذیر است و می‌توان از آن برای سناریوهای پیچیده‌تر مدیریت وضعیت به‌ویژه زمانی که برنامه شما گسترش پیدا می‌کند استفاده کرد. اگر می‌خواهید استفاده‌های پیشرفته‌تر را بررسی کنید، پیشنهاد می‌کنیم مستندات رسمی"," ",t.jsx("a",{href:"https://zustand.docs.pmnd.rs/getting-started/introduction",target:"_blank",rel:"noreferrer",children:"Zustand"}),"را مطالعه کنید."]})]});export{c as default};
