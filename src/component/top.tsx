import React from "react";
import { images } from "../images";
import {
  Grid,
} from "@material-ui/core";
import styled from "styled-components";
import { ModalContainer } from "./ui/modal_container";
import { ScrambleText } from "./ui/scramble_text";
import Scramble from "react-scramble";
import Hidden from '@material-ui/core/Hidden';
import { open } from "../App";

type Props = {
  open: open,
  handleOpen: (open: keyof open) => void;
  handleClose: (open: keyof open) => void;
}

export const Top = (props: Props) => {

  return (
    <ContentWrapper>
      <TitleImage src={images.main} />
      <Hidden xsDown>
        <StoryImage
          type="image"
          src={images.menu.story}
          onClick={() => props.handleOpen("story")}
        />
        <CharacterImage
          type="image"
          src={images.menu.character}
          onClick={() => props.handleOpen("character")}
        />
        <DownloadImage
          type="image"
          src={images.menu.download}
          onClick={() => props.handleOpen("download")}
        />
      </Hidden>

      <ModalContainer
        titleImage={images.menu.story}
        open={props.open.story}
        handleClose={() => props.handleClose("story")}
      >
        <div id="transition-modal-description" style={{ height: "100%" }}>
          <ScrambleText texts={
            [
              "1970年代、インスマスにゲーム会社ATORIは存在した。当時、ビデオゲーム業界のパイオニアであったATORIは大躍進していた。",
              "1980年代前半、苦境に立たされたATORIは社運をかけたゲーム「E.D.」を発売。しかし、あまりの内容の酷さに大バッシングの末、倒産してしまう。",
              "そして、大量に余った在庫はインスマスのATORI社跡地に埋め立てられた...",
              "時は経ち、2245年。バーチャル女学院三年生、さかたはるみは志望校ミスカトニック大学に合格するため日夜努力していた。",
              "世界最難関大学であるミスカトニック大学へ合格するには、まずは日本で受験資格を得るための推薦を受けなければならない。",
              "さかたはるみは、伝説のクソゲー「E.D.」についての調査をテーマに論文を執筆するため、廃都インスマスへ向かった。"
            ]
          } />
        </div>
      </ModalContainer>

      <ModalContainer
        titleImage={images.menu.character}
        open={props.open.character}
        handleClose={() => props.handleClose("character")}
      >
        <Grid container>
          <Grid item md={6}>
            <img src={images.character.sakata} style={{ marginLeft: "-20px", width: "110%" }} />
          </Grid>
          <Grid item md={6}>
            <h2 id="transition-modal-title">
              <Scramble
                autoStart
                speed="slow"
                text={"さかたはるみ"}
                steps={[
                  {
                    roll: 20,
                    action: "+",
                    type: "all",
                  },
                  {
                    action: "-",
                    type: "all",
                  },
                ]}
              />
            </h2>
            <div id="transition-modal-description" style={{ height: "100%" }}>
              <ScrambleText texts={
                [
                  "バーチャル女学院3年生。",
                  "ミスカトニック大学を目指して日々勉強中！",
                  "レトロゲームが好き！推薦論文のテーマもレトロゲーム「E.D.」について。",
                  "バーチャルユーチューバーもやってる"
                ]
              } />
            </div>
          </Grid>
        </Grid>
      </ModalContainer>

      <ModalContainer
        titleImage={images.menu.download}
        open={props.open.download}
        handleClose={() => props.handleClose("download")}
      >
        <h2 id="transition-modal-title">comming soon..</h2>
      </ModalContainer>
    </ContentWrapper >
  );
};

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const TitleImage = styled.img`
  width: 100%;
  object-fit: none;
  object-position: 65% 100%;
  height: min(100vh, 785px);
`;
const StoryImage = styled.input`
  display: inline-block;
  position: absolute;
  bottom: 20px;
  left: 20px;
  height: 35px;
  :focus {
    outline: 0;
  }
`;
const CharacterImage = styled.input`
  display: inline-block;
  position: absolute;
  bottom: 20px;
  left: 150px;
  height: 35px;
  :focus {
    outline: 0;
  }
`;
const DownloadImage = styled.input`
  display: inline-block;
  position: absolute;
  bottom: 20px;
  left: 390px;
  height: 35px;
  :focus {
    outline: 0;
  }
`;
