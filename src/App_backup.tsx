import React from "react";
import { images } from "./images";
import "./App.css";
import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Header } from "./component/header";
import { theme } from "./thema";

function App() {
  return (
    <Container disableGutters={true}>
      <Header></Header>
      <ContentWrapper>
        <TitleImage src={images.main} />
        <Divider />
        <Box color="text.primary" m={4}>
          <Grid item md={12} container>
            <Grid xs={5}>
              <HeadingImageSmall src={images.menu.information} />
              <p>2020/09/13 webサイトを公開しました</p>
            </Grid>
            <Grid xs={2}></Grid>
            <Grid xs={5}>
              <HeadingImageSmall src={images.menu.spec} />
              <p>ジャンル: 宇宙的恐怖弾幕STG</p>
              <p>対応OS: Windows10</p>
              <p></p>
            </Grid>
          </Grid>
          <Divider />
          {/* <Typography variant="h2" gutterBottom>
            STORY
          </Typography> */}
          <HeadingImage src={images.menu.story} />
          <p>
            1970年代、インスマスにゲーム会社ATORIは存在した。当時、ビデオゲーム業界のパイオニアであったATORIは大躍進していた。
          </p>
          <p>
            しかし、ライバル社の参入の増加につれ、徐々にその栄光は失われていった。
          </p>
          <p>
            1980年代前半、苦境に立たされたATORIは社運をかけたゲーム「E.D.」を発売。しかし、あまりの内容の酷さに大バッシングの末、倒産してしまう。
          </p>
          <p>
            そして、大量に余った在庫はインスマスのATORI社跡地に埋め立てられた...
          </p>
          <p>
            時は経ち、2245年。バーチャル女学院三年生、さかたはるみは志望校ミスカトニック大学に合格するため日夜努力していた。
          </p>
          <p>
            世界最難関大学であるミスカトニック大学へ合格するには、まずは日本で受験資格を得るための推薦を受けなければならない。
          </p>
          <p>
            さかたはるみは、伝説のクソゲー「E.D.」についての調査をテーマに論文を執筆するため、廃都インスマスへ向かった。
          </p>
        </Box>
        <Divider />
        <Box color="text.primary" m={4}>
          <HeadingImage src={images.menu.character} />
          <Grid item md={12} container>
            <Grid md={4}>
              <CharacterImage src={images.character.sakata} />
            </Grid>
            <Grid md={4}>
              <b>さかたはるみ</b>
              <p>17歳女子高生。バーチャル女学院の3年生。</p>
              <p>
                ミスカトニック大学への合格を目指し、勉強漬けの日々を送っている。
              </p>
              <p>趣味はレトロゲームと配信。</p>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box color="text.primary" m={4}>
          <HeadingImage src={images.menu.download} />
          <p>comming soon...</p>
        </Box>
      </ContentWrapper>
    </Container>
  );
}

const TitleImage = styled.img`
  width: 100%;
`;
const CharacterImage = styled.img`
  width: 100%;
`;
const HeadingImage = styled.img`
  height: 60px;
`;
const HeadingImageSmall = styled.img`
  height: 10%;
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 10000px;
  background-color: ${theme.palette.primary.main};
`;
export default App;
