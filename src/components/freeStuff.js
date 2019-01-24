import React from "react"
import { Row, Col } from 'antd'
import styled from 'styled-components';
import { Button } from 'antd';

const Wrapper = styled.div`
    max-width: 100%;
    background: #eeeeee;
    min-height: 200px;
    padding: 3% 18%;
    img{
        max-width: 100%;
        margin: 0 auto;
    }
    h2{
        font-family: "Oswald","Open Sans",sans-serif;
        text-align: center;
        color: #393972;
        font-size: 30px;
        margin-bottom:12px;
    }
    p{
        font-size: 18px;
        line-height: 27px;
        font-weight: 300;
        color: #393972;
        margin-bottom: 40px;
        @media(max-width: 1200px){
            font-size: 15px;
            line-height: 19px
        }
    }
`
const Btn = styled(Button)`
    border: solid 2px #ed2d4a !important;
    color: #ffffff !important;
    background: #fd566f !important;
    font-size: 18px !important;
    padding: 10px 70px !important;
    height: auto !important;
    font-family: "Oswald","Open Sans",sans-serif !important;
    border-radius: 5px;
`
const DLBtn = styled(Button)`
    border: none !important;
    color: #ffffff !important;
    background: #393972 !important;
    font-size: 18px !important;
    padding: 10px 20px !important;
    height: auto !important;
    font-family: "Oswald","Open Sans",sans-serif !important;
    width: 100%;
    display: block;
    text-align: left;
    img{
        float: right;
    }
`
const ContentWrap = styled.div`
    padding: 0 15px;
    text-align: center;
    .DL-wrap{
        background: #d9d9e3;
    }
`

const FreeStuff = props => (
    <Wrapper>
        <Row>
            <Col md={{span:6}}>
                <ContentWrap>
                    <img src={props.freeStuff.icon} alt="Free Stuffs"/>
                </ContentWrap>
            </Col>
            <Col md={{span:9}}>
                <ContentWrap>
                <div>
                    <h2>Seeing is believing</h2>
                    <p>Get your hands on some FREE unbranded samples here.</p>
                </div>
                <Btn as="a" href="https://toCTALoc.com">Get Sample</Btn>
                </ContentWrap>
            </Col>
            <Col md={{span:9}}>
                <ContentWrap>
                    <div className="DL-wrap">
                        <Row>
                            <Col span={24}><img src={props.freeStuff.downloadIconBag} alt="Free Stuffs"/></Col>
                        </Row>                    
                        <DLBtn as="a" href="hhtps://download.com">DOWNLOAD PSD MOCKUPS <img src={props.freeStuff.downloadIcon} alt="Download"/><i className="clearfix"></i></DLBtn>
                    </div>
                </ContentWrap>
            </Col>
        </Row>
    </Wrapper>
)

export default FreeStuff