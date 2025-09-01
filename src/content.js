// src/content.js
import leftImg from '/left.webp';
import rightTopImg from '/right-top.webp';
import rightBottomImg from '/right-bottom.webp';
import redImg from '/tight-top.webp';
import greenImg from '/tight-top-green.webp';
import whiteImg from '/tight-top-white.webp';

export const content = {
	feature: {
		title: "What does cooking mean?",
		text: `Is it simply applying heat to a food product? A way of making certain food safe to eat? 
           Or a way to create flavour and make food more appealing? This is part of what Hervé This, 
           the father of molecular gastronomy, has dedicated his life to exploring. We spoke to him 
           about what his experiments reveal—and the secret to the perfect egg.`,
		eyebrow: "The perfect egg",
		kicker: "Keep water between 67-68 °C for a flavourful, tender yolk.",
		images: {
			left: leftImg,
			rightTop: rightTopImg,
			rightBottom: rightBottomImg,
		},
	},
	taste: [
		{
			color: "RED",
			description: "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",
			image: redImg,
			link: "#red"
		},
		{
			color: "GREEN",
			description: "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.",
			image: greenImg,
			link: "#green"
		},
		{
			color: "WHITE",
			description: "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.",
			image: whiteImg,
			link: "#white"
		}
	]
};