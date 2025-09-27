import{j as e}from"./index-EjvHy6Kc.js";import{S as t}from"./SyntaxHighlighter-aihePEGP.js";import{D as s}from"./DemoComponentApi-DDEpzP-j.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";const h=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"این راهنما یک نمای کلی از سیستم احراز هویت پیاده‌سازی‌شده در الگو را ارائه می‌دهد."}),e.jsxs("div",{className:"mt-10",id:"useAuth",children:[e.jsx("h5",{children:"useAuth"}),e.jsxs("p",{className:"mt-1",children:["سیستم احراز هویت از طریق کامپوننت"," ",e.jsx("code",{children:"AuthProvider"})," مدیریت می‌شود که باید اپلیکیشن یا بخش‌های مربوطه آن را در بر گیرد. این کامپوننت وضعیت‌های احراز هویت را مدیریت می‌کند و متدهای زیر را از طریق هوک"," ",e.jsx("code",{children:"useAuth"})," فراهم می‌کند:"]}),e.jsx(s,{hideApiTitle:!0,keyText:"ویژگی‌ها",api:[{api:[{propName:"authenticated",type:"<code>boolean</code>",default:"-",desc:"یک مقدار boolean که نشان می‌دهد آیا کاربر در حال حاضر احراز هویت شده است."},{propName:"user",type:`<code> {
                                    userId: string,
                                    userName: string,
                                    authority: string[],
                                    avatar: string,
                                    email: string
                                }</code>`,default:"-",desc:"یک شی که جزئیات کاربر مانند <code>userName</code>، <code>email</code> و <code>authority</code> را شامل می‌شود."},{propName:"signIn",type:"<code>(values: {email: string, password: string}) => Promise<{status: 'success' | 'failed', message: string}></code>",default:"-",desc:"یک متد برای ورود کاربر با استفاده از اطلاعات احراز هویت."},{propName:"signUp",type:"<code>(values: {userName: string, email: string, password: string}) => Promise<{status: 'success' | 'failed', message: string}></code>",default:"-",desc:"یک متد برای ثبت‌نام یک کاربر جدید."},{propName:"signOut",type:"<code>() => void</code>",default:"-",desc:"یک متد برای خروج از حساب کاربری فعلی."},{propName:"oAuthSignIn",type:`<code>callback: (payload: { 
                                    onSignIn: (tokens: Token, user?: User) => void,
                                    redirect: () => void
                                }) => void</code>`,default:"-",desc:"یک متد برای مدیریت بازگشت‌های OAuth برای احراز هویت با سرویس‌دهندگان شخص ثالث."}]}]}),e.jsx("p",{children:"این‌طور می‌توانید از هوک useAuth در کامپوننت‌ها استفاده کنید:"}),e.jsx(t,{language:"tsx",children:`import { useAuth } from '@/auth'
    
    const YourComponent = () => {
        const { signIn, signOut, user, authenticated } = useAuth();
    
        const handleLogin = async () => {
            const credentials = { email: 'user@example.com', password: 'password' };
            const result = await signIn(credentials);
            if (result?.status === 'success') {
                console.log('ورود موفقیت‌آمیز بود');
            }
            if (result?.status === 'failed') {
                console.error('ورود ناموفق بود')
            }
        };
    
        const handleLogout = () => {
            signOut();
        };
    
        return (
            <div>
                {authenticated ? <p>خوش آمدید، {user.userName}</p> : <p>لطفاً وارد شوید</p>}
                <button onClick={handleLogin}>ورود</button>
                <button onClick={handleLogout}>خروج</button>
            </div>
        );
    };
    `})]}),e.jsxs("div",{className:"mt-10",id:"OAuth",children:[e.jsx("h5",{children:"ورود با OAuth"}),e.jsxs("p",{className:"mt-1",children:["اگر شما از OAuth با سرویس‌دهندگان شخص ثالث استفاده می‌کنید، متد"," ",e.jsx("code",{children:"oAuthSignIn"})," ضروری خواهد بود. می‌توانید از آن در درون بازگشت OAuth خود برای تکمیل فرایند ورود و مدیریت توکن‌ها استفاده کنید."]}),e.jsx(t,{language:"tsx",children:`import { useAuth } from '@/auth'
    import SomeOauthSdkSignInMethod from 'SomeOauthSdk'
    
    const YourComponent = () => {
        const { oAuthSignIn } = useAuth();
    
        const handleOAuthSignIn = () => {
            oAuthSignIn(async ({redirect, onSignIn}) => {
                try {
                    const resp = await SomeOauthSdkSignInMethod()
                    if (resp) {
                        /** استخراج توکن و اطلاعات کاربر از پاسخ */ 
                        const { token, user } = resp
                        onSignIn({accessToken: token}, user)
                        redirect()
                    }
                } catch (error) {
                    console.error('ورود ناموفق بود')
                }
            })
        }
    
        const handleLogout = () => {
            signOut();
        };
    
        return (
            <button onClick={handleOAuthSignIn}>ورود با OAuth</button>
        );
    };
    `})]}),e.jsxs("div",{className:"mt-10",id:"customizing-data-model",children:[e.jsx("h5",{children:"سفارشی‌سازی مدل‌های داده"}),e.jsxs("p",{className:"mt-1",children:["از آنجا که همه‌ی برنامه‌ها مدل داده یکسانی ندارند، شما می‌توانید ساختارهای داده را در"," ",e.jsx("code",{children:"@/types/auth.ts"})," و"," ",e.jsx("code",{children:"@/auth/AuthProvider.ts"})," برای متناسب‌سازی با نیازهای خود سفارشی کنید. انواع و رابط‌ها تعریف‌شده برای"," ",e.jsx("code",{children:"User"}),"، ",e.jsx("code",{children:"Token"})," و سایر موجودیت‌های مرتبط با احراز هویت را طبق نیازهای برنامه خود تنظیم کنید."]}),e.jsx(t,{language:"ts",children:`// مثال: تغییر نوع User
    export type User = {
        userId?: string | null
        avatar?: string | null
        userName?: string | null
        email?: string | null
        authority?: string[]
        // فیلدهای سفارشی خود را اینجا اضافه کنید
        role?: string | null
    };
    `}),e.jsxs("div",{className:"mt-10",id:"useAuth",children:[e.jsx("h5",{children:"ورود به جزئیات AuthProvider"}),e.jsxs("p",{className:"mt-1",children:["اگر پیاده‌سازی پیش‌فرض احراز هویت نیازهای شما را برآورده نمی‌کند، می‌توانید به درون"," ",e.jsx("code",{children:"AuthProvider"})," بروید و تغییرات لازم را اعمال کنید. این کامپوننت منطق اصلی احراز هویت، از جمله مدیریت توکن‌ها، مدیریت جلسه‌ها و موارد دیگر را مدیریت می‌کند. سفارشی‌سازی این منطق می‌تواند به شما کمک کند که سیستم احراز هویت را متناسب با نیازهای خاص برنامه خود تنظیم کنید."]}),e.jsx(t,{language:"tsx",children:`...
    import { apiSignIn, apiSignOut, apiSignUp } from '@/services/AuthService'
    
    function AuthProvider({ children }: AuthProviderProps) {
        ...
    
        const handleSignIn = (...) => {
            ... /** پیاده‌سازی خود را اینجا انجام دهید */
        }
    
        const handleSignOut = () => {
            ... /** پیاده‌سازی خود را اینجا انجام دهید */
        }
    
        const signIn = async (values: SignInCredential): AuthResult => {
            try {
                const resp = await apiSignIn(values)
                if (resp) {
                    handleSignIn(...)
                }
            } catch (errors: any) {
                return {
                    status: 'failed',
                    message: errors?.response?.data?.message || errors.toString(),
                }
            }
        }
    
        const signOut = async () => {
            try {
                await apiSignOut()
            } finally {
                handleSignOut()
                navigate(appConfig.unAuthenticatedEntryPath)
            }
        }
        ...   
        
        return (
            <AuthContext.Provider value={{
                signIn,
                signOut,
                ...
            }}>
                {children}
            </AuthContext.Provider>
        )
    }
    `})]})]})]});export{h as default};
