import React from "react";
import styled from "styled-components";

const Container = styled.div`
	background-color: ${props =>
		props.backgroundColor ? props.backgroundColor : "black"};
	transition: background-color 0.5s;
	border: ${props => (props.borderSize ? props.borderSize : "3")}px solid white;
	${props => !props.portrait && `width: 100%;`}
	font-family: "ZCOOL QingKe HuangYou", cursive;
	padding: ${props => (props.padding ? props.padding : "15")}px
		${props => (props.portrait ? props.padding / 2 : 0)}px; /*15*/
	margin-bottom: 2px;
`;

const Value = styled.div`
	width: 100%;
	text-align: center;
	color: white;
	
	font-size: 3em;
	text-shadow: 2px 2px 0 var(--clr-accent-400), 4px 4px 0 var(--clr-secondary-400), 6px 6px 0 var(--clr-primary-400);

	--font-family: system-ui;
  
	--fs-300: clamp(0.94rem, calc(0.92rem + 0.08vw), 0.98rem);
	--fs-400: clamp(1.13rem, calc(1.06rem + 0.33vw), 1.31rem);
	--fs-500: clamp(1.35rem, calc(1.21rem + 0.69vw), 1.75rem);
	--fs-600: clamp(1.62rem, calc(1.37rem + 1.24vw), 2.33rem);
	--fs-700: clamp(1.94rem, calc(1.54rem + 2.03vw), 3.11rem);
	--fs-800: clamp(2.33rem, calc(1.7rem + 3.15vw), 4.14rem);
	--fs-900: clamp(2.8rem, calc(1.85rem + 4.74vw), 5.52rem);
  
	--clr-primary-300: hsl(219, 76%, 55%);
	--clr-primary-400: hsl(219, 76%, 40%);
	--clr-primary-500: hsl(219, 76%, 25%);
	--clr-secondary-300: hsl(269, 75%, 55%);
	--clr-secondary-400: hsl(269, 75%, 40%);
	--clr-secondary-500: hsl(269, 75%, 25%);
	--clr-accent-300: hsl(358, 72%, 65%);
	--clr-accent-400: hsl(358, 72%, 50%);
	--clr-accent-500: hsl(358, 72%, 35%);
`;

const MoneymakerRow = ({
	value,
	padding,
	margin,
	borderSize,
	portrait,
	backgroundColor
}) => (
	<Container
		portrait={portrait}
		padding={padding}
		margin={margin}
		borderSize={borderSize}
		backgroundColor={backgroundColor}
	>
		<Value>{value}</Value>
	</Container>
);

export default MoneymakerRow;
