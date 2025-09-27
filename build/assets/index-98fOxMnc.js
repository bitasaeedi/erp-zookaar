import{j as e}from"./index-EjvHy6Kc.js";import{D as t}from"./DemoComponentApi-DDEpzP-j.js";import{D as s}from"./DemoLayout-BkSr_Pi1.js";import{S as r}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const o=()=>e.jsx(r,{language:"js",children:`import { useState } from 'react';
import useAuth from '@/auth/useAuth'

const Component = () => {

    const { authenticated, user, signIn, signOut, signUp, oAuthSignIn } = useAuth()
    const [ error, setError ] = useState<string | null>(null)

    const handleSignIn = async ({ email, password }: { email:string, password: string }) => {
    
        const result = await signIn({ email, password })

        if (result.status === 'failed') {
            setError(result.message)
        }
    }

    const handleSignUp = async ({ userName, email, password }: { userName: string, email:string, password: string }) => {
    
        const result = await signUp({ userName, email, password })

        if (result.status === 'failed') {
            setError(result.message)
        }
    }

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
                setError?.((error as string)?.toString() || '')
            }
        })
    }

    const handleSignout = () => {
        signOut()
    }

    return (
        <>
            {authenticated && (
                <div>
                    <h6>Welcome, {user?.userName}</h6>
                    <div>{user?.email}</div>
                </div>
            )}
        </>
    )
}
`}),i="UseAuthDoc/",a={title:"useAuth",desc:"هوکی که به هر کامپوننت این امکان را می‌دهد که وضعیت و متدهای احراز هویت و کاربران فعلی را دریافت کند."},n=[{mdName:"Example",mdPath:i,title:"مثال",desc:"",component:e.jsx(o,{})}],u=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"authenticated",type:"<code>boolean</code>",default:"-",desc:"وضعیت احراز هویت فعلی"},{propName:"oAuthSignIn",type:`<code>(callback: (payload: {
    onSignIn: (tokens: Token, user?: User) => void
    redirect: () => void
}) => void) => void</code>`,default:"-",desc:"تابع callback پس از ورود یک‌باره"},{propName:"signIn",type:"<code>({email: string, password: string}) => ({status: 'success' | 'failed', message: string})</code>",default:"-",desc:"مدیریت ورود، وضعیت و پیام را به عنوان نتیجه برمی‌گرداند"},{propName:"signOut",type:"<code>() => void</code>",default:"-",desc:"مدیریت خروج"},{propName:"signUp",type:"<code>({userName: string, email: string, password: string}) => ({status: 'success' | 'failed', message: string})</code>",default:"-",desc:"مدیریت ثبت‌نام، وضعیت و پیام را به عنوان نتیجه برمی‌گرداند"},{propName:"user",type:`<code>{
    userId?: string | null
    avatar?: string | null
    userName?: string | null
    email?: string | null
    authority?: string[]
}</code>`,default:"-",desc:"اطلاعات کاربر وارد شده"}]}]}),O=()=>e.jsx(s,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:a,demos:n,mdPrefixPath:"utils",extra:u,keyText:"param"});export{O as default};
