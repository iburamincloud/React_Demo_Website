import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
    {
        container: {
            backgroundColor: ({ color }) => color.body,
            width: "100%",
            height: "100vh",
        },
        iMacContainer: {
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 40,
            height: "75%",
            "@media (max-width: 1050px)": {
                paddingTop: 60,
            },
        },
        screenContentContainer: {
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            width: "100%",
            height: "85%",
        },
        sinusContainer: {
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
            alignItems: "center",
            display: "flex",
            height: "70%",
            width: "100%",
        },
        hearthRate: {
            justifyContent: "center",
            position: "absolute",
            display: "flex",
            height: "100%",
            width: "100%",
        },
        messageContainer: {
            justifyContent: "center",
            position: "absolute",
            display: "flex",
            height: "100%",
            width: "100%",
            bottom: 15,
        },
        messageContent: {
            color: ({ color }) => color.message,
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            userSelect: "none",
            display: "flex",
            fontSize: 17,
            bottom: 0,
        },
        fadeIn: {
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: ({ color }) => color.screen,
            top: 0,
            right: 0,
            animation: "$heartRateIn 2.5s linear infinite",
        },
        fadeOut: {
            backgroundClor: ({ color }) => color.screen,
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: "-120%",
            animation: "$heartRateOut 2.5s linear infinite",
            background: ({ color }) =>
                `linear-gradient(to right, ${color.rgb1} 0%, ${color.rgb1} 80%, rgba(255, 255, 255, 0) 100%)`,
        },

        "@keyframes heartRateIn": {
            "0%": {
                width: "100%",
            },
            "50%": {
                width: "0",
            },
            "100%": {
                width: "0",
            },
        },

        "@keyframes heartRateOut": {
            "0%": {
                left: "-120%",
            },
            "30%": {
                left: "-120%",
            },
            "100%": {
                left: "0",
            },
        },
    },
    { name: "Welcome" }
);
export default useStyles;
