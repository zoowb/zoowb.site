import { vars } from "@/styles/variables.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "center",
  color: vars.color.black,
  paddingTop: "60px",
});

globalStyle(`body:has(${container})`, {
  backgroundColor: vars.color.gray500,
});

globalStyle(`header:has(~${container})`, {
  color: vars.color.black,
});

export const title = style({
  position: "relative",
  color: "transparent",
  fontSize: "5rem",
  fontWeight: "800",
  WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)",
});

export const name = style({
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  margin: "auto",
  color: vars.color.black,
  fontSize: "4rem",
});

export const birth = style({});

export const bottom = style({
  marginTop: "10%",
  overflowY: "auto",
});

export const desc = style({
  fontWeight: "400",
  whiteSpace: "break-spaces",
  lineHeight: "2",
});

export const educar = style({
  display: "flex",
  justifyContent: "space-around",
});

export const listTitle = style({
  fontSize: vars.fontSize.t4,
  fontWeight: "500",
  textAlign: "left",

  marginTop: "10%",
});

export const list = style({
  display: "flex",
  gap: "1rem",
  lineHeight: "2",
  fontSize: vars.fontSize.small,
  fontWeight: "300",

  marginTop: "20px",
});

export const wordBreak = style({
  whiteSpace: "break-spaces",
  textAlign: "left",
});

export const next = style({
  display: "block",
  border: "1px solid white",
  borderWidth: "1px 0",
  textAlign: "left",
  padding: "2rem 3rem",
  margin: "10% 0 3rem 0",
  color: "white",

  fontSize: vars.fontSize.large,
  fontWeight: 400,

  ":hover": {
    background: "rgba(255, 255, 255, 0.5)",
    color: vars.color.blue500,
  },
});

export const nextTitle = style({
  textAlign: "right",
  fontSize: vars.fontSize.xlarge,
  fontWeight: 700,
  // padding: "1rem 3rem",

  // border: "2px solid white",
  // borderWidth: "0 0 2px 0",
});
