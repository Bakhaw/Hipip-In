import { colors } from "../../colors";

const { BlueGreen, DarkGrey, LightGrey } = colors;

export const MuiFab = {
  root: {
    alignItems: "center",
    backgroundColor: LightGrey,
    borderRadius: 50,
    color: DarkGrey,
    display: "flex",
    fontFamily: "inherit",
    fontSize: 22,
    height: 65,
    padding: "0 20px",
    width: "100%",
    "&:hover": {
      backgroundColor: BlueGreen
    }
  }
};
