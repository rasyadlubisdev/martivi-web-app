/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from "react";
import Ellipse22Image from "./../assets/images/Hazardous_Ellipse_22.png";
import MaskGroupImage from "./../assets/images/Hazardous_Mask_group.png";
import { styled } from "@mui/material/styles";

const Hazardous1 = styled("div")({
  backgroundColor: `rgba(237, 70, 53, 1)`,
  borderRadius: `12px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "100%",
  height: `185px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`
});

const Frame36 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `104px`,
  height: `51px`,
  left: `14px`,
  top: `114px`
});

const Hazardous2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `8px`,
  top: `0px`
});

const Q03Kg = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `31px`,
  top: `30px`
});

const Group115 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `77px`,
  height: `88.5px`,
  left: `28px`,
  top: `14px`
});

const Ellipse22 = styled("img")({
  height: `77px`,
  width: `77px`,
  position: `absolute`,
  left: `0px`,
  top: `12px`
});

const MaskGroup = styled("img")({
  height: `88.5px`,
  width: `77px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`
});

function Hazardous(props) {
  return (
    <div style={{ width: "132px" }}>
      <Hazardous1 className={props.className}>
        <Frame36>
          <Hazardous2>{`Hazardous`}</Hazardous2>
          <Q03Kg>{`0,3 Kg`}</Q03Kg>
        </Frame36>
        <Group115>
          <Ellipse22 src={Ellipse22Image} loading="lazy" alt={"Ellipse 22"} />
          <MaskGroup src={MaskGroupImage} loading="lazy" alt={"Mask group"} />
        </Group115>
      </Hazardous1>
    </div>
  );
}

export default Hazardous;
