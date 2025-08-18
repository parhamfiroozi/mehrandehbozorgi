export type MenuItem = { name: string; price: number | null };
export type MenuCategory = { title: string; items: MenuItem[] };

export const restaurantMenu: MenuCategory[] = [
	{
		title: "غذاها",
		items: [
			{ name: "خوراک کنجه تک سیخ", price: 24 },
			{ name: "خوراک کنجه دو سیخ", price: 49 },
			{ name: "جوجه‌کباب مخصوص", price: 44 },
			{ name: "خوراک جوجه مخصوص", price: 48 },
			{ name: "جوجه‌کباب سه سیخ", price: null },
			{ name: "خوراک جوجه سه سیخ", price: null },
			{ name: "ترکی کنجه ۲ سیخ", price: 56 },
			{ name: "ترکی کنجه ۳ سیخ", price: 81 },
			{ name: "خوراک کباب + یک سیخ کنجه", price: null },
			{ name: "خوراک کنجه + یک سیخ جوجه", price: null },
		],
	},
	{
		title: "ویژه‌ها",
		items: [
			{ name: "چلو سلطانی", price: null },
			{ name: "خوراک سلطانی", price: null },
			{ name: "چلو برگ", price: null },
			{ name: "خوراک برگ", price: null },
		],
	},
	{
		title: "خورشتی",
		items: [
			{ name: "چلو خورشت سبزی", price: null },
			{ name: "چلو خورشت قیمه", price: null },
			{ name: "چلو خورشت بادمجان", price: null },
			{ name: "چلو خورشت قیمه بادمجان", price: null },
		],
	},
	{
		title: "جوجه و درباری",
		items: [
			{ name: "چلو جوجه", price: null },
			{ name: "خوراک جوجه", price: null },
			{ name: "ترکی جوجه", price: null },
			{ name: "چلو درباری", price: null },
			{ name: "ترکی درباری", price: null },
			{ name: "خوراک درباری", price: null },
		],
	},
	{
		title: "گردن",
		items: [
			{ name: "چلو گردن", price: null },
			{ name: "ترکی گردن", price: null },
			{ name: "خوراک گردن", price: null },
		],
	},
	{
		title: "دسر و متفرقه",
		items: [
			{ name: "دسر", price: null },
			{ name: "خورشت خالی", price: 100 },
			{ name: "برنج خالی", price: null },
			{ name: "ترکی خالی", price: null },
		],
	},
]; 