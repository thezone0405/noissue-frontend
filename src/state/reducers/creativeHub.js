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
                content:{
                    title: "Our Tissue",
                    description: "All of our tissue is acid free and utilizes only soy-based inks, making it completely biodegradable. We also looked at our supply chain and made sure that right from the source, it is the best it can be for the planet. That's why, all of our tissue is FSC (Forest Stewardship Council) approved.",
                    icon: "https://www.noissue.com.au/skin/frontend/noissue/default/images/creative-tissue-logo.png"
                }                
            },
            sticker:{
                bg: "https://www.noissue.com.au/skin/frontend/noissue/default/images/custom-stckr-bg.jpg",
                content:{
                    title: "Custom Stickers",
                    description: "Our custom stickers utilize soy-based inks. There are no limits on designs or colors, so go crazy! We use CMYK printing with various options around sizes and shapes."
                }
            }
        },
        howItWorks:{
            items:[
                {
                    title: "Easy Online Design",
                    icon: "https://www.noissue.com.au/skin/frontend/noissue/default/images/easy-online-icon.png",
                    description: "Live updating platform allows you to see and change your design in real time, perfect for designing on the fly."
                },
                {
                    icon: "https://www.noissue.com.au/skin/frontend/noissue/default/images/repid-lead-times.png",
                    title: "Rapid Lead Times",
                    description: "With lead times as short as 10 days to at most 3 weeks, tissues and stickers will be delivered to wherever needed ASAP!"
                },
                {
                    icon: "https://www.noissue.com.au/skin/frontend/noissue/default/images/echo-friendly-creative.png",
                    title: "Eco-Friendly Offerrings",
                    description: "Providing sustainable options is important. Your clients get the benefits of custom packaging without harming the environment."
                }
            ],
            title:"Creatively Speaking, here’s how it works:"
        },
        freeStuff:{
            downloadIconBag: "https://www.noissue.com.au/skin/frontend/noissue/default/images/download-psd.png",
            downloadIcon: "https://www.noissue.com.au/skin/frontend/noissue/default/images/download-psd-icon.png",
            icon: "https://www.noissue.com.au/skin/frontend/noissue/default/images/free-stuffs.png"
        },
        productInfos:{
            size:{
                title:"Size Guide",                
                infos:[
                    {
                        image: "https://www.noissue.com.au/skin/frontend/noissue/default/images/upload-small-img.jpg",
                        title: "Small",
                        size:  "20\" x 15\"",
                        description: "PERFECT FOR PACKAGING:",
                        tags: ["skincare","Jewelry","Hospitality","Subscriptions"]
                    },
                    {
                        image: "https://www.noissue.com.au/skin/frontend/noissue/default/images/upload-standerd-img.jpg",
                        title: "Standard",
                        size:  "30\" x 20\"",
                        description: "PERFECT FOR PACKAGING:",
                        tags: ["Clothing","Homewares","Flowers","Alcohol"]
                    }
                ],
                rates:{
                    title:"Tissue Pricing",
                    note: "Note: all prices are inclusive of a 10% discount and stated in $USD",
                    tables:[
                        {
                            sizeInLabel: "(20\"x 15\")",
                            labels:[
                                "SMALL",
                                "250 Sheets",
                                "500 Sheets",
                                "1000 Sheets",
                                "2000 Sheets",
                                "5000 Sheets",
                                "10000 Sheets"
                            ],
                            data:[
                                ["1 Colour",
                                "$99.00",
                                "$126.00",
                                "$157.50",
                                "$198.00",
                                "$319.50",
                                "$558.00"],
                                ["2 Colours",
                                "$139.50",
                                "$175.50",
                                "$216.00",
                                "$265.50",
                                "$405.00",
                                "$684.00"],
                            ]
                        },
                        {
                            sizeInLabel: "(30\"x 20\")",
                            labels:[
                                "STANDARD",
                                "250 Sheets",
                                "500 Sheets",
                                "1000 Sheets",
                                "2000 Sheets",
                                "5000 Sheets",
                                "10000 Sheets"
                            ],
                            data:[
                                ["1 Colour",
                                "$117.00",
                                "$148.00",
                                "$193.50",
                                "$310.50",
                                "$549.50",
                                "$1,062.00"],
                                ["2 Colours",
                                "$166.50",
                                "$207.00",
                                "$256.50",
                                "$378.00",
                                "$675.00",
                                "$1,350.00"],
                            ]
                        }
                    ]
                }
            },
            sticker:{
                title:"Sticker Sizes",                
                infos:[
                    {
                        title: "Circle",
                        image: "https://www.noissue.com.au/skin/frontend/noissue/default/images/custom-stckr-circle.jpg",
                        size:  "1.5\" x 1.5\" and 2\" x 2\"",
                    },
                    {
                        title: "Rectangle",
                        image: "https://www.noissue.com.au/skin/frontend/noissue/default/images/custom-stckr-rack.jpg",
                        size:  "2.4\" x 1.5\" and 3.15\" x 2\"",
                    }
                ],
                rates:{
                    title:"Sticker Pricing",
                    note: "Note: all prices are inclusive of a 10% discount and stated in $USD",
                    tables:[
                        {
                            labels:[
                                "CIRCLE",
                                "250 Sheets",
                                "500 Sheets",
                                "1000 Sheets",
                                "2000 Sheets",
                                "5000 Sheets",
                                "10000 Sheets"
                            ],
                            data:[
                                ["1.5\" x 1.5\"",
                                "$63.00",
                                "$72.00",
                                "$90.50",
                                "$126.00",
                                "$225.50",
                                "$360.00"],
                                ["2 Colours",
                                "$67.50",
                                "$76.50",
                                "$99.00",
                                "$139.50",
                                "$243.00",
                                "$387.00"],
                            ]
                        },
                        {
                            labels:[
                                "RECTANGLE",
                                "250 Sheets",
                                "500 Sheets",
                                "1000 Sheets",
                                "2000 Sheets",
                                "5000 Sheets",
                                "10000 Sheets"
                            ],
                            data:[
                                ["2.4\" x 1.5\"",
                                "$63.00",
                                "$72.50",
                                "$90.00",
                                "$126.50",
                                "$225.00",
                                "$360.00"],
                                ["3.15\" x 2\"",
                                "$67.50",
                                "$76.50",
                                "$99.00",
                                "$139.50",
                                "$243.00",
                                "$387.00"],
                            ]
                        }
                    ]
                }
            }
        },
        cta:{
            partnersIcon: "https://www.noissue.com.au/skin/frontend/noissue/default/images/noissue-partner.png",
            p1: "We have a brilliant reputation built as a result of our low minimum order quantities, free shipping worldwide, and quick turn-around times.",
            p2: "You do the hard work by designing, we'll make sure everything else is taken care of. We would welcome the opportunity to further discuss how our values align and the benefits we would share as partners."
        }   
    }
}

export default creativeHub