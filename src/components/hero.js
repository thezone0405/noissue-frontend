import React from "react"
import { Row, Col } from 'antd'
import styled from 'styled-components';

const Wrapper = styled.div`
    background: url(${prop=>prop.bg}) no-repeat center right;
    background-size: cover;
    max-width: 100%;
    min-height: 240px;
    text-align: ${prop=>prop.align||'center'}
    h2{
        font-family: "Oswald","Open Sans",sans-serif;
        color: #ffffff;
        font-size: 30px;
        margin-bottom:12px;
    }
    p{
        font-size: 18px;
        line-height: 27px;
        font-weight: 300;
        color: #ffffff;
        margin-bottom: 40px;
        @media(max-width: 1200px){
            font-size: 15px;
            line-height: 19px
        }
    }
    .tissue{
        padding: 8% 0%;
        max-width: 500px;
        margin:0 auto;
    }
    .sticker{
        padding: 20% 10% 10% 20%;
        max-width: 700px;
    }
`
const elements = (key,content) => {
    switch (key){
        case 'title':
            return (<h2 key={key}>{content[key]}</h2>)
        case 'description':
            return (<p key={key}>{content[key]}</p>)
        case 'icon':
            return (<img key={key} src={content[key]}/>)        
    }
}
const RenderContents = (props) =>{
    let toRender = []
    const {contents} = props
    for(let key of Object.keys(contents)){
        toRender.push(elements(key,contents))
    }
    return (
        <div className={props.type}>{toRender}</div>
    )
}
const Hero = props => (
    <Wrapper bg={props.heroes[props.type].bg} align={props.align}>
        <Row>
            <Col md={{span:14, offset:1}}>
                <RenderContents type={props.type} contents={props.heroes[props.type].content}/>
            </Col>
        </Row>
    </Wrapper>
)

export default Hero