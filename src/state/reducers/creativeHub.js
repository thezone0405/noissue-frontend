const creativeHub = (state,action) => {
    return {
        ...state,
        logoURI: "https://www.shipbob.com/wp-content/uploads/2018/06/no-issue-logo.png",
        companyName: "No Issue",
        welcomeHero: {
            title: "Welcome to the Creative Hub.",
            description: "Ordering packaging is rarely easy, and getting design proofs approved can mean hours of back and forth. With noissue, you can upload your design, select your Pantones, and trust that our team of designers will get a proof back within 24 hours. Take some stress out of your week and let us be the Robin to your Batman.",
            subHeadline: "We’re here to help.",
            bg: "https://www.noissue.com.au/skin/frontend/noissue/default/images/creative-hub-top.jpg",
            hiddenBG: "https://www.noissue.com.au/skin/frontend/noissue/default/images/creative-hub-top-mob.jpg",
            list: [
                "Free delivery for clients (anywhere in the world)",
                "Special offers",
                "Flexibility to change, lowest MOQs",
                "Blind shipping: send direct to customers",
                "Personalised discount for your clients"
            ]
        },
        heroes:{
            tissue:{
                bg: "https://www.noissue.com.au/skin/frontend/noissue/default/images/creative-tissue-bg.jpg",
                title: "Our Tissue",
                description: "All of our tissue is acid free and utilizes only soy-based inks, making it completely biodegradable. We also looked at our supply chain and made sure that right from the source, it is the best it can be for the planet. That's why, all of our tissue is FSC (Forest Stewardship Council) approved.",
                tissueIcons: "https://www.noissue.com.au/skin/frontend/noissue/default/images/creative-tissue-logo.png"
            },
            sticker:{
                bg: "https://www.noissue.com.au/skin/frontend/noissue/default/images/custom-stckr-bg.jpg",
                title: "Custom Stickers",
                description: "Our custom stickers utilize soy-based inks. There are no limits on designs or colors, so go crazy! We use CMYK printing with various options around sizes and shapes."
            }
        },
        onlineDesignIcon: "https://www.noissue.com.au/skin/frontend/noissue/default/images/easy-online-icon.png",
        rapidLeadTimeIcon: "https://www.noissue.com.au/skin/frontend/noissue/default/images/repid-lead-times.png",
        ecoFriendlyIcon: "https://www.noissue.com.au/skin/frontend/noissue/default/images/echo-friendly-creative.png",
        downloadIconBag: "https://www.noissue.com.au/skin/frontend/noissue/default/images/download-psd.png",
        downloadIcon: "https://www.noissue.com.au/skin/frontend/noissue/default/images/download-psd-icon.png",
        freeStuffIcon: "https://www.noissue.com.au/skin/frontend/noissue/default/images/free-stuffs.png",
        partnersIcon: "https://www.noissue.com.au/skin/frontend/noissue/default/images/noissue-partner.png",
        noissueParrotIcon: "https://www.noissue.com.au/skin/frontend/noissue/default/images/logo-right.png",
        stickerCircle: "https://www.noissue.com.au/skin/frontend/noissue/default/images/custom-stckr-circle.jpg",
        stickerRect: "https://www.noissue.com.au/skin/frontend/noissue/default/images/custom-stckr-rack.jpg",
        sizeSmall: "https://www.noissue.com.au/skin/frontend/noissue/default/images/upload-small-img.jpg",
        sizeStandard: "https://www.noissue.com.au/skin/frontend/noissue/default/images/upload-standerd-img.jpg"        
    }
}

export default creativeHub