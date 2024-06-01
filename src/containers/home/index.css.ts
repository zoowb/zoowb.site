import { vars } from "@/styles/variables.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const main = style({});

export const row = style({
  width: "100%",
  border: `1px solid ${vars.color.black}`,
  borderWidth: "0 0 1px 0",
  padding: "30px",

  color: vars.color.black,
  fontSize: vars.fontSize.xlarge,
  fontWeight: "700",
  textAlign: "right",

  ":hover": {
    backgroundColor: vars.color.black,
    color: vars.color.white,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "transform 0.1s ease-in-out",
  },
});

export const icon = style({
  display: "none",
});

globalStyle("p", {
  margin: 0,
  padding: 0,
});

globalStyle(`${main}>div:first-child`, {
  borderWidth: "1px 0 1px 0",
  textAlign: "left",
});

globalStyle(`${row}:hover>${icon}`, {
  display: "block",
});

globalStyle(`${row} > span:first-child`, {
  display: "inline",
});

globalStyle(`${row} > span:nth-last-of-type(1) `, {
  display: "none",
});

globalStyle(`${row}:hover > span:first-child`, {
  display: "none",
});

globalStyle(`${row}:hover > span:nth-last-of-type(1)`, {
  display: "inline",
});
