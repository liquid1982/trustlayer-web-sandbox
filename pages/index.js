import { Modal, Button, Row, Col } from 'antd';
import styled from 'styled-components';

const Page = () => (
  <Row>
    <Col lg={{ span: 22, offset: 1 }}>
      <p>Hello World!</p>
      <Button type="primary">Please Click here!</Button>
    </Col>
  </Row>
);

Page.getInitialProps = () => {
  return {
    title: 'TrustLayer Web Sandbox'
  }
}

export default Page;
