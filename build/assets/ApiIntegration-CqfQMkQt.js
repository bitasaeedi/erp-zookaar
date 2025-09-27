import{j as e}from"./index-EjvHy6Kc.js";import{S as s}from"./SyntaxHighlighter-aihePEGP.js";import{A as r}from"./Alert-CyPU0_R_.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";import"./StatusIcon-VXoC4IHA.js";import"./index-D8VdvZjP.js";import"./CloseButton-BPOu2BWS.js";import"./proxy-BqwOGYm8.js";const h=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"در این راهنما، شما یاد خواهید گرفت که چگونه API پشتیبان خود را با قالب ادغام کنید. ما همه چیز از پیکربندی محیط گرفته تا راه‌اندازی پراکسی و ایجاد فایل‌های سرویس برای ارتباط بی‌وقفه با API را پوشش خواهیم داد."}),e.jsxs("div",{className:"mt-10",id:"turningOffMockApi",children:[e.jsx("h5",{className:"mb-4",children:"غیرفعال کردن API ساختگی"}),e.jsxs(r,{showIcon:!0,type:"info",title:"مهم:",children:["قبل از شروع، مطمئن شوید که API ساختگی را با تنظیم ",e.jsx("code",{children:"enableMock"})," به ",e.jsx("code",{children:"false"})," در"," ",e.jsx("code",{children:"src/configs/app.config.ts"})," غیرفعال کرده‌اید. قالب به‌طور پیش‌فرض از API ساختگی استفاده می‌کند، بنابراین غیرفعال کردن آن به اپلیکیشن شما این امکان را می‌دهد که به سرور واقعی خود وصل شود."]})]}),e.jsxs("div",{className:"mt-10",id:"proxying",children:[e.jsx("h5",{children:"راه‌اندازی پراکسی"}),e.jsxs("p",{className:"mt-1",children:["اگر API پشتیبان شما روی سرور متفاوتی از فرانت‌اند شما قرار دارد، باید پراکسی راه‌اندازی کنید تا از مشکلات درخواست‌های میان‌مرزی (CORS) جلوگیری شود. می‌توانید پراکسی را از طریق فایل ",e.jsx("code",{children:"package.json"})," یا از طریق ",e.jsx("code",{children:"vite.config.ts"})," برای انعطاف‌پذیری بیشتر پیکربندی کنید."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"گزینه 1: راه‌اندازی دستی در Vite"}),e.jsxs("p",{className:"mt-1",children:["برای راه‌اندازی سفارشی‌تر، پراکسی را در ",e.jsx("code",{children:"vite.config.ts"})," پیکربندی کنید:"]}),e.jsx(s,{language:"ts",children:`export default defineConfig({
        plugins: ...,
        server: {
            proxy: {
                '/api': {
                    // آدرس URL سرور بک‌اند خود را به‌روزرسانی کنید
                    target: 'http://yourDevDomain.com',
                    changeOrigin: true,
                    secure: false,
                }
            }
        }
    })`})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"گزینه 2: استفاده از package.json"}),e.jsxs("p",{className:"mt-1",children:["برای راه‌اندازی سریع پراکسی، خط زیر را به فایل ",e.jsx("code",{children:"package.json"})," اضافه کنید:"]}),e.jsx(s,{language:"json",children:'"proxy": "http://yourDevDomain.com"'})]})]})]}),e.jsxs("div",{className:"mt-10",id:"configureApiPrefix",children:[e.jsx("h5",{children:"پیکربندی پیشوند API"}),e.jsxs("p",{children:["می‌توانید پیشوندی برای انتهای API خود در ",e.jsx("code",{children:"src/configs/app.config.ts"})," با استفاده از ویژگی"," ",e.jsx("code",{children:"apiPrefix"})," تعریف کنید. این پیشوند به تمامی درخواست‌های API اضافه خواهد شد و ساختار API شما را منظم و قابل مدیریت نگه می‌دارد."]}),e.jsx(s,{language:"ts",children:`const appConfig: AppConfig = {
        apiPrefix: '/api',
        // سایر پیکربندی‌ها...
    }`})]}),e.jsx("div",{className:"mt-10",id:"integration",children:e.jsx("h5",{children:"ادغام گام‌به‌گام"})}),e.jsx("p",{children:"مراحل زیر را برای راه‌اندازی ارتباط با API پشتیبان دنبال کنید:"}),e.jsxs("ol",{children:[e.jsx("li",{children:e.jsxs("p",{children:["ابتدا یک فایل سرویس جدید مخصوص ویژگی یا ماژول خود ایجاد کنید. به عنوان مثال، اگر روی مدیریت کاربران کار می‌کنید، فایلی به نام"," ",e.jsx("code",{children:"UserManagementService.ts"})," در دایرکتوری ",e.jsx("code",{children:"services"})," ایجاد کنید."]})}),e.jsxs("li",{children:[e.jsxs("p",{children:["داخل فایل سرویس، یک تابع ناهمگام برای انجام درخواست API اعلام کنید. این تابع باید از ",e.jsx("code",{children:"ApiService.fetchData"})," استفاده کند و دو نوع جنریک: ",e.jsx("strong",{children:"Response"})," و"," ",e.jsx("strong",{children:"Request"})," به همراه پیکربندی Axios را بپذیرد. در اینجا یک مثال آورده شده است:"]}),e.jsx(s,{language:"ts",children:`type MyApiResponse = {
        someResponseData: string
        someResponseData2: boolean
    }
    
    type MyApiRequest = {
        someRequestData: string
    }
    
    export async function myApi (data) {
        return ApiService.fetchData<MyApiResponse,MyApiRequest>({
            url: '/my-api-url',
            method: 'post',
            data
        })
    }
    ...`}),e.jsx("p",{children:"یا ارسال نوع به صورت جنریک از سطح مصرف‌کننده:"}),e.jsx(s,{language:"ts",children:`import ApiService from "./ApiService"
    
    export async function myApi<TResponse, TRequest>(data) {
        return ApiService.fetchData<TResponse, TRequest>({
            url: '/my-api-url',
            method: 'post',
            data
        })
    }
    ...`})]}),e.jsxs("li",{children:[e.jsx("p",{children:"حالا می‌توانید این API را در کامپوننت خود وصل کنید:"}),e.jsx(s,{language:"tsx",children:`
    type MyApiResponse = {
        someResponseData: string
        someResponseData2: boolean
    }
    
    type MyApiRequest = {
        someRequestData: string
    }
    
    import { myApi } from './MyService.ts'
    
    const MyComponent = props => {
    
        const fetchData = async () => {
            const reqeustParam = { key: 'value' }
            try {
                const resp = await myApi<MyApiResponse, MyApiRequest>(reqeustParam)
                if (resp.data) {
                    ...do something
                }
            } catch (errors) {
                ...handle errors
            }
        }
        
        useEffect(() => {
            fetchData()
        }, [])
    
        return (
        ...
    )`}),e.jsxs("p",{children:[e.jsx("strong",{children:"توجه داشته باشید"}),": شما همچنین می‌توانید از کتابخانه‌های دریافت داده مانند"," ",e.jsx("a",{href:"https://swr.vercel.app/",target:"_blank",rel:"noreferrer",children:"SWR"})," ","یا"," ",e.jsx("a",{href:"https://tanstack.com/query/latest",target:"_blank",rel:"noreferrer",children:"TanStack Query"})," ","برای رویکردی دکلاکتیو در دریافت داده‌ها استفاده کنید. انتخاب به نیازهای خاص شما بستگی دارد."]})]})]})]});export{h as default};
