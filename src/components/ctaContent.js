import React from "react"
import styled from 'styled-components';
import { Button } from 'antd';

const Wrapper = styled.div`
    max-width: 100%;
    background: #ffffff;
    min-height: 200px;
    padding: 3% 18%;
    img{
        max-width: 100%;
        margin: 0 auto;
        margin-top: -180px;
        margin-bottom: 30px;
        @media(max-width:1700px){
            max-width:200px;
            margin-top:-150px;
        }
        @media(max-width:1400px){
            max-width:180px;
            margin-top:-120px;
        }
    }
    h2{
        font-family: "Oswald","Open Sans",sans-serif;
        text-align: center;
        color: #393972;
        font-size: 30px;
        margin-bottom:12px;
    }
`
const Btn = styled(Button)`
    border: solid 2px #ed2d4a !important;
    color: #ffffff !important;
    background: #fd566f !important;
    font-size: 18px !important;
    padding: 15px 70px !important;
    height: auto !important;
    font-family: "Oswald","Open Sans",sans-serif !important;
    border-radius: 5px;
    margin:0 auto !important;
    margin-top: 30px !important;
    display: block;
    max-width: 400px;
`
const ContentWrap = styled.div`
   max-width: 700px;
   margin:0 auto;
   text-align:center;
   p{
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #393972;
        @media(max-width: 1200px){
            font-size: 15px;
            line-height: 19px
        }
   }
`

const CTAContent = props => (
    <Wrapper>
        <ContentWrap>
            <img src={props.cta.partnersIcon} alt="noissue partners" />
            <p>{props.cta.p1}</p>
            <p>{props.cta.p2}</p>
            <Btn as="a" href="https://becomeapartner.com">Become a Partner</Btn>
        </ContentWrap>
    </Wrapper>
)

export default CTAContent