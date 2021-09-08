import React from "react";
import { Dialog, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CustomCard from '../CustomCard/CustomCard';
import { useConfig } from "../../contexts/configContext";

const useStyles = makeStyles(() => ({
    root: {
        padding: 20,
        overflow: "auto",
    },
    closeIcon: {
        position: "absolute",
        boxSizing: 'content-box',
        right: 0,
        top: 0,
        transform: "translate(17px,-17px)",
        background: '#4f8dff',
        color: 'white',
        padding: 10,
        borderRadius: 10,
        boxShadow: "3px -3px 10px rgba(0,0,0,0.3)",
    },
    darkCloseIcon: {
        position: "absolute",
        right: 0,
        top: 0,
        transform: "translate(17px,-17px)",
        background: "rgb(9,9,21)",
        color: "magenta",
        cursor: "pointer",
        padding: 5,
        borderRadius: 10,
        height: 40,
        width: 40,
        zIndex: 9,
        border: "1px solid #bb00f2",
        boxShadow: "3px -3px 10px rgba(0,0,0,0.3)",
    }
}));

const ModalManager = ({ open, close, ...props }) => {
    const classes = useStyles();
    const { config } = useConfig();

    return (
        <Dialog
            open={open}
            onClose={close}
            maxWidth={"xl"}
            BackdropProps={{
                style: {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
            }}
            // disableBackdropClick
            PaperProps={{
                style: {
                    overflow: "visible",
                    borderRadius: 15,
                },
            }}
        >
            <CloseIcon
                className={config.darkMode ? classes.darkCloseIcon : classes.closeIcon}
                fontSize="small"
                onClick={close}
            />
            {
                config.darkMode ?
                    <CustomCard style={{ overflow: "auto" }}>{props.children}</CustomCard>
                    : <div className={classes.root}>{props.children}</div>
            }
        </Dialog>
    );
};

export default ModalManager;