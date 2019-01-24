import React from "react"
import { Row, Col } from 'antd'
import styled from 'styled-components';

const Wrapper = styled.header`
    max-width: 100%;
    background: #393972;
    padding: 20px 0;
`
const Logo = styled.img`
    max-width: 110px;
`

const LogoWrap = styled(Col)`
    text-align: center;
`

const Header = props => (
    <Wrapper>
        <Row>
            <LogoWrap xs={{span:24}} lg={{span:4, offset:10}}><Logo alt={props.companyName} src={props.logo}/></LogoWrap>
        </Row>
    </Wrapper>
)

export default Header