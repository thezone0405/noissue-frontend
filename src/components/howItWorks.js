import React from "react"
import { Row, Col } from 'antd'
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 100%;
    background: #ffffff;
    min-height: 400px;
    padding: 3% 18%;

    h2{
        font-family: "Oswald","Open Sans",sans-serif;
        text-align: center;
        color: #393972;
        font-size: 30px;
        margin-bottom: 5%;
    }
`
const ColumnList = styled(Col)`
    text-align: center;
    h4{
        font-family: "Oswald","Open Sans",sans-serif;
        text-align: center;
        color: #393972;
        font-size: 30px;
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
    div{
        margin: 0 auto;
        div{
            min-height:150px;
        }

        @media(min-width:765px){
            max-width:350px;
        }
    }
`

const GridList = props => {
    const list = props.infos.map((info,index)=>{
        return (
            <ColumnList key={index} md={{span:8}}>
                <div>
                    <div><img src={info.icon} alt={info.title}/></div>                    
                    <h4>{info.title}</h4>
                    <p>{info.description}</p>
                </div>
            </ColumnList>
        )
    })
    return (<Row>{list}</Row>)
}
const HowItWorks = props => (
    <Wrapper>
        <h2>{props.howItWorks.title}</h2>        
        <GridList infos={props.howItWorks.items}/>
    </Wrapper>
)

export default HowItWorks