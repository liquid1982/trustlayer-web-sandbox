import styled from "styled-components";
import { Button } from "antd";
import { DatePicker } from "antd";

const Heading = styled.div`
  color: red;
  padding: 20px;
`;

const StyledButton = styled(Button)`
  color: yellow;
`;

export default () => (
  <div>
    <Heading>
      <p>Hello World</p>
      <p>
        <StyledButton type="primary">Please click!</StyledButton>
      </p>
      <DatePicker />
    </Heading>
  </div>
);
