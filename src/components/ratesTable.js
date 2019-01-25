import React from "react"
import { Row, Col } from 'antd'
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 100%;
    background: #ebf4fa;
    .text-center{
        margin-bottom:0;
    }
    h2{
        font-family: "Oswald","Open Sans",sans-serif;
        text-align: center;
        color: #393972;
        margin-top: 2%;
        margin-bottom: 25px !important;
    }
    h5{
        font-family: "Oswald","Open Sans",sans-serif;
        text-align: center;
        color: #393972;
        font-size: 15px;
    }
    table{
        border: 0;
        border-spacing: 0;
        empty-cells: show;
        font-family: "Oswald","Open Sans",sans-serif;
        width: 100%;
        margin-bottom: 40px;
        th{
            color: #898888;
            font-size: 17px;
            font-weight: 300;
            padding:20px;
            text-align: center;
        }
        tbody{
            background: #ffffff;
            border-radius: 5px;
            -webkit-box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.13);
            -moz-box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.13);
            box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.13);
        }
        td{
            border: 1px solid #d2d2d245;
            padding: 30px;
            font-weight: bold;
            font-size: 18px;
            color: #393972;
        }
    }
`

const RowColumns = (props) => {
    return props.cols.map((data,index)=>(<td key={index}>{data}</td>))
}
const TblBody = (props) => {
    return (
        <tbody>
            {props.rows.map((row,index)=>(<tr key={index}><RowColumns cols={row} /></tr>))}
        </tbody>
    )
}
const TblHeader = (props)=> {
    const size = props.sizeInLabel || ''
    const theadColumns = props.labels.map((label,index)=>(<th key={index}>{label} <span className="text-red">{(!index)?size:''}</span></th>))
    return (
        <thead>
            <tr>
                {theadColumns}
            </tr>
        </thead>
    )
}
const RateTBL = (props)=> {
   return (       
        <table>
            <TblHeader labels={props.labels} sizeInLabel={props.sizeInLabel} />
            <TblBody rows={props.data} />
        </table>
   )
}
const Tables = (props) => {
    return (
        <div>
            {props.tables.map((prop,index)=>(<RateTBL key={index} {...prop} />))}
        </div>
    )
}


const RatesTable = props => (
    <Wrapper>
        <h2>{props.rates.title}</h2>    
        <h5>{props.rates.note}</h5>
        <Tables tables={props.rates.tables}/>
        <p className="text-center"><a class="link-text-center" href="https://more.com">Need More? Click Here.</a></p>
    </Wrapper>
)

export default RatesTable