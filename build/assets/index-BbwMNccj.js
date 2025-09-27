import{j as e}from"./index-EjvHy6Kc.js";import{D as t}from"./DemoComponentApi-DDEpzP-j.js";import{D as o}from"./DemoLayout-BkSr_Pi1.js";import{S as i}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const r=()=>e.jsx(i,{language:"js",children:`import useMenuActive from '@/utils/hooks/useMenuActive'
import navigationConfig from '@/configs/navigation.config'
import { useSelector } from 'react-redux'

const Component = () => {

    const currentRouteKey = useSelector(state => state.base.common.currentRouteKey)

	const { activedRoute, includedRouteTree } = useMenuActive(navigationConfig, routeKey)

	return (...)
}
`}),n="UseMenuActiveDoc",m={title:"useMenuActive",desc:"هوک useMenuActive به دریافت متا ناوبری مرتبط با مسیر فعلی کمک می‌کند."},a=[{mdName:"مثال",mdPath:n,title:"مثال",desc:"",component:e.jsx(r,{})}],p=[{component:"پارامترها",api:[{propName:"navTree",type:"<code>NavConfigMeta[]</code>",default:"-",desc:"درخت پیکربندی ناوبری"},{propName:"key",type:"<code>string</code>",default:"-",desc:"کلید مسیر فعلی"}]}],c=e.jsx(t,{hideApiTitle:!0,keyText:"بازگشت",api:[{component:"بازگشت",api:[{propName:"activedRoute",type:"<code>NavConfigMeta</code>",default:"-",desc:"NavConfigMeta که با کلید مسیر فعلی جفت شده است"},{propName:"includedRouteTree",type:"<code>NavConfigMeta</code>",default:"-",desc:"درخت NavConfigMeta ریشه که شامل کلید مسیر فعلی است"}]}]}),E=()=>e.jsx(o,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:m,demos:a,api:p,mdPrefixPath:"utils",extra:c,keyText:"پارامتر"});export{E as default};
