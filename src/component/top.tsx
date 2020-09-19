import React from "react";
import { images } from "../images";
import {
  Box,
  Container,
  Divider,
  Fade,
  Grid,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { theme } from "../thema";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { ModalContainer } from "./ui/modal_container";
import { ScrambleText } from "./ui/scramble_text";

export const Top = () => {
  const menus = [
    images.menu.story,
    images.menu.character,
    images.menu.download,
  ];

  interface open {
    story: boolean;
    character: boolean;
    download: boolean;
  }

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
    <ContentWrapper>
      <TitleImage src={images.main} />
      <StoryImage
        type="image"
        src={images.menu.story}
        onClick={() => handleOpen("story")}
      />
      <CharacterImage
        type="image"
        src={images.menu.character}
        onClick={() => handleOpen("character")}
      />
      <DownloadImage
        type="image"
        src={images.menu.download}
        onClick={() => handleOpen("download")}
      />

      <ModalContainer
        titleImage={images.menu.story}
        open={open.story}
        handleClose={() => handleClose("story")}
      >
        <div id="transition-modal-description">
          <ScrambleText>
            1970年代、インスマスにゲーム会社ATORIは存在した。当時、ビデオゲーム業界のパイオニアであったATORIは大躍進していた。
          </ScrambleText>
          <ScrambleText>
            しかし、ライバル社の参入の増加につれ、徐々にその栄光は失われていった。
          </ScrambleText>
          <ScrambleText>
            1980年代前半、苦境に立たされたATORIは社運をかけたゲーム「E.D.」を発売。しかし、あまりの内容の酷さに大バッシングの末、倒産してしまう。
          </ScrambleText>
          <ScrambleText>
            そして、大量に余った在庫はインスマスのATORI社跡地に埋め立てられた...
          </ScrambleText>
          <ScrambleText>
            時は経ち、2245年。バーチャル女学院三年生、さかたはるみは志望校ミスカトニック大学に合格するため日夜努力していた。
          </ScrambleText>
          <ScrambleText>
            世界最難関大学であるミスカトニック大学へ合格するには、まずは日本で受験資格を得るための推薦を受けなければならない。
          </ScrambleText>
          <ScrambleText>
            さかたはるみは、伝説のクソゲー「E.D.」についての調査をテーマに論文を執筆するため、廃都インスマスへ向かった。
          </ScrambleText>
        </div>
      </ModalContainer>

      <ModalContainer
        titleImage={images.menu.character}
        open={open.character}
        handleClose={() => handleClose("character")}
      >
        <h2 id="transition-modal-title">Transition modal</h2>
        <p id="transition-modal-description">
          react-transition-group animates me.
        </p>
      </ModalContainer>

      <ModalContainer
        titleImage={images.menu.download}
        open={open.download}
        handleClose={() => handleClose("download")}
      >
        <h2 id="transition-modal-title">Transition modal</h2>
        <p id="transition-modal-description">
          react-transition-group animates me.
        </p>
      </ModalContainer>
    </ContentWrapper>
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
  left: 160px;
  height: 35px;
  :focus {
    outline: 0;
  }
`;
const DownloadImage = styled.input`
  display: inline-block;
  position: absolute;
  bottom: 20px;
  left: 400px;
  height: 35px;
  :focus {
    outline: 0;
  }
`;
