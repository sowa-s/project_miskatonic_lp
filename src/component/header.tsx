import * as React from "react";
import { AppBar, Hidden, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import styled from "styled-components";
import { images } from "../images";
import { withStyles } from '@material-ui/core/styles';
import { open } from "../App";

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
    paper: {
      backgroundColor: theme.palette.primary.main,
    }
  })
);

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

type Props = {
  open: open,
  handleOpen: (open: keyof open) => void;
}

export const Header = (props: Props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <LogoImage src={images.title} />
          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        color="primary"
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: classes.paper }}
      >
        <StyledMenuItem onClick={() => {
          handleClose()
          props.handleOpen("story")
        }}>STORY</StyledMenuItem>
        <StyledMenuItem onClick={() => {
          handleClose()
          props.handleOpen("character")
        }}>CHARACTER</StyledMenuItem>
        <StyledMenuItem onClick={() => {
          handleClose()
          props.handleOpen("download")
        }}>DOWNLOAD</StyledMenuItem>
      </Menu>
    </div>
  );
};

const LogoImage = styled.img`
  margin: 0, auto;
  width: 240px;
`;