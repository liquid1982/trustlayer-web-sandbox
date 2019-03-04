import React from 'react'
import App, { Container } from 'next/app'
import styled from 'styled-components'
import { Layout, Row, Col } from 'antd';

import '../assets/global.less';

const {
  Header, Footer, Sider, Content,
} = Layout;

const StyledHeader = styled(Header)`
  box-shadow: 0 2px 8px #f0f1f2;
`;

export default class extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <StyledHeader>
            <Row type="flex">
              <Col>Logo</Col>
              <Col>Main Nav</Col>
              <Col>Quick Add</Col>
              <Col offset={8}>Search</Col>
              <Col>User Menu</Col>
            </Row>
          </StyledHeader>
          <Content>
            <Component {...pageProps} />
          </Content>
          <Footer></Footer>
        </Layout>
      </Container>
    )
  }
}