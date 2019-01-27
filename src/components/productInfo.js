import React from "react"
import { Row, Col } from 'antd'
import styled from 'styled-components'
import RatesTable from 'components/ratesTable'

const elements = (key,content) => {
    switch (key){
        case 'title':
            return (<h4 key={key}>{content[key]}</h4>)
        case 'size':
            return (<h5 key={key}>{content[key]}</h5>)
        case 'description':
            return (<p key={key}>{content[key]}</p>)
        case 'image':
            return (<img key={key} src={content[key]}/>)
        case 'tags' :
            return (<TagList key={key} tags={content[key]}/>)   
    }
}

const RenderContent = (props) => {
    let toRender = []
    const {contents} = props
    for(let key of Object.keys(contents)){
        toRender.push(elements(key,contents))
    }
    return (
        <div className={props.type}>{toRender}</div>
    )
}
const Wrapper = styled.div`
    max-width: 100%;
    background: #ebf4fa;
    min-height: 400px;
    padding: 3% 18%;
    @media(max-width:500px){
        padding: 3% 0;
    }
    .sticker{
        padding-bottom: 8%;
        @media(max-width:1200px){
            padding-bottom: 12%;
        }
        @media(max-width:930px){
            padding-bottom: 17%;
        }
        @media(max-width:850px){
            padding-bottom: 20%;
        }
        @media(max-width:750px){
            padding-bottom: 25%;
        }
        @media(max-width:650px){
            padding-bottom: 35%;
        }
    }
    h2{
        font-family: "Oswald","Open Sans",sans-serif;
        text-align: center;
        color: #393972;
        font-size: 25px;
        margin-bottom: 2%;
    }
`
const ColumnList = styled(Col)`
    text-align: center;
    h4{
        font-family: "Oswald","Open Sans",sans-serif;
        text-align: center;
        color: #393972;
        font-size: 19px;
        line-height: 15px
    }
    h5{
        font-family: "Oswald","Open Sans",sans-serif;
        text-align: center;
        color: #2AC199;
        font-size: 18px;
        margin-bottom: 30px;
    }
    p{
        font-family: "Oswald","Open Sans",sans-serif;
        font-weight:300;
        font-size: 18px;
        line-height: 27px;
        font-weight: 300;
        color: #393972;
        @media(max-width: 1200px){
            font-size: 15px;
            line-height: 19px
        }
    }
    >div{
        margin: 0 auto;
        @media(min-width:765px){
            max-width:450px;
        }
        img{
            width: 100%;
            margin-bottom: 30px;
        }
    }
`
const TagsListWrap = styled.ul`
    list-style-type: none;
    padding: 0;
    li{
        display: inline;
        padding: 10px;
        margin: 5px;
        -webkit-box-shadow: 0px 2px 4px 0px rgba(205,205,205,0.5);
        -moz-box-shadow: 0px 2px 4px 0px rgba(205,205,205,0.5);
        box-shadow: 0px 2px 4px 0px rgba(205,205,205,0.5);
        border-radius: 5px;
        background: #ffffff;
        font-size: 18px;
        font-weight:300;
        font-family: "Oswald","Open Sans",sans-serif;
    }
`
const TagList = props => {
    const list = props.tags.map((info,index)=>{
        return (
            <li key={index}>{info}</li>
        )
    })
    return (<TagsListWrap>{list}</TagsListWrap>)
}

const WrapGridList = styled.div`
    max-width: 926px;
    margin:0 auto;
`
const GridList = props => {
    const list = props.infos.map((info,index)=>{
        return (
            <ColumnList key={index} md={{span:12}}>
                <RenderContent contents={info} />
            </ColumnList>
        )
    })
    return (<Row>{list}</Row>)
}
const ProductInfo = props => (
    <Wrapper>
        <h2>{props.productInfos[props.type].title}</h2>        
        <WrapGridList>
            <GridList infos={props.productInfos[props.type].infos}/>
        </WrapGridList>
        <RatesTable type={props.type} rates={props.productInfos[props.type].rates} />
    </Wrapper>
)

export default ProductInfo