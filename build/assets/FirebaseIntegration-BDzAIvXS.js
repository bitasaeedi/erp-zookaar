import{j as e}from"./index-EjvHy6Kc.js";import{S as s}from"./SyntaxHighlighter-aihePEGP.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const o=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"فایر بیس یک پلتفرم توسعه یافته توسط گوگل است که مجموعه‌ای از ابزارها و خدمات را برای کمک به شما در ساخت برنامه‌های موبایل و وب ارائه می‌دهد. این پلتفرم خدماتی مانند احراز هویت، پایگاه داده‌های زمان واقعی، فضای ذخیره‌سازی ابری و هاستینگ را فراهم می‌کند که آن را به انتخابی قدرتمند برای توسعه‌دهندگان تبدیل می‌کند."}),e.jsx("p",{children:"قالب ما شامل ادغام اولیه فایر بیس است. اگر برنامه شما از فایر بیس استفاده می‌کند، این راهنما به شما کمک می‌کند تا فایر بیس را به راحتی در قالب ادغام کنید."}),e.jsxs("div",{className:"mt-10",id:"prerequisites",children:[e.jsx("h5",{children:"پیش‌نیازها"}),e.jsx("ul",{className:"mt-1",children:e.jsxs("li",{children:[e.jsx("p",{children:"یک پروژه فایر بیس در کنسول فایر بیس ایجاد کنید."}),e.jsxs("ol",{children:[e.jsxs("li",{children:["به"," ",e.jsx("a",{target:"_new",href:"https://console.firebase.google.com/",children:"کنسول فایر بیس"})," ","بروید و یک پروژه جدید ایجاد کنید."]}),e.jsx("li",{children:'پس از راه‌اندازی پروژه، گزینه "وب" را انتخاب کنید تا یک اپلیکیشن وب به پروژه‌تان اضافه کنید.'}),e.jsx("li",{children:"دستورالعمل‌ها را برای ثبت اپلیکیشن و دریافت شیء پیکربندی فایر بیس دنبال کنید."})]})]})})]}),e.jsxs("div",{className:"mt-10",id:"setup-firebase-config",children:[e.jsx("h5",{children:"پیکربندی فایر بیس"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("p",{children:["به فایل ",e.jsx("code",{children:"firebase.config.ts"})," در دایرکتوری ",e.jsx("code",{children:"/configs"})," بروید. اطلاعات پیکربندی فایر بیس خود را در این فایل قرار دهید که می‌توانید آن را در کنسول فایر بیس پیدا کنید. برای امنیت بیشتر، توصیه می‌شود این مقادیر را در فایل ",e.jsx("code",{children:".env"})," ذخیره کنید."]}),e.jsx(s,{language:"js",children:`const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
    };
    
    export default firebaseConfig`})]}),e.jsxs("li",{children:[e.jsxs("p",{children:["مثال پیکربندی فایر بیس در فایل ",e.jsx("code",{children:".env"}),":"]}),e.jsx(s,{language:"js",children:`VITE_FIREBASE_API_KEY=xxxxxxxxxxxxxxxxx
    VITE_FIREBASE_AUTH_DOMAIN=xxxxxxxxxx.firebaseapp.com
    VITE_FIREBASE_PROJECT_ID=xxxxxxxxxx
    VITE_FIREBASE_STORAGE_BUCKET=xxxxxxxxxx.appspot.com
    VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxx
    VITE_FIREBASE_APP_ID=xxxxxxxxxx
    VITE_FIREBASE_MEASUREMENT_ID=G-xxxxxxxxxx`})]})]})]}),e.jsxs("div",{className:"mt-10",id:"initialize-firebase",children:[e.jsx("h5",{children:"راه‌اندازی فایر بیس"}),e.jsxs("p",{children:["ما یک نمونه ساده از فایر بیس را در"," ",e.jsx("code",{children:"src/services/firebase/FirebaseApp.ts"})," راه‌اندازی کرده‌ایم. این راه‌اندازی به عنوان پایه‌ای برای تنظیم سایر خدمات فایر بیس مانند احراز هویت فایر بیس و فایر بیس فایر استور عمل می‌کند. شما می‌توانید بسته‌های اضافی فایر بیس را به دلخواه اضافه کنید."]}),e.jsx(s,{language:"ts",children:`import { initializeApp } from "firebase/app"
    
    import firebaseConfig from '@/configs/firebase.config';
    
    const FirebaseApp = initializeApp(firebaseConfig);
    
    export default FirebaseApp`})]}),e.jsxs("div",{className:"mt-10",id:"integrating-firebase",children:[e.jsx("h5",{children:"ادغام فایر بیس"}),e.jsx("p",{children:"این بخش شما را از طریق مثال‌هایی برای ورود به سیستم با فایر بیس و بازیابی داده‌ها از فایر بیس راهنمایی می‌کند."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"ورود به سیستم با فایر بیس"}),e.jsx("p",{children:"فایر بیس از روش‌های مختلف احراز هویت پشتیبانی می‌کند، از جمله رمز عبور، شماره تلفن و ارائه‌دهندگان شناخته‌شده هویت مانند گوگل، فیسبوک و توییتر."}),e.jsxs("p",{children:["در زیر مثالی از ادغام OAuth گوگل آورده شده است. ابتدا یک فایل به نام"," ",e.jsx("code",{children:"FirebaseGoogleAuth.ts"})," ایجاد کرده و یک متد"," ",e.jsx("code",{children:"signInWithFirebaseGoogle"})," تنظیم کنید:"]}),e.jsx(s,{language:"ts",children:`import {
        GoogleAuthProvider,
        signInWithPopup,
    } from 'firebase/auth'
    import FirebaseAuth from './FirebaseAuth';
    
    const googleAuthProvider = new GoogleAuthProvider();
    
    export const signInWithFirebaseGoogle = async () => {
        try {
            const resp = await signInWithPopup(FirebaseAuth, googleAuthProvider);
            const token = await resp.user.getIdToken()
            return {
                token,
                user: resp.user
            }
        } catch (error) {
            throw error
        }
    }`}),e.jsxs("p",{children:["سپس این متد را در فایل"," ",e.jsx("code",{children:"OAuthService.ts"})," در تابع"," ",e.jsx("code",{children:"apiGoogleOauthSignIn"})," وارد کنید:"]}),e.jsx(s,{language:"ts",children:`import { signInWithFirebaseGoogle } from './firebase/FirebaseGoogleAuth'
    
    export async function apiGoogleOauthSignIn() {
        return await signInWithFirebaseGoogle()
    }`}),e.jsxs("p",{children:["حالا آن را با دکمه ورود خود ادغام کنید. اطمینان حاصل کنید که"," ",e.jsx("code",{children:"apiGoogleOauthSignIn"})," درون متد"," ",e.jsx("code",{children:"oAuthSignIn"})," از هوک"," ",e.jsx("code",{children:"useAuth"})," فراخوانی شود تا وضعیت پس از ورود با OAuth به‌روزرسانی شود."]}),e.jsx(s,{language:"tsx",children:`import Button from '@/components/ui/Button'
    import { useAuth } from '@/auth'
    import { apiGoogleOauthSignIn } from '@/services/OAuthServices'
    
    const OauthSignIn = () => {
    
        const { oAuthSignIn } = useAuth()
    
        const handleGoogleSignIn = async () => {
            oAuthSignIn(async ({redirect, onSignIn}) => {
                try {
                    const resp = await apiGoogleOauthSignIn()
                    if (resp) {
                        const { token, user } = resp
                        onSignIn({accessToken: token}, user)
                        redirect()
                    }
                } catch (error) {
                    console.error(error)
                }
            })
        }
    
        return (
            <Button className="flex-1" onClick={handleGoogleSignIn} type="button">
                <div className="flex items-center justify-center gap-2">
                    <span>ورود با گوگل</span>
                </div>
            </Button>
        )
    }
    
    export default OauthSignIn`})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"بازیابی داده‌ها از فایر بیس"}),e.jsx("p",{children:"در اینجا مثالی از چگونگی بازیابی داده‌ها از فایر بیس فایر استور آورده شده است. در این مثال، داده‌های یک کاربر از پایگاه داده فایر استور بازیابی شده و در یک کامپوننت نمایش داده می‌شود."}),e.jsx(s,{language:"tsx",children:`import { doc, getDoc } from "firebase/firestore"; 
    import db from "@/services/firebase/FirebaseDB";
    import { useEffect, useState } from "react";
    
    const Example = () => {
    
        const [data, setData] = useState<{firstName?: string, lastName?: string}>({})
    
        useEffect(() => {
            const getData = async () => {
                try {
                    const docRef = doc(db, "users", "1");
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setData(docSnap.data())
                    } else {
                        console.log("هیچ سندی یافت نشد!");
                    }
                } catch (error) {
                    console.error('خطا در بازیابی سند:', error)
                }
            }
            getData()
        }, [])
    
        return (
            <div>
                <p>نام: {data.firstName}</p>
                <p>نام خانوادگی: {data.lastName}</p>
            </div>
        )
    }
    
    export default Example`})]})]})]})]});export{o as default};
