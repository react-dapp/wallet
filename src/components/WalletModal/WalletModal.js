import React, { useEffect } from "react";
import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import wallets from "../../constants/walletsConfig";
import useWallet from "../../hooks/useWallet";
import { connectorNames } from "../../hooks/useConnectors";
import { useWalletModal } from "../../hooks/useWalletModal";
import { useConfig } from "../../contexts/configContext";
import { useWeb3React } from "@web3-react/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "rgba(0,0,0,0.8)",
  },
  grid: {
    marginTop: 10,
    maxWidth: 300,
  },
  walletBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 20px",
    background: "rgb(239, 244, 245)",
    borderRadius: 15,
    cursor: "pointer",
    "&:hover": {
      background: "rgba(239, 244, 245,0.5)",
    },
  },
  title: {
    color: "#34DFF7",
    fontWeight: 700,
    fontSize: 16,
  },
  learnText: {
    color: "#34DFF7",
    marginTop: 20,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
  },
  darkWalletBtn: {
    justifyContent: "space-between",
    padding: "8px 20px",
    background: "rgba(0,0,0,0.4)",
    borderRadius: 15,
    cursor: "pointer",
    alignItems: "center",
    "&:hover": {
      background: "rgba(0,0,0,0.6)",
    },
  },
  darkTitle: {
    color: "white",
    fontSize: 16,
  },
  heading: {
    fontSize: 23,
    fontWeight: 800,
    fontFamily: "sans-serif",
    marginBottom: 20,
  },
}));

export const WalletModal = () => {
  const classes = useStyles();
  const { config } = useConfig();
  const login = useWallet();
  const { setOpen } = useWalletModal();
  const { library } = useWeb3React();

  useEffect(() => {
    if (library) {
      setOpen(false);
    }
  }, [library]);

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.heading}>
        Connect Wallet
      </Typography>
      <Divider />
      <Grid container spacing={1} className={classes.grid}>
        {wallets
          .filter((i) => config.bsc || i.connector !== connectorNames.bsc)
          .map((item, index) => (
            <Grid item xs={12} key={index}>
              <div
                className={`${
                  config.darkMode ? classes.darkWalletBtn : classes.walletBtn
                }`}
                onClick={() => login(item.connector)}
              >
                <Typography
                  className={
                    config.darkMode ? classes.darkTitle : classes.title
                  }
                >
                  {item.title}
                </Typography>
                <img alt="" src={item.image} />
              </div>
            </Grid>
          ))}
      </Grid>
      <Typography className={`flex ${classes.learnText}`}>
        <HelpOutlineOutlinedIcon />
        &nbsp;Learn how to connect
      </Typography>
    </div>
  );
};
