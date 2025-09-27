import{j as t}from"./index-EjvHy6Kc.js";import{D as o}from"./DemoComponentApi-DDEpzP-j.js";import{D as e}from"./DemoLayout-BkSr_Pi1.js";import{S as r}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const i=()=>t.jsx(r,{language:"js",children:`import useAuthority from '@/utils/hooks/useAuthority'

const Component = () => {

	const { userAuthority = [], authority = [], children } = props

	const userAuthority = ['USER']

	const authority = ['ADMIN', 'USER']

	const roleMatched = useAuthority(userAuthority, authority)

	return (...)
}
`}),p="UseAuthorityDoc",m={title:"useAuthority",desc:"هوک useAuthority به بررسی این که آیا کاربر فعلی اجازه دسترسی دارد کمک می‌کند."},s=[{mdName:"مثال",mdPath:p,title:"مثال",desc:"",component:t.jsx(i,{})}],u=[{component:"پارامترها",api:[{propName:"userAuthority",type:"<code>Array</code>",default:"<code>[]</code>",desc:"لیست نقش‌های کاربر"},{propName:"authority",type:"<code>Array</code>",default:"<code>[]</code>",desc:"لیست نقش‌هایی که اجازه دسترسی دارند"}]}],a=t.jsx(o,{hideApiTitle:!0,keyText:"بازگشت",api:[{component:"بازگشت",api:[{propName:"roleMatched",type:"<code>boolean</code>",default:"-",desc:"نتیجه تطابق اختیارات"}]}]}),F=()=>t.jsx(e,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:m,demos:s,api:u,mdPrefixPath:"utils",extra:a,keyText:"پارامتر"});export{F as default};
