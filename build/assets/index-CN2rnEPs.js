import{j as e}from"./index-EjvHy6Kc.js";import{D as o}from"./DemoComponentApi-DDEpzP-j.js";import{D as t}from"./DemoLayout-BkSr_Pi1.js";import{S as i}from"./SyntaxHighlighter-aihePEGP.js";import"./index-B_mLJ98l.js";import"./index-ybqfoRKo.js";import"./classNames-BpQiAtgD.js";import"./index-CfvZi-kn.js";import"./Affix-BBj8jOkL.js";import"./Card-CoTB-j4j.js";import"./Button-DL955jiQ.js";import"./Tooltip-ChX7lk15.js";import"./index-CefJ0t9v.js";import"./floating-ui.react-EzHlkqFl.js";import"./floating-ui.dom-D0vy-UbR.js";import"./index-GV_1O0dI.js";import"./proxy-BqwOGYm8.js";import"./index-D8VdvZjP.js";import"./index-C6Cwufzs.js";import"./index-Chjiymov.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const r=()=>e.jsx(i,{language:"js",children:`import useInfiniteScroll from '@/utils/hooks/useInfiniteScroll';

const InfiniteScrollComponent = () => {
    const [items, setItems] = useState([...Array(20).keys()]);

    const loadMoreItems = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setItems((prevItems) => [...prevItems, ...Array(20).keys()]);
    };

    const { isLoading, containerRef } = useInfiniteScroll({
        onLoadMore: loadMoreItems,
    });

    return (
        <div ref={containerRef} style={{ height: '300px', overflowY: 'auto' }}>
            {items.map((item, index) => (
                <div key={index} style={{ padding: '10px', border: '1px solid #ddd' }}>
                    Item {index + 1}
                </div>
            ))}
            {isLoading && <p>Loading more items...</p>}
        </div>
    );
};

export default InfiniteScrollComponent;
`}),n="UseInfiniteScrollDoc/",s={title:"useInfiniteScroll",desc:"هوک useInfiniteScroll راهی راحت برای پیاده‌سازی اسکرول بی‌پایان در یک کامپوننت React را فراهم می‌کند."},m=[{mdName:"مثال",mdPath:n,title:"مثال",desc:"",component:e.jsx(r,{})}],p=[{component:"پارامترها",api:[{propName:"offset",type:"<code>string</code>",default:"'0px'",desc:"فاصله از پایین کانتینر که در آن باید عمل بارگذاری بیشتر انجام شود."},{propName:"shouldStop",type:"<code>boolean</code>",default:"false",desc:"پرچمی برای متوقف کردن اسکرول بی‌پایان از انجام اقدامات بارگذاری بیشتر."},{propName:"onLoadMore",type:"<code>() => Promise<void></code>",default:"undefined",desc:"تابعی که باید زمانی که کاربر به پایین کانتینر می‌رسد، فراخوانی شود."}]}],d=e.jsx(o,{hideApiTitle:!0,keyText:"بازگشت",api:[{component:"بازگشت",api:[{propName:"isLoading",type:"<code>boolean</code>",default:"",desc:"نشان می‌دهد که آیا هوک در حال بارگذاری محتوای بیشتر است یا خیر."},{propName:"containerRef",type:"<code>LegacyRef<HTMLElement></code>",default:"",desc:"یک تابع callback ref که باید به کانتینری که نیاز به اسکرول بی‌پایان دارد، اختصاص یابد."}]}]}),b=()=>e.jsx(t,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:s,demos:m,mdPrefixPath:"docs/SharedComponentsDoc/components",extra:d,api:p,keyText:"پارامتر"});export{b as default};
