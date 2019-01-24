import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from 'components/header'

class CreativeHub extends Component{
    render(){
        return(
            <div>
                <Header companyName={this.props.creativeHub.companyName} logo={this.props.creativeHub.logoURI}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        creativeHub: state.creativeHub
    }
}

export default connect(mapStateToProps)(CreativeHub)