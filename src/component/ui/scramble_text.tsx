import React, { FC, useState } from "react";
import styled from "styled-components";
import { theme } from "../../thema";
import Scramble from "react-scramble";

/*
textをarrayで受け取って、文字数カウントして時間差でいい感じに表示させる
*/
type Props = {
  texts: string[]
}

export const ScrambleText: FC<Props> = (props: Props) => {
  const [showedLine, setShowedLine] = useState(0)
  var timerIds: number[] = []

  const skip = () => {
    setShowedLine(props.texts.length)
    timerIds.forEach(clearTimeout)
  }
  const show = () => {
    var elements: JSX.Element[] = []
    for (let i = 0; i < props.texts.length; i++) {
      if (i < showedLine) {
        elements.push(<p key={props.texts[i]}>{props.texts[i]}</p>)
        continue;
      }
      elements.push(
        <p key={props.texts[i]}>
          <Scramble
            autoStart
            speed="fast"
            text={props.texts[i]}
            steps={[
              {
                roll: 10,
                action: "+",
                type: "all",
              },
              {
                action: "-",
                type: "forward",
              },
            ]}
          />
        </p>
      )
      timerIds.push(
        window.setTimeout(() => {
          setShowedLine(i + 1);
        }, props.texts[i].length * 35)
      )
      break;
    }
    return elements;
  }
  return (
    <div onClick={skip} style={{ height: "100%" }}>
      { show()}
    </div>
  );
};
