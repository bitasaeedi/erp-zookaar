import{j as e}from"./index-EjvHy6Kc.js";import{D as t}from"./DemoComponentApi-DDEpzP-j.js";import{D as o}from"./DemoLayout-BkSr_Pi1.js";import{S as r}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const i=()=>e.jsx(r,{language:"js",children:`import reorderDragable from '@/utils/reorderDragable';

const quoteMap = {
    list1: ['item1', 'item2', 'item3'],
    list2: ['item4', 'item5'],
};

const source = { droppableId: 'list1', index: 1 };  // Moving item2
const destination = { droppableId: 'list2', index: 1 };  // To position 1 in list2

const result = reorderDragable({ quoteMap, source, destination });

// output:
// {
//   quoteMap: {
//     list1: ['item1', 'item3'],
//     list2: ['item4', 'item2', 'item5'],
//   }
// }
`}),p="ReorderDragableDoc",a={title:"reorderDragable",desc:"<p><code>reorderDragable</code> تابعی است که برای جابجایی اقلام درون یا بین نواحی قابل رها کردن در یک رابط کشیدن و رها کردن استفاده می‌شود و از ساختار <code>DraggableLocation</code> استفاده می‌کند.</p>"},d=[{mdName:"Example",mdPath:p,title:"مثال",desc:"",component:e.jsx(i,{})}],m=[{component:"پارامترها",api:[{propName:"quoteMap",type:"<code>T extends Record&lt;string, unknown[]&gt;</code>",default:"-",desc:"یک شیء که کلیدها نواحی قابل رها کردن مختلف (لیست‌ها) را نشان می‌دهند و مقادیر آرایه‌هایی از اقلام در هر یک هستند."},{propName:"source",type:"<code>{droppableId: string; index: number;}</code>",default:"-",desc:"مکان شروع اقلام کشیده شده. این شامل droppableId و ایندکس عنصر است."},{propName:"destination",type:"<code>{droppableId: string; index: number;}</code>",default:"-",desc:"مکان هدفی که عنصر در آن رها می‌شود، شامل droppableId و ایندکس."}]}],s=e.jsx(t,{hideApiTitle:!0,keyText:"بازگشت",api:[{component:"بازگشت",api:[{propName:"quoteMap",type:"<code>T</code>",desc:"یک شیء جدید با لیست‌های به‌روز شده که اقلام دوباره مرتب شده را چه در همان لیست و چه بین لیست‌های مختلف نشان می‌دهد.",default:"-"}]}]}),F=()=>e.jsx(o,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:a,demos:d,api:m,mdPrefixPath:"utils",extra:s,keyText:"پارامتر"});export{F as default};
