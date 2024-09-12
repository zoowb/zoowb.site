import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
});

export const phone = style({
  position: "relative",
  width: "360px",
  height: "735px",
  margin: "0 auto",
  padding: "14px 17px 15px",
  ":before": {
    content: "",
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "url('/mockup.png') 50% / 100% no-repeat",
    zIndex: 1,
  },

  ":after": {
    content: "",
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100% - 20px)",
    height: "calc(100% - 16px)",
    backgroundColor: "#000",
    borderRadius: "48px",
    zIndex: 0,
  },
});

export const inside = style({
  position: "relative",
  zIndex: 2,
  padding: "16px 18px",
  width: "100%",
  height: "100%",
  borderRadius: "41px",
  overflow: "hidden",
});
