import '../404.js';
import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro.js';
import { $ as $$Layout } from './404.astro.js';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';

const API_KEY = 'e59898ef-1fb07616-a2649be3-156fc871';
const API_LANG = {
	lang: 'es'
};
const API_URL = 'https://fortniteapi.io/v2/shop?'.concat(new URLSearchParams(API_LANG).toString());

const shopApi = async () => {
	try {
		const response = await globalThis.fetch(API_URL, {
			headers: {
				Authorization: API_KEY
			}
		});
		const data = await response.json();
		return data
	} catch ({ message }) {
		return { error: message }
	}
};

const {
  shop
} = await shopApi();
const Shop = () => {
  return /* @__PURE__ */ jsx(Fragment, {
    children: shop.map(({
      mainId,
      displayAssets: [{
        full_background
      }],
      displayName,
      price: {
        regularPrice,
        finalPrice
      }
    }) => /* @__PURE__ */ jsxs("div", {
      className: "overflow-hidden rounded-lg bg-white",
      children: [/* @__PURE__ */ jsx("img", {
        alt: displayName,
        loading: "lazy",
        src: full_background
      }), /* @__PURE__ */ jsxs("div", {
        className: "p-2 divide-y-[1px] divide-gray-500/60 flex flex-col",
        children: [/* @__PURE__ */ jsx("span", {
          className: "font-bold",
          children: displayName
        }), regularPrice === finalPrice ? /* @__PURE__ */ jsxs("span", {
          className: "text-[1.8rem]",
          children: [finalPrice, " $"]
        }) : /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsxs("span", {
            className: "text-[1.4rem] line-through text-red-500",
            children: [regularPrice, " $"]
          }), /* @__PURE__ */ jsxs("span", {
            className: "text-[1.8rem]",
            children: [finalPrice, " $"]
          })]
        })]
      })]
    }, mainId))
  });
};
__astro_tag_component__(Shop, "@astrojs/react");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "@itskreisler" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main class="mx-auto grid sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-10 gap-2 text-black">
		${renderComponent($$result2, "Shop", Shop, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/xampp/htdocs/threads-bot/fn-shop/src/components/Shop", "client:component-export": "default" })}
		<!-- Crear una card 1:1 -->
	</main>
` })}`;
}, "D:/xampp/htdocs/threads-bot/fn-shop/src/pages/index.astro");

const $$file = "D:/xampp/htdocs/threads-bot/fn-shop/src/pages/index.astro";
const $$url = "/threads-bot-fn-shop";

export { $$Index as default, $$file as file, $$url as url };
