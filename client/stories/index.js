import React from "react";
import { storiesOf } from "@storybook/react";
import { action, configureActions } from "@storybook/addon-actions";

import "../src/stylesheets/index.scss";
import Theme from "../src/Theme";

import Button from "../src/components/Button";

function StoryBookWrapper({ children }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {children}
    </div>
  );
}

storiesOf("Button", module).add("Default", () => (
  <StoryBookWrapper>
    <Theme>
      <Button
        onClick={action("onClick")}
        style={{ width: 300 }}
        text="Default"
      />
    </Theme>
  </StoryBookWrapper>
));
// .add('Disabled', () => (
//   <StoryBookWrapper>
//     <Theme>
//       <Button disabled={true} style={{ width: 300 }} text='Disabled' />
//     </Theme>
//   </StoryBookWrapper>
// ));
