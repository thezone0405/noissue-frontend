import React from "react"
import { Row, Col } from 'antd'
import styled from 'styled-components';
import { Button } from 'antd';

const Wrapper = styled.div`
    max-width: 100%;
    background: #fff0d7;
    min-height: 400px;
`
const ContentWrap = styled(Col)`
    min-height: 400px;
    display: table;

    @media(max-width: 865px){
        max-width: 100%;
        width: 100%;
    }
`
const HeroContent = styled.div`
    font-family: "Oswald","Open Sans",sans-serif;
    display: table-cell;
    vertical-align: middle;
    padding: 10% 15% 5% 30%;
    h1{        
        font-size: 50px;
        line-height: 60px;
        color: #393972;
        @media(max-width: 1200px){
            font-size: 32px;
            line-height: 32px
        }
    }
    p{
        font-size: 18px;
        line-height: 27px;
        font-weight: 300;
        color: #393972;
        @media(max-width: 1200px){
            font-size: 15px;
            line-height: 19px
        }
    }
    h2{
        color: #393972;
    }

    @media(max-width: 1400px){        
        padding: 3% 5% 2% 15%;
    }
    @media(max-width: 1200px){        
        padding: 0 0 0 15px;
    }
    @media(max-width: 865px){        
        padding: 20px;
    }
`
const BGWrap = styled(Col)`
    background: url(${prop=>prop.bg}) no-repeat center right;
    background-size: cover;
    @media(max-width:865px){
        display:none;
    }
`
const HeroList = styled.ul`
    margin-bottom:20px;
    padding:0;
    list-style-type: none;
    li{
        font-size:18px;
        color: #393972;
        font-weight:300;

        ::before{
            content:"•"; 
            font-size:18px;
            margin-right: 10px;
        }
        @media(max-width: 1200px){
            font-size: 15px;
            line-height: 19px
        }
    }
`
const List = props => {
    const list = props.list.map((list,index)=>(<li key={index}>{list}</li>))
    return (
        <HeroList>{list}</HeroList>
    )
}

const Btn = styled(Button)`
    border: solid 2px #393972 !important;
    color: #393972 !important;
    background: none !important;
    font-size: 18px !important;
    padding: 3px 20px !important;
    height: auto !important;
`
const HiddenBG = styled(Row)`
    img{
        max-width:100%;
        width: 100%;
    }
    @media(min-width:865px){
        display:none;
    }
`
const WelcomeHero = props => (
    <Wrapper>
        <HiddenBG>
            <Col span={24}>
                <img src={props.hero.hiddenBG} alt={props.hero.title}/>
            </Col>
        </HiddenBG>
        <Row type="flex">        
            <ContentWrap sm={{span:24}} md={{span:10}}>
                <HeroContent>
                    <h1>{props.hero.title}</h1>
                    <p>{props.hero.description}</p>
                    <h2>{props.hero.subHeadline}</h2>
                    <List list={props.hero.list}/>
                    <Btn>$USD</Btn>
                </HeroContent>
            </ContentWrap>
            <BGWrap sm={{span:24}} md={{span:14}} bg={props.hero.bg}></BGWrap>
        </Row>
    </Wrapper>
)

export default WelcomeHero