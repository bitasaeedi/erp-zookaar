import{j as e}from"./index-EjvHy6Kc.js";import{S as o}from"./SyntaxHighlighter-aihePEGP.js";import{D as d}from"./DemoComponentApi-DDEpzP-j.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";const m=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["فایل ",e.jsx("code",{children:"src/configs/theme.config.ts"})," شامل تنظیمات پیش‌فرض تم برای الگو است. این تنظیمات از پیش تعریف شده‌اند، اما می‌توانند برای تطابق با نیازهای شما سفارشی‌سازی شوند. در زیر تنظیمات پیش‌فرض آمده است:"]}),e.jsx(o,{language:"ts",children:`import { THEME_ENUM } from '@/constants/theme.constant'
import {
    Direction,
    Mode,
    ControlSize,
    LayoutType,
} from '@/@types/theme'

export type ThemeConfig = {
    themeSchema: string
    direction: Direction
    mode: Mode
    panelExpand: boolean
    controlSize: ControlSize
    layout: {
        type: LayoutType
        sideNavCollapse: boolean
    }
}

export const themeConfig: ThemeConfig = {
    themeSchema: '',
    direction: THEME_ENUM.DIR_LTR,
    mode: THEME_ENUM.MODE_LIGHT,
    panelExpand: false,
    controlSize: 'md',
    layout: {
        type: THEME_ENUM.LAYOUT_COLLAPSIBLE_SIDE,
        sideNavCollapse: false,
    },
}`}),e.jsxs("div",{className:"mt-10",id:"properties",children:[e.jsx("h5",{children:"ویژگی‌های پیکربندی"}),e.jsx(d,{hideApiTitle:!0,api:[{api:[{propName:"themeSchema",type:"<code>string</code>",default:"<code>''</code>",desc:"رنگ‌بندی تم الگو را تنظیم می‌کند. می‌توانید این فیلد را خالی بگذارید اگر تم دینامیک در اپلیکیشن شما وجود دارد."},{propName:"direction",type:"<code>'ltr'</code> | <code>'rtl'</code>",default:"<code>'ltr'</code>",desc:"جهت متن برای الگو را تعریف می‌کند."},{propName:"mode",type:"<code>'light'</code> | <code>'dark'</code>",default:"<code>'light'</code>",desc:"بین حالت روشن و تاریک سوئیچ می‌کند."},{propName:"panelExpand",type:"<code>boolean</code>",default:"<code>false</code>",desc:"مشخص می‌کند که آیا پنل کناری به‌طور پیش‌فرض باز است یا خیر."},{propName:"controlSize",type:"<code>'xs'</code> | <code>'sm'</code> | <code>'md'</code> | <code>'lg'</code>",default:"<code>'md'</code>",desc:"اندازه اولیه ورودی‌های کنترل را تنظیم می‌کند."},{propName:"layout.type",type:"<code>'blank'</code>  | <code>'collapsibleSide'</code> | <code>'stackedSide'</code> | <code>'topBarClassic'</code> | <code>'framelessSide'</code> | <code>'contentOverlay'</code>",default:"<code>'modern'</code>",desc:"سبک کلی چیدمان اپلیکیشن را تعریف می‌کند."},{propName:"layout.sideNavCollapse",type:"<code>boolean</code>",default:"<code>false</code>",desc:"مشخص می‌کند که آیا ناوبری جانبی جمع شده است یا خیر. این گزینه فقط زمانی کاربرد دارد که <code>type</code> به <code>'collapsibleSide'</code> یا <code>'framelessSide'</code> تنظیم شده باشد."}]}]})]}),e.jsxs("div",{className:"mt-10",id:"persistence",children:[e.jsx("h5",{children:"پایداری وضعیت"}),e.jsxs("p",{children:["وضعیت ",e.jsx("code",{children:"themeConfig"})," به‌طور پیش‌فرض پایداری دارد، به این معنی که تنظیمات شما توسط مرورگر حفظ می‌شود. اگر ترجیح می‌دهید وضعیت تم برای کاربران حفظ نشود، می‌توانید ",e.jsx("code",{children:"src/store/themeStore.ts"})," را با حذف متد ",e.jsx("code",{children:"persist"})," از ذخیره‌سازی Zustand تغییر دهید."]}),e.jsxs("p",{children:["وضعیت پایداری شده همچنین در ",e.jsx("code",{children:"localStorage"})," مرورگر ذخیره می‌شود. اگر با مشکلی مواجه شدید که تغییرات تم اعمال نمی‌شود، ممکن است بخواهید کلید ",e.jsx("code",{children:"'theme'"})," در ",e.jsx("code",{children:"localStorage"})," را پاک کنید. می‌توانید این کار را با اجرای ",e.jsx("code",{children:"localStorage.removeItem('theme')"})," در کنسول مرورگر انجام دهید."]})]})]});export{m as default};
