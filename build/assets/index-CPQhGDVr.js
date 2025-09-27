import{j as e}from"./index-EjvHy6Kc.js";import{D as o}from"./DemoComponentApi-DDEpzP-j.js";import{D as t}from"./DemoLayout-BkSr_Pi1.js";import{S as r}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const i=()=>e.jsx(r,{language:"js",children:`import sortBy from '@/utils/sortBy'

const arr = [
	{
		name: 'Carolyn Perkins',
		email: 'eileen_h@hotmail.com',
	},
	{
		name: 'Terrance Moreno',
		email: 'terrance_moreno@infotech.io',
	},
	{
		name: 'Ron Vargas',
		email: 'ronnie_vergas@infotech.io',
	},
	{
		name: 'Luke Cook',
		email: 'cookie_lukie@hotmail.com',
	},
]

const data = arr.sort(sortBy('name', false , (a) =>  a.toUpperCase()))

// output: [
// 	{
// 		name: 'Carolyn Perkins',
// 		email: 'eileen_h@hotmail.com',
// 	},
// 	{
// 		name: 'Luke Cook',
// 		email: 'cookie_lukie@hotmail.com',
// 	},
// 	{
// 		name: 'Ron Vargas',
// 		email: 'ronnie_vergas@infotech.io',
// 	},
//  {
// 		name: 'Terrance Moreno',
// 		email: 'terrance_moreno@infotech.io',
// 	},
// ]
`}),a="SortByDoc/",m={title:"sortBy",desc:"تابع <code>sortBy</code> قادر است آرایه‌ای از اشیاء را بر اساس کلید با استفاده از تابع مقایسه <code>array.sort</code> مرتب کند."},n=[{mdName:"مثال",mdPath:a,title:"مثال",desc:"",component:e.jsx(i,{})}],p=[{component:"پارامترها",api:[{propName:"field",type:"<code>string</code>",default:"-",desc:"کلید شیء که هدف مرتب‌سازی است"},{propName:"reverse",type:"<code>boolean</code>",default:"-",desc:"ترتیب نتیجه، <code>true</code> برای نزولی، <code>false</code> برای صعودی"},{propName:"primer",type:"<code>(key: string) => (key) => void</code>",default:"-",desc:"بسته بازگشتی برای کلید"}]}],c=e.jsx(o,{hideApiTitle:!0,keyText:"بازگشت",api:[{component:"بازگشت",api:[{propName:"result",type:"<code>(a, b) => boolean</code>",default:"-",desc:"تابع بازگشتی مرتب‌سازی"}]}]}),L=()=>e.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:m,demos:n,api:p,mdPrefixPath:"docs/SharedComponentsDoc/components",extra:c,keyText:"پارامتر"});export{L as default};
