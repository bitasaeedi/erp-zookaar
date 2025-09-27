import{j as t}from"./index-EjvHy6Kc.js";import{S as e}from"./SyntaxHighlighter-aihePEGP.js";import"./toConsumableArray-0PR8dQxs.js";import"./extends-CF3RwP-h.js";const c=()=>t.jsxs(t.Fragment,{children:[t.jsxs("p",{children:["برای راه‌اندازی جهت اپلیکیشن، کافیست فیلد"," ",t.jsx("code",{children:"direction"})," را به"," ",t.jsx("code",{children:"'ltr'"})," یا ",t.jsx("code",{children:"'rtl'"})," در"," ",t.jsx("code",{children:"src/configs/theme.config.ts"})," تنظیم کنید. به‌عنوان مثال:"]}),t.jsx(e,{language:"ts",children:`export const themeConfig = {
	...
	direction: 'rtl'
}`}),t.jsxs("div",{className:"mt-10",id:"hook",children:[t.jsx("h5",{children:"هوک"}),t.jsx("p",{className:"mt-1",children:"شما می‌توانید از طریق هوک آماده‌ی ما به جهت دسترسی پیدا کرده یا آن را به‌روزرسانی کنید."}),t.jsx(e,{language:"tsx",children:`import React from 'react'
import Button from '@/components/ui/Button'
import InputGroup from '@/components/ui/InputGroup'
import useDirection from '@/utils/hooks/useDirection'
import type { Direction } from '@/@types/theme';

const dirList = [
	{ value: 'ltr', label: 'LTR' },
	{ value: 'rtl', label: 'RTL' }
]

const DirectionSwitcher = () => {

	const [direction, setDirection] = useDirection()

	const onDirChange = (val: Direction) => {
		setDirection(val)
	}

	return (
		<InputGroup size="sm">
			{
				dirList.map(dir => (
					<Button 
						key={dir.value}
						active={direction === dir.value}
						onClick={() => onDirChange(dir.value)}
					>
						{dir.label}
					</Button>
				))
			}
		</InputGroup>
	)
}

export default DirectionSwitcher
`})]})]});export{c as default};
