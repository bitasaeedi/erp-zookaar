import{j as e}from"./index-EjvHy6Kc.js";import{D as o}from"./DemoComponentApi-DDEpzP-j.js";import{D as r}from"./DemoLayout-BkSr_Pi1.js";import{S as t}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const i=()=>e.jsx(t,{language:"js",children:`import wildCardSearch from '@/utils/wildCardSearch'

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

const data = wildCardSearch(arr, 'Terran')

// output: [
//  {
// 		name: 'Terrance Moreno',
// 		email: 'terrance_moreno@infotech.io',
// 	},
// ]
`}),a="WildCardSearchDoc",m={title:"wildCardSearch",desc:"جستجوی الگو برای آرایه‌ای از اشیاء."},n=[{mdName:"Example",mdPath:a,title:"مثال",desc:"",component:e.jsx(i,{})}],p=[{component:"پارامترها",api:[{propName:"list",type:"<code>Array&lt;T&gt;</code>",default:"-",desc:"آرایه‌ای از اشیاء"},{propName:"input",type:"<code>string</code>",default:"-",desc:"کلمه کلیدی"}]}],c=e.jsx(o,{hideApiTitle:!0,keyText:"بازگشت",api:[{component:"بازگشت",api:[{propName:"result",type:"<code>Array&lt;T&gt;</code>",default:"-",desc:"آرایه نتیجه"}]}]}),H=()=>e.jsx(r,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:m,demos:n,api:p,mdPrefixPath:"utils",extra:c,keyText:"پارامتر"});export{H as default};
