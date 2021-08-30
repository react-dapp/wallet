import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        background:
            "linear-gradient(245.22deg,#c200fb 7.97%,#3772ff 49.17%,#3773fe 0,#5ac4be 92.1%)",
        borderRadius: 5,
        padding: 1,
    },
    body: {
        backgroundColor: "#131a35",
        padding: 30,
        borderRadius: 5,
        opacity: 0.9,
        [theme.breakpoints.down("sm")]: {
            padding: 20,
        },
        [theme.breakpoints.down("xs")]: {
            padding: 16,
        },
    },
}));

const CustomCard = ({ children, ...restProps }) => {
    const classes = useStyles();

    return (
        <div className={classes.root} {...restProps}>
            <div className={classes.body}>{children}</div>
        </div>
    );
};

export default CustomCard;
