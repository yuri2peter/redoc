import React from 'react';
import styled from 'styled-components';
import BasicLayout from '../component/layout/BasicLayout';
import WarpperCenter from '../component/lib/WarpperCenter';

const Title = styled.div`margin-bottom: 20px;font-size: 80px;text-align: center; color: black`;
const Detail = styled.div`margin-bottom: 80px;font-size: 30px;text-align: center; color: gray`;

const NotFound = () => (
  <BasicLayout>
    <WarpperCenter>
      <Title>404</Title>
      <Detail>PAGE NOT FOUND</Detail>
    </WarpperCenter>
  </BasicLayout>
);

export default NotFound;
