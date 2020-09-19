import React, { FC } from "react";
import styled from "styled-components";
import { theme } from "../../thema";
import Scramble from "react-scramble";

/*
textをarrayで受け取って、文字数カウントして時間差でいい感じに表示させる
*/
export const ScrambleText: FC = ({ children }) => {
  return (
    <p>
      <Scramble
        autoStart
        text={children}
        bindMethod={(c: any) => {
          console.log(c);
        }}
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
  );
};
// class App extends React.Compoent {
//   render() {
//     return (
//       <Scramble
//         autoStar
//         text="Scramble me!"
//         steps={[
//           {
//             roll: 10,
//             action: '+',
//             type: 'all',
//           },
//           {
//             action: '-',
//             type: 'forward',
//           },
//         ]}
//       />
//     )
//   }
// }
