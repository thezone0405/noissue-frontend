import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from 'components/header'
import WelcomeHero from 'components/welcomeHero'
import HowItWorks from 'components/howItWorks'

class CreativeHub extends Component{
    render(){
        return(
            <div>
                <Header companyName={this.props.creativeHub.companyName} logo={this.props.creativeHub.logoURI}/>
                <WelcomeHero hero={this.props.creativeHub.welcomeHero}/>
                <HowItWorks howItWorks={this.props.creativeHub.howItWorks}/>
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