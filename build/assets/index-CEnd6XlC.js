import{j as t}from"./index-EjvHy6Kc.js";import{D as e}from"./DemoComponentApi-DDEpzP-j.js";import{D as o}from"./DemoLayout-BkSr_Pi1.js";import{S as r}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const i=()=>t.jsx(r,{language:"js",children:`import useDirection from '@/utils/hooks/useDirection'

const Component = () => {

	const [direction, updateDirection] = useDirection()

	const handleDirChange = () => {
		updateDirection('rtl')
	}

	return (...)
}
`}),m="UseDirectionDoc/",p={title:"useDirection",desc:"این هوک به مدیریت وضعیت جهت برنامه کمک می‌کند."},n=[{mdName:"مثال",mdPath:m,title:"مثال",desc:"",component:t.jsx(i,{})}],c=t.jsx(e,{hideApiTitle:!0,keyText:"بازگشت",api:[{api:[{propName:"direction",type:"<code>'ltr'</code> | <code>'rtl'</code>",default:"-",desc:"وضعیت فعلی جهت"},{propName:"updateDirection",type:"<code>(direction: 'ltr' | 'rtl') => void</code>",default:"-",desc:"تنظیم‌کننده جهت"}]}]}),U=()=>t.jsx(o,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:p,demos:n,mdPrefixPath:"docs/SharedComponentsDoc/components",extra:c,keyText:"پارامتر"});export{U as default};
