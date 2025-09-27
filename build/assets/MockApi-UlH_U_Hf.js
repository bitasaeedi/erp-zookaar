import{j as e}from"./index-EjvHy6Kc.js";import{S as s}from"./SyntaxHighlighter-aihePEGP.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const t=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"یک API شبیه‌سازی شده ابزاری است که رفتار یک API واقعی را شبیه‌سازی می‌کند و پاسخ‌های داده‌شده را به‌طوری که انگار از یک سرور واقعی آمده است، ارائه می‌دهد. این ابزار در موقعیت‌هایی که API واقعی هنوز به‌طور کامل توسعه نیافته یا زمانی که نیاز به شبیه‌سازی تماس‌های API برای تست واحد دارید، بسیار مفید است."}),e.jsxs("p",{children:["اکمه از کتابخانه"," ",e.jsx("a",{href:"https://github.com/ctimmerm/axios-mock-adapter",target:"_blank",rel:"noreferrer",children:"axios-mock-adapter"})," ","برای مدیریت شبیه‌سازی API استفاده می‌کند. تمام تعاملات API در دمو ما از طریق این آداپتور انجام می‌شود."]}),e.jsxs("div",{className:"mt-10",id:"disableMockApi",children:[e.jsx("h5",{children:"غیرفعال کردن Mock API"}),e.jsxs("p",{className:"mt-1",children:["به‌طور پیش‌فرض، API شبیه‌سازی شده در"," ",e.jsx("strong",{children:"starter-kit"})," فعال است. اگر می‌خواهید آن را غیرفعال کنید، کافی است فیلد ",e.jsx("code",{children:"enableMock"})," را در"," ",e.jsx("code",{children:"src/configs/app.config.ts"})," برابر با ",e.jsx("code",{children:"false"})," تنظیم کنید."]}),e.jsx(s,{language:"ts",children:`const appConfig = {
        ...,
        enableMock: false
    }`})]}),e.jsxs("div",{className:"mt-10",id:"usingMockApi",children:[e.jsx("h5",{children:"استفاده از Mock API"}),e.jsx("p",{className:"mt-1",children:"اگر قصد دارید از API شبیه‌سازی شده استفاده کنید، مراحل زیر را برای ایجاد داده‌های پایگاه‌داده جعلی و API ها دنبال کنید:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"راه‌اندازی"}),e.jsxs("p",{className:"mt-1",children:["به ",e.jsx("code",{children:"src/mock/MockAdapter.ts"})," بروید. این فایل شامل پیکربندی پایه برای API شبیه‌سازی شده است."]}),e.jsx(s,{language:"ts",children:`import MockAdapter from 'axios-mock-adapter'
    import AxiosBase from '@/services/axios/AxiosBase'
    
    export const mock = new MockAdapter(AxiosBase)`})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ایجاد یک Mock API"}),e.jsxs("p",{className:"mt-1",children:["برای ایجاد یک API شبیه‌سازی شده، آن را به ",e.jsx("code",{children:"src/mock/MockAdapter.ts"})," اضافه کنید. به‌عنوان مثال، می‌توانید ",e.jsx("code",{children:"userFakeApi.ts"})," را ایجاد کنید. به یاد داشته باشید که باید نمونه شبیه‌سازی را از"," ",e.jsx("code",{children:"MockAdapter.ts"})," وارد کرده و یک مسیر ایجاد کنید."]}),e.jsx(s,{language:"ts",children:`import { mock } from '../MockAdapter'
    
    mock.onGet('/api/users').reply(() => {
        return [200, [
            {
                id: '1',
                name: 'Carolyn Perkins',
            },
            {
                id: '2',
                name: 'Terrance Moreno',
            },
            {
                id: '3',
                name: 'Ron Vargas',
            },
        ]];
    })`})]}),e.jsxs("li",{children:[e.jsxs("p",{children:["سپس فایل ",e.jsx("code",{children:"userFakeApi.ts"})," خود را به فایل ورودی شبیه‌سازی ",e.jsx("code",{children:"src/mock/index.ts"})," وارد کنید."]}),e.jsx(s,{language:"ts",children:`import { mock } from './MockAdapter'
    import './fakeApi/userFakeApi'
    ...
    
    mock.onAny().passThrough();`})]})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"حالا می‌توانید درخواست‌هایی به این API شبیه‌سازی شده ارسال کرده و داده‌های استاتیکی که به عنوان پاسخ تنظیم کرده‌اید، دریافت کنید."}),e.jsx(s,{language:"ts",children:`// service
    import ApiService from "./ApiService"
    
    type GetUserResponse = {
        id: string
        name: string
        email: string
    }[]
    
    export async function apiGetUsers () {
        return ApiService.fetchData<GetUserResponse>({
            url: '/api/getUsers',
            method: 'get'
        })
    }`}),e.jsx(s,{language:"ts",children:`// component
    import { useEffect } from 'react'
    import { apiGetUsers } from './YourService.ts'
    
    const YourComponent = () => {
    
        const fetchData = async () => {
            try {
                const resp = await apiGetUsers()
                console.log(resp.data)
            } catch (errors) {
                // handle errors
            }
        }
    
        useEffect(() => {
            fetchData()
        }, [])
    
        return (
            // your component JSX
        )
    }`})]}),e.jsxs("p",{children:["برای اطلاعات بیشتر در مورد استفاده از ",e.jsx("code",{children:"axios-mock-adapter"}),"، به"," ",e.jsx("a",{href:"https://github.com/ctimmerm/axios-mock-adapter",target:"_blank",rel:"noreferrer",children:"مخزن رسمی GitHub"}),"مراجعه کنید."]})]});export{t as default};
