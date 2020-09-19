import * as React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import styled from "styled-components";
import { images } from "../images";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      position: "absolute",
      flexGrow: 1,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
    menuButton: {
      marginLeft: "auto",
    },
    title: {
      flexGrow: 1,
    },
  })
);

export const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <LogoImage src={images.title} />
          <IconButton
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const LogoImage = styled.img`
  margin: 0, auto;
  width: 240px;
`;
