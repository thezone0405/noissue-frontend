import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from 'components/header'
import WelcomeHero from 'components/welcomeHero'
import HowItWorks from 'components/howItWorks'
import FreeStuff from 'components/freeStuff'
import Hero from 'components/hero'
import ProductInfo from 'components/productInfo'
import CTAContent from 'components/ctaContent'

class CreativeHub extends Component{
    render(){
        return(
            <div>
                <Header companyName={this.props.creativeHub.companyName} logo={this.props.creativeHub.logoURI}/>
                <WelcomeHero hero={this.props.creativeHub.welcomeHero}/>
                <HowItWorks howItWorks={this.props.creativeHub.howItWorks}/>
                <FreeStuff freeStuff={this.props.creativeHub.freeStuff}/>
                <Hero type="tissue" heroes={this.props.creativeHub.heroes}/>
                <ProductInfo type="size" productInfos={this.props.creativeHub.productInfos} />
                <Hero type="sticker" align="left" heroes={this.props.creativeHub.heroes}/>
                <ProductInfo type="sticker" productInfos={this.props.creativeHub.productInfos} />
                <CTAContent cta={this.props.creativeHub.cta} />
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