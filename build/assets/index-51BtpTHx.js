import{j as o}from"./index-EjvHy6Kc.js";import{D as e}from"./DemoComponentApi-DDEpzP-j.js";import{D as t}from"./DemoLayout-BkSr_Pi1.js";import{S as r}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const i=()=>o.jsx(r,{language:"js",children:`import useDarkMode from '@/utils/hooks/useDarkMode'

const Component = () => {

	const [isDark, setIsDark] = useDarkMode()

	const handleSetDarkMode = (bool) => {
		setIsDark(bool ? 'dark' : 'light')
	}
	return (...)
}
`}),m="UseDarkModeDoc",s={title:"useDarkMode",desc:"این هوک به مدیریت حالت تاریک یا روشن در برنامه کمک می‌کند."},a=[{mdName:"مثال",mdPath:m,title:"مثال",desc:"",component:o.jsx(i,{})}],p=o.jsx(e,{hideApiTitle:!0,keyText:"بازگشت",api:[{api:[{propName:"isDark",type:"<code>boolean</code>",default:"-",desc:"آیا حالت فعلی حالت تاریک است"},{propName:"setIsDark",type:"<code>(mode: 'dark' | 'light') => void</code>",default:"-",desc:"تنظیم‌کننده حالت"}]}]}),E=()=>o.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:s,demos:a,mdPrefixPath:"utils",extra:p,keyText:"پارامتر"});export{E as default};
