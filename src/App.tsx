import React from "react";
import { images } from "./images";
import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Header } from "./component/header";
import { theme } from "./thema";
import { Top } from "./component/top";


export interface open {
  story: boolean;
  character: boolean;
  download: boolean;
}

function App() {
  const [open, setOpen] = React.useState({
    story: false,
    character: false,
    download: false,
  });
  const handleOpen = (key: keyof open) => {
    open[key] = true;
    setOpen({ ...open });
  };

  const handleClose = (key: keyof open) => {
    open[key] = false;
    setOpen({ ...open });
  };

  return (
    <Container disableGutters={true}>
      <ContentWrapper>
        <Header open={open} handleOpen={handleOpen}></Header>
        <Top open={open} handleOpen={handleOpen} handleClose={handleClose} />
        <Divider />
        <Box color="text.primary" m={4}>
          <Grid container>
            <Grid item xs={5}>
              <HeadingImageSmall src={images.menu.information} />
              <p>2020/09/13 webサイトを公開しました</p>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
              <HeadingImageSmall src={images.menu.spec} />
              <div style={{ marginLeft: "5px" }}>
                <p>ジャンル: 宇宙的恐怖弾幕STG</p>
                <p>対応OS: Windows10</p>
                <p>リリース日: 未定</p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </ContentWrapper>
    </Container>
  );
}

const HeadingImageSmall = styled.img`
  height: 10%;
`;
const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${theme.palette.primary.main};
`;
export default App;
