import{j as e}from"./index-EjvHy6Kc.js";import{S as r}from"./SyntaxHighlighter-aihePEGP.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const i=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["برای راه‌اندازی حالت تاریک یا روشن در برنامه، کافی است فیلد"," ",e.jsx("code",{children:"mode"})," را به"," ",e.jsx("code",{children:"'light'"})," یا ",e.jsx("code",{children:"'dark'"})," در"," ",e.jsx("code",{children:"src/configs/theme.config.ts"})," تنظیم کنید. برای مثال:"]}),e.jsx(r,{language:"ts",children:`export const themeConfig = {
    ...
    mode: 'dark'
}`}),e.jsxs("div",{className:"mt-10",id:"hook",children:[e.jsx("h5",{children:"هوک"}),e.jsx("p",{className:"mt-1",children:"شما می‌توانید از طریق هوک آماده‌ی ما به حالت دسترسی پیدا کرده یا آن را به‌روزرسانی کنید."}),e.jsx(r,{language:"tsx",children:`import React from 'react'
import Switcher from '@/components/ui/Switcher'
import useDarkMode from '@/utils/hooks/useDarkMode'

const ModeSwitcher = () => {

    const [isDark, setIsDark] = useDarkMode()

    const onSwitchChange = (checked: boolean) => {
        setIsDark(checked ? 'dark' : 'light')
    }

    return (
        <div>
            <Switcher 
                value={isDark}
                onChange={checked => onSwitchChange(checked)}
            />
        </div>
    )
}

export default ModeSwitcher`})]})]});export{i as default};
