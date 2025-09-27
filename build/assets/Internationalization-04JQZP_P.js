import{j as e}from"./index-EjvHy6Kc.js";import{S as n}from"./SyntaxHighlighter-aihePEGP.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const o=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["اکمه از"," ",e.jsx("a",{rel:"noopener",target:"_new",href:"https://react.i18next.com/",children:e.jsx("strong",{children:"react-i18next"})})," ","برای بین‌المللی‌سازی استفاده می‌کند، که مدیریت و ترجمه متن‌ها به زبان‌های مختلف را آسان می‌کند. فایل‌های مربوطه در دایرکتوری",e.jsx("code",{children:"src/locales/"}),"قرار دارند."]}),e.jsxs("div",{className:"mt-10",id:"translatingText",children:[e.jsx("h5",{children:"ترجمه متن"}),e.jsxs("p",{className:"mt-1",children:["برای ترجمه متن‌ها درون کامپوننت‌های خود، می‌توانید از هوک",e.jsx("code",{children:"useTranslation"}),"که توسط اکمه ارائه شده است، استفاده کنید. این هوک، ",e.jsx("code",{children:"useTranslation"})," استاندارد از",e.jsx("code",{children:"react-i18next"}),"را می‌پیچد و به شما این امکان را می‌دهد که از تابع ترجمه",e.jsx("code",{children:"t"}),"برای ترجمه کلیدهای تعریف‌شده در فایل‌های زبان خود استفاده کنید."]}),e.jsx(n,{language:"tsx",children:`import { useTranslation } from '@/utils/hooks/useTranslation'

const Component = () => {

    const { t } = useTranslation()

    return (
        <div>{t('your.translate.key')}</div>
    )
}

export default Component`})]}),e.jsxs("div",{className:"mt-10",id:"changingLanguage",children:[e.jsx("h5",{children:"تغییر زبان"}),e.jsxs("p",{className:"mt-1",children:["اگر نیاز به تغییر زبان به‌طور داینامیک دارید، می‌توانید از شیء",e.jsx("code",{children:"i18n"}),"که توسط هوک",e.jsx("code",{children:"useTranslation"}),"ارائه شده است، برای تغییر زبان فعلی استفاده کنید."]}),e.jsx(n,{language:"tsx",children:`import { useTranslation } from 'react-i18next'

const Component = () => {

    const { i18n } = useTranslation()

    return (
        <button onClick={() => i18n.changeLanguage('fr')}>Change language</button>
    )
}

export default Component`})]}),e.jsxs("div",{className:"mt-10",id:"addNewLocale",children:[e.jsx("h5",{children:"افزودن زبان جدید"}),e.jsxs("p",{className:"mt-1",children:["تمام داده‌های زبان در مسیر"," ",e.jsx("code",{children:"src/locales/lang/*"}),"ذخیره می‌شوند. برای افزودن یک زبان جدید، یک فایل Json در این دایرکتوری ایجاد کنید. به عنوان مثال"," ",e.jsx("code",{children:"fr.json"})]}),e.jsx(n,{language:"json",children:`{
    "your": {
        "translate": {
            "key": "votre clé de traduction"
        },
    }
}`}),e.jsxs("p",{children:["حالا می‌توانید این فایل را به"," ",e.jsx("code",{children:"src/locales/index.ts"})," وارد کرده و آن‌ها را به فیلد"," ",e.jsx("code",{children:"resources"})," اضافه کنید. این فایل ورودی تمام زبان‌ها است. همچنین، یک شیء برای بارگذاری زبان تاریخ به‌طور داینامیک از"," ",e.jsx("a",{href:"https://github.com/iamkun/dayjs/tree/dev/src/locale",target:"_blank",rel:"noopener noreferrer",children:e.jsx("code",{children:"dayjs"})}),"ایجاد کنید."]}),e.jsx(n,{language:"ts",children:`import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './lang/en.json'
import fr from './lang/fr.json'

const resources = {
    en: {
        translation: en
    },
    fr: { // <--- this will be the value you use on changeLanguage method
        translation: fr
    },
}

// Consistent the key with resource to load relavant locale from day.js
export const dateLocales: {
    [key: string]: () => Promise<ILocale>;
} = {
    en: () => import('dayjs/locale/en'),
    fr: () => import('dayjs/locale/fr'),
}

`}),e.jsx("p",{children:"و حالا زبان جدید به‌طور بنیادی تنظیم شده است."}),e.jsxs("div",{className:"mt-10",id:"settingDefaultLanguage",children:[e.jsx("h5",{children:"تنظیم زبان پیش‌فرض"}),e.jsxs("p",{className:"mt-1",children:["برای تنظیم زبان پیش‌فرض، ممکن است نیاز باشد که به"," ",e.jsx("code",{children:"src/configs/app.config.ts"})," مراجعه کرده و مقدار فیلد"," ",e.jsx("code",{children:"locale"})," را تغییر دهید."]})]}),e.jsx(n,{language:"ts",children:`export const appConfig = {
    ...
    locale: 'fr'
}`})]}),e.jsxs("div",{className:"mt-10",id:"settingDefaultLanguage",children:[e.jsx("h5",{children:"حذف بین‌المللی‌سازی"}),e.jsxs("p",{className:"mt-1",children:["اگر نیاز به حذف بین‌المللی‌سازی یا غیرفعال کردن آن به هر دلیلی دارید، باید"," ",e.jsx("code",{children:"import './locales'"})," را از"," ",e.jsx("code",{children:"src/App.tsx"})," حذف کرده و استفاده از"," ",e.jsx("code",{children:"useTranslation"})," در کامپوننت‌های خود را نیز پاک کنید."]}),e.jsx(n,{language:"ts",children:`export const appConfig = {
    ...
    locale: 'fr'
}`})]})]});export{o as default};
