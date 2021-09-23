import leavesBgLeft from "../public/images/leaves-bg-left.png";
import leavesBgRight from "../public/images/leaves-bg-right.png";
import loginLeavesBgLeft from "../public/images/login-leaves-bg-left.png";
import loginLeavesBgRight from "../public/images/login-leaves-bg-right.png";
import tabletLeavesBgLeft from "../public/images/tablet-leaves-bg-left.png";
import tabletLeavesBgRight from "../public/images/tablet-leaves-bg-right.png";

const breakpoints = ['375px', '567px', '768px', '992px', '1024px', '1200px']

breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]
breakpoints.xxl = breakpoints[5]

let colors = {
    green: '#50AF37',
    orange: '#CBA844',
    orangeLight: '#FACF57',
    red: '#AF3737',
    white: '#fff',
    black: '#303030',
    black60: 'rgba(0, 0, 0, 0.6)',
    black40: 'rgba(0, 0, 0, 0.4)',
    black20: 'rgba(0, 0, 0, 0.2)',
    black10: 'rgba(0, 0, 0, 0.1)',
    bej: '#F3ECE0',
    gray: '#C4C4C4',
    gray30: 'rgba(48, 48, 48, 0.3)',
};

let fontSizes = {
    p9: '9px',
    p12: '12px',
    p13: '13px',
    p14: '14px',
    p16: '16px',
    p18: '18px',
    p22: '22px',
    p24: '24px',
};

let fontWeights = {
    bold: 'bold',
    regular: 'regular'
};
export default {
    breakpoints: breakpoints,
    mediaQueries: {
        xs: `@media screen and (min-width: ${breakpoints.xs})`,
        small: `@media screen and (min-width: ${breakpoints.sm})`,
        medium: `@media screen and (min-width: ${breakpoints.md})`,
        large: `@media screen and (min-width: ${breakpoints.lg})`,
        xl: `@media screen and (min-width: ${breakpoints.xl})`,
        xxl: `@media screen and (min-width: ${breakpoints.xxl})`
    },
    colors: colors,
    fonts: {
        sans: 'Open Sans'
    },
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    variants: {
        container: {
            maxWidth: breakpoints.xxl,
            minWidth: breakpoints.xs,
            bg: 'bej',
            mx: 'auto',
            position: 'relative'
        },
        content: {
            px: [17, 17, 34, 34, 53, 53]
        },
        header: {
            width: '100%',
            height: [90, 90, 90, 90, 117, 117],
            bg: 'black',
            px: [20, 20, 34, 34, 53, 53],
            backgroundImage: [
                `none`,
                `none`,
                `url(${tabletLeavesBgLeft.src}), url(${tabletLeavesBgRight.src})`,
                `url(${tabletLeavesBgLeft.src}), url(${tabletLeavesBgRight.src})`,
                `url(${leavesBgLeft.src}), url(${leavesBgRight.src})`,
                `url(${leavesBgLeft.src}), url(${leavesBgRight.src})`,
            ],
            backgroundPosition: [
                'left 0px top 0px, right 0px top 0px',
                'left 0px top 0px, right 0px top 0px',
                'left 0px top 0px, right 0px top 0px',
                'left 0px top 0px, right 0px top 0px',
                'left -35px top -71px, right -45px top -71px',
                'left -35px top -71px, right -45px top -71px'
            ],
            backgroundRepeat: 'no-repeat',
            btn: {
                width: [157, 157, 216, 216, 216, 216]
            },
            wrap: {
                bg: 'black',
            }
        },
        logo: {
            big: {
                display: ['none', 'none', 'block', 'block', 'block', 'block'],
                width: ['0', '0', '126px', '126px', '186px', '186px'],
                height: ['0', '0', '38px', '38px', '56px', '56px'],
                text: {
                    display: ['none', 'none', 'none', 'none', 'block', 'block'],
                }
            },
            small: {
                display: ['block', 'block', 'none', 'none', 'none', 'none'],
                width: ['58px', '58px', '0', '0', '0', '0'],
                height: ['58px', '58px', '0', '0', '0', '0'],
            }
        },
        footer: {
            width: '100%',
            height: [42],
            bg: 'black',
            px: [23, 23, 35, 35, 45, 45],
            copyright: {
                fontSize: fontSizes.p12,
                color: colors.bej,
                textTransform: 'uppercase'
            },
            link: {
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }
        },
        navbar: {
            height: 58,
            bg: 'orange',
            px: [20, 20, 34, 34, 50, 50],
            btn: {
                width: [159, 159, 159, 216, 216, 216]
            },
            link: {
                mr: 10
            },
            links: {
                listStyle: 'none',
                padding: 0,
                fontSize: fontSizes.p12
            }
        },
        colText: {
            color: colors.black60,
            fontSize: fontSizes.p12
        },
        colTextOrange: {
            color: colors.orange,
            fontSize: fontSizes.p12
        },
        button216: {
            maxWidth: 216,
            width: '100%'
        },
        cardInputComment: {
            maxWidth: 200,
            width: '100%'
        },
        cardInputServiceComment: {
            maxWidth: 286,
            width: '100%'
        },
        cardInputPromoCode: {
            maxWidth: 162,
            width: '100%'
        },
        totalPrice: {
            px: 20
        },
        orderAF: {
            mb: 25
        },
        orderHeader: {
            display: 'flex',
            flexWrap: ['wrap', 'wrap', 'wrap', 'nowrap', 'nowrap', 'nowrap'],
            justifyContent: 'space-between',
            mt: [17, 17, 17, 17, 30, 30],
            mb: ['20px', '20px', '20px', '-7px', '12px', '12px'],
            px: [19, 19, 19, 19, 53, 53],
            width: '100%',
            field: {
                title: {
                    color: colors.black60,
                    fontWeight: fontWeights.bold,
                    fontSize: fontSizes.p12,
                    lineHeight: fontSizes.p14,
                    mr: '20px',
                    whiteSpace: 'nowrap'
                },
                value: {
                    color: colors.black60,
                    fontSize: fontSizes.p14,
                    lineHeight: fontSizes.p14,
                    outline: 'none',
                    whiteSpace: 'nowrap'
                }
            },
            deliveryTime: {
                fontSize: fontSizes.p12,
                color: colors.green,
                width: '100%'
            },
            payment: {
                fontSize: fontSizes.p14,
                color: colors.black60,
                whiteSpace: 'nowrap',
                icon: {
                    mr: '10px'
                },
                method: {
                    fontSize: fontSizes.p14,
                    color: colors.black60
                },
                status: {
                    fontSize: fontSizes.p14,
                    color: colors.red
                },
                statusPaid: {
                    fontSize: fontSizes.p14,
                    color: colors.green
                }
            },
            customer: {
                mb: ['15px']
            },
            phone: {
                mb: ['6px', '6px', '6px', '6px', '6px', '15px']
            },
            delivery: {
                mb: ['15px'],
                estimation: {
                    fontSize: fontSizes.p12,
                    color: colors.green,
                    whiteSpace: 'nowrap',
                    lineHeight: fontSizes.p18,
                    ml: ['6px', '6px', '6px', '6px', '6px', '6px']
                }
            },
            address: {
                mb: ['6px', '6px', '15px', '15px', '15px', '15px']
            },
            paymentWrap: {
                mb: ['15px']
            },
            deliveryTimeWrap: {
                mb: ['15px'],
                alignSelf: ['flex-start', 'flex-start', 'flex-end', 'flex-end', 'flex-end', 'flex-end']
            },
            col: {
                l: {
                    minHeight: 50,
                    flexWrap: ['wrap', 'wrap', 'wrap', 'wrap', 'wrap', 'nowrap'],
                    width: ['100%', '100%', '100%', '100%', '100%', '100%'],
                    col: {
                        l: {
                            flexDirection: 'column',
                            width: ['100%', '100%', '100%', '100%', '70%', '70%'],
                            mb: [14, 14, 14, 14, 0, 0]
                        },
                        r: {
                            flexDirection: 'column',
                            width: ['100%', '100%', '100%', '100%', '70%', '70%'],
                            mb: [14, 14, 14, 14, 0, 0]
                        }
                    }
                },
                r: {
                    height: 50,
                    width: ['100%', '100%', '100%', '100%', '100%', '45%'],
                    justifyContent: ['flex-start', 'flex-start', 'flex-start', 'flex-end', 'flex-end', 'flex-end']
                }
            }
        },
        mb10: {
            mb: '10px'
        },
        mb14: {
            mb: '14px'
        },
        controls: {
            mb: 29,
            px: [17, 17, 37, 37, 50, 50],
            flexWrap: ['wrap', 'wrap', 'wrap', 'wrap', 'wrap', 'nowrap'],
            col: {
                flexWrap: ['nowrap', 'nowrap', 'nowrap', 'nowrap', 'nowrap', 'nowrap'],
                l: {
                    flexWrap: ['wrap', 'wrap', 'wrap', 'wrap', 'wrap', 'wrap'],
                    width: ['100%', '100%', '100%', '100%', '100%', 'calc(50% - 5px)'],
                    mb: ['25px', '25px', '25px', '25px', '25px', 0],
                    row: {
                        flexWrap: ['wrap', 'wrap', 'nowrap', 'nowrap', 'nowrap', 'nowrap'],
                        width: ['100%'],
                        l: {
                            flexWrap: ['wrap', 'wrap', 'nowrap', 'nowrap', 'nowrap', 'nowrap'],
                            width: ['100%', '100%', '100%', '100%', '100%', '100%'],
                            minWidth: ['200px'],
                            mr: ['0', '0', '20px', '20px', '20px', '15px'],
                            col: {
                                l: {
                                    width: ['100%', '100%', '100%', '100%', '100%', '100%'],
                                    mr: ['0', '0', '20px', '20px', '20px', '15px'],
                                    minWidth: ['200px'],
                                    order: [2, 2, 1, 1, 1, 1],
                                },
                                r: {
                                    width: ['100%', '100%', '100%', '100%', '100%', '100%'],
                                    minWidth: ['240px'],
                                }
                            }
                        },
                        r: {
                            flexWrap: ['wrap', 'wrap', 'wrap', 'wrap', 'wrap', 'nowrap'],
                            width: ['100%', '100%', '100%', '100%', '100%', '100%'],
                            minWidth: ['240px'],
                            col: {
                                l: {
                                    width: ['100%', '100%', '100%', '100%', '100%', '100%'],
                                    mr: ['0', '0', '20px', '20px', '20px', '15px'],
                                    minWidth: ['200px']
                                },
                                r: {
                                    width: ['100%', '100%', '100%', '100%', '100%', '100%'],
                                    minWidth: ['240px'],
                                    mb: ['7px', '7px', 0, 0, 0, 0],
                                    order: [1, 1, 2, 2, 2, 2],
                                }
                            }
                        }
                    }
                },
                r: {
                    flexWrap: ['wrap', 'wrap', 'nowrap', 'nowrap', 'nowrap', 'nowrap'],
                    width: ['100%', '100%', '100%', '100%', '100%', 'calc(50% - 15px)'],
                    alignItems: 'flex-end',
                    mb: '3px',
                    col: {
                        l: {
                            width: ['100%', '100%', '50%', '50%', '50%', '50%'],
                            minWidth: ['216px'],
                            order: [2, 2, 1, 1, 1, 1],
                            mr: ['0', '0', '15px', '15px', '15px', '15px'],
                            col: {
                                l: {
                                    mb: ['20px', '20px', '10px', '10px', '10px', '10px']
                                }
                            }
                        },
                        r: {
                            width: ['100%', '100%', '50%', '50%', '50%', '50%'],
                            order: [1, 1, 2, 2, 2, 2],
                            mb: ['20px', '20px', 0, 0, 0, 0],
                            minWidth: ['216px']
                        }
                    }
                }
            }
        },
        loader: {
            zIndex: 999,
            position: 'absolute',
            background: '#7b7b7b4d',
            inset: '0px',
            pointerEvents: 'auto',
            maxWidth: '1200px',
            minWidth: '375px',
            content: {
                margin: 'auto',
            }
        },
        popup: {
            overlay: {
                zIndex: 999,
                position: 'fixed',
                background: '#7b7b7b4d',
                inset: '0px',
                pointerEvents: 'auto'
            },
            content: {
                position: 'relative',
                margin: 'auto',
                maxWidth: 492,
                borderRadius: 10,
                width: '90%',
                backgroundColor: colors.white,
                color: colors.black60,
                boxSizing: 'border-box'
            },
            close: {
                width: '100%',
                p: [16],
                cursor: 'pointer'
            },
            modal: {
                width: "100%",
                title: {
                    fontSize: fontSizes.p14,
                    color: colors.black60,
                    width: "100%",
                    textAlign: 'center',
                    mt: '6px',
                    mb: '20px'
                },
                form: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    px: 42,
                    pb: '40px',
                    width: '100%',
                    input: {
                        width: '100%',
                        mb: '10px'
                    }
                }
            }
        },
        promo: {
            applied: {
                ml: [-1],
                width: ['100%'],
                mb: ['25px', '25px', 13, 13, 13, 13],
                title: {
                    color: colors.black60,
                    fontSizes: fontSizes.p12,
                    mr: '5px',
                },
                promo: {
                    color: colors.black,
                    fontSizes: fontSizes.p12,
                }
            }
        },
        addButton: {
            width: '100%',
            fontSize: fontSizes.p12,
            lineHeight: '16px',
            textDecorationLine: 'underline',
            color: colors.green,
            mb: ['25px', '25px', 19, 19, 19, 19],
            text: {
                mr: '5px'
            }
        },
        totalSum: {
            color: colors.green,
            fontSize: [fontSizes.p24, fontSizes.p24, fontSizes.p18, fontSizes.p18, fontSizes.p18, fontSizes.p18],
            textAlign: ['left', 'left', 'left', 'left', 'left', 'right'],
            mb: '3px',
            pl: ['5px', '5px', 0, 0, 0, 0],
            mr: ['22px']
        },
        kitchen: {
            mt: ['23px', '23px', '23px', '23px', '23px', '19px'],
            mb: ['28px', '28px', '26px', '26px', '26px', '30px'],
        },
        swiper: {
            minHeight: 118,
            mb: 10,
            ml: ['0', '0', '0', '17px', '22px', '22px'],
            mr: ['0', '0', '0', '0', '22px', '22px'],
            view: {
                position: 'relative',
                width: '100%',
                backgroundColor: colors.white,
                borderRadius: ['0', '0', '0', '6px 0px 0px 6px', '6px 6px 6px 6px', '6px 6px 6px 6px'],
                overflow: 'hidden',
                pb: ['20px', '20px', '20px', '20px', '20px', '20px'],
                pt: ['15px', '15px', '15px', '15px', '15px', '15px'],
                title: {
                    textAlign: 'left',
                    color: colors.black,
                    fontWeight: fontWeights.bold,
                    fontSize: fontSizes.p18,
                    marginBottom: '28px',
                    pl: ['17px', '17px', '17px', '17px', '30px', '30px'],
                    center: {
                        textAlign: ['left', 'left', 'left', 'center', 'center', 'center'],
                        color: colors.black,
                        fontWeight: fontWeights.bold,
                        fontSize: fontSizes.p18,
                        marginBottom: '28px',
                        pl: ['17px', '17px', '17px', '17px', '30px', '30px'],
                    }
                },
                slide: {
                    width: '95px'
                }
            }
        },
        main: {
            px: 19,
            wrap: {
                pt: ['34px', '34px', '34px', '34px', '30px', '30px'],
                pb: 36,
            },
            statistics: {
                mx: 'auto',
                w: '100%',
                maxWidth: 566,
                minHeight: 94,
                border: `1px solid ${colors.green}`,
                borderRadius: 61,
                position: "relative",
                mb: 38,
                icon: {
                    position: 'absolute',
                    top: '-11px',
                    right: '9px',
                },
                info: {
                    maxWidth: 185,
                    minWidth: 185,
                    w: '100%'
                },
                heading: {
                    fontSize: fontSizes.p13,
                    fontWeight: fontWeights.bold,
                    color: colors.green,
                    margin: '14px 0',
                },
                period: {
                    fontSize: fontSizes.p13,
                    color: colors.black40,
                    marginBottom: '3px',
                    textAlign: 'center',
                },
                total: {
                    fontSize: fontSizes.p13,
                    color: colors.green,
                    textAlign: 'center'
                }
            },
            next: {
                width: '100%',
                maxWidth: '354px',
                margin: '0 auto',
                mb: ['21px', '21px', '40px', '40px', '40px', '40px'],
                position: 'relative',
                zIndex: 1,
                empty: {
                    textAlign: 'center',
                    mb: '30px'
                },
                process: {
                    position: 'relative',
                    color: colors.white,
                    backgroundColor: colors.red,
                    fontSize: fontSizes.p16,
                    height: '64px',
                    lineHeight: '64px',
                    borderRadius: '35px',
                    userSelect: 'none',
                    textAlign: 'center',
                    zIndex: 2,
                    cursor: 'pointer'
                },
                timer: {
                    color: colors.green,
                    backgroundColor: colors.white,
                    fontSize: fontSizes.p14,
                    height: '64px',
                    lineHeight: '64px',
                    borderRadius: '0 0 35px 35px',
                    userSelect: 'none',
                    textAlign: 'center',
                    zIndex: 0,
                    mt: '-32px',
                    pt: '25px',
                    pb: '57px'
                }
            },
            queue: {
                mb: [38, 38, 32, 32, 38, 38],
                info: {
                    loader: {
                        mr: 20
                    },
                    value: {
                        text: {
                            fontWight: fontWeights.bold,
                            color: colors.red
                        },
                        number: {
                            fontSize: fontSizes.p16
                        }
                    }
                }
            },
            swiper: {
                minHeight: 144,
                ml: ['0', '0', '0', '17px', '22px', '22px'],
                mr: ['0', '0', '0', '0', '22px', '22px'],
                width: '100%',
                view: {
                    position: 'relative',
                    width: '100%',
                    backgroundColor: colors.white,
                    borderRadius: ['0', '0', '0', '6px 0px 0px 6px', '6px 6px 6px 6px', '6px 6px 6px 6px'],
                    overflow: 'hidden',
                    pb: ['20px', '20px', '20px', '20px', '20px', '20px'],
                    pt: ['26px', '26px', '26px', '26px', '26px', '26px'],
                    title: {
                        textAlign: 'left',
                        color: colors.black,
                        fontWeight: fontWeights.bold,
                        fontSize: fontSizes.p18,
                        marginBottom: '26px',
                        pl: ['17px', '17px', '17px', '17px', '30px', '30px'],
                        center: {
                            textAlign: ['left', 'left', 'left', 'center', 'center', 'center'],
                            color: colors.black,
                            fontWeight: fontWeights.bold,
                            fontSize: fontSizes.p18,
                            marginBottom: '28px',
                            pl: ['17px', '17px', '17px', '17px', '30px', '30px'],
                        }
                    },
                    slide: {
                        width: '95px'
                    }
                }
            }
        },
        login: {
            height: [500, 500, 408, 408, 408, 551],
            backgroundImage: `url(${loginLeavesBgLeft.src}), url(${loginLeavesBgRight.src})`,
            backgroundSize: [118, 118, 118, 170, 207, 207],
            px: 22,
            backgroundPosition: 'left top, right top',
            backgroundRepeat: 'no-repeat',
            box: {
                maxWidth: 522,
                minHeight: 338,
                mt: [106, 106, 90, 90, 45, 45],
                width: '100%',
                heading: {
                    fontWeight: fontWeights.bold,
                    fontSize: fontSizes.p22,
                    mb: 12,
                    sub: {
                        fontSize: fontSizes.p14,
                        marginBottom: [22, 22, 37, 37, 37, 37],
                        textAlign: 'center'
                    }
                },
                form: {
                    maxWidth: ['100%', '100%', '294px', '294px', '294px', '294px'],
                    width: '100%',
                    input: {
                        mb: '13px'
                    },
                    submit: {
                        mt: '-2px'
                    }
                }
            }
        },
        inputNumber: {
            height: '100%',
            notEditable: {
                height: '100%',
                title: {
                    fontSize: fontSizes.p12,
                    color: colors.black60,
                    mb: [20, 20, 20, 20, 20, 0],
                    visibility: ['visible', 'visible', 'visible', 'visible', 'visible', 'hidden']
                },
                value: {
                    fontSize: fontSizes.p14,
                    color: colors.black
                },
                uom: {
                    fontSize: fontSizes.p9,
                    color: colors.black20
                },
            }
        },
        order: {
            ml: [0, 0, 0, 12, 12, 50],
            mr: [0, 0, 0, 14, 14, 50],
            mb: 19,
            height: ['fit-content', 'fit-content', 'fit-content', 420, 420, 307],
            borderRadius: ['0', '0', '0', '6px 0px 0px 6px', '6px 6px 6px 6px', '6px 6px 6px 6px'],
            backgroundColor: colors.white,
            boxSizing: 'border-box',
            heading: {
                flexWrap: ['wrap', 'wrap', 'wrap', 'nowrap', 'nowrap', 'nowrap'],
                pt: [25, 25, 25, 25, 25, 25],
                mr: [18, 18, 10, 10, 10, 10],
                pb: [12, 12, 12, 12, 12, 12],
                ml: [18, 18, 25, 25, 25, 32],
                pr: [40, 40, 22, 22, 22, 40],
                borderBottom: `1px solid ${colors.black20}`,
                height: ['93px', '93px', '93px', '64px', '64px', '64px'],
                orderNum: {
                    fontSize: fontSizes.p22,
                    fontWeight: fontWeights.bold,
                    mr: [21]
                },
                date: {
                    lineHeight: ['20px'],
                    dom: {
                        color: colors.black60,
                        fontSize: fontSizes.p12,
                        mr: ['8px']
                    },
                    time: {
                        color: colors.orange,
                        fontSize: fontSizes.p12,
                    }
                },
                quantity: {
                    color: colors.black60,
                    fontSize: fontSizes.p12,
                    lineHeight: ['8px'],
                    display: ['none', 'none', 'none', 'none', 'none', 'block'],
                    mr: [46]
                },
                factQuantity: {
                    color: colors.black60,
                    fontSize: fontSizes.p12,
                    lineHeight: ['8px'],
                    display: ['none', 'none', 'none', 'none', 'none', 'block'],
                    mr: ['26%']
                },
                status: {
                    title: {
                        color: colors.black60,
                        fontSize: fontSizes.p14,
                        lineHeight: ['20px'],
                    },
                    value: {
                        ml: [14],
                        icon: {
                            'svg': {
                                mb: '-2px',
                                mr: '6px'
                            }
                        },
                        label: {
                            lineHeight: ['19px'],
                        }
                    }
                },
                col: {
                    l: {
                        width: ['100%', '100%', '100%', '70%', '45%', '45%']
                    },
                    r: {
                        width: ['100%', '100%', '100%', '30%', '55%', '55%'],
                        justifyContent: ['flex-start', 'flex-start', 'flex-start', 'flex-end', 'flex-end', 'flex-end']
                    }
                }
            },
            lines: {
                padding: ['20px 2px 0 14px', '20px 2px 0 14px', '20px 2px 0 14px', '20px 2px 0 14px', '20px 2px 0 14px', '0 2px 0 14px'],
                height: ['auto', 'auto', 'auto', '356px', '356px', '245px'],
                boxShadow: '0 30px 25px -20px rgb(232 232 232 / 70%) inset',
                line: {
                    wrap: {
                        borderBottom: [`1px solid ${colors.black20}`, `1px solid ${colors.black20}`, `1px solid ${colors.black20}`, `none`, `none`, `none`],
                        pb: ['10px', '10px', '10px', '30px', '30px', '30px'],
                        pt: '15px',
                        left: {
                            flexDirection: ['column', 'column', 'column', 'row', 'row', 'row'],
                            justifyContent: ['none', 'space-between', 'space-between', 'space-between', 'space-between', 'space-between'],
                            width: ['50%', '50%', '50%', '63%', '67%', '67%'],
                            first: {
                                flexDirection: ['column', 'column', 'column', 'column', 'row', 'row']
                            }
                        },
                        right: {
                            flexDirection: ['column', 'column', 'column', 'row', 'row', 'row'],
                            width: ['50%', '33%', '33%', '33%', '30%', '33%'],
                            justifyContent: 'space-between'
                        },
                        article: {
                            fontSize: fontSizes.p14,
                            color: colors.black,
                            mb: ['11px'],
                            width: '124px',
                            pl: ['0px', '0px', '0px', '0px', '18px', '18px']
                        },
                        name: {
                            fontSize: fontSizes.p14,
                            color: colors.green,
                            mb: ['15px']
                        },
                        priceBlock: {
                            justifyContent: ['flex-start', 'flex-start', 'flex-start', 'flex-start', 'flex-start', 'space-between'],
                            flexDirection: ['column', 'column', 'column', 'column', 'row', 'row'],
                            alignItems: ['right', 'right', 'right', 'left', 'left', 'left'],
                            width: ['100%', '100%', '100%', '78%', '78%', '78%']
                        },
                        uomPrice: {
                            fontSize: fontSizes.p14,
                            color: colors.black,
                            lineHeight: '20px',
                            mb: ['11px'],
                            textAlign: 'right',
                            width: ['100%', '100%', '100%', '50%', '50%', '50%']
                        },
                        price: {
                            fontSize: [fontSizes.p24, fontSizes.p24, fontSizes.p24, fontSizes.p18, fontSizes.p18, fontSizes.p18],
                            color: colors.black,
                            fontWeight: fontWeights.bold,
                            textAlign: ['right', 'right', 'right', 'right', 'right', 'right'],
                            width: ['100%', '100%', '100%', '50%', '50%', '50%'],
                            whiteSpace: 'nowrap'
                        },
                        remove: {
                            justifyContent: 'flex-end',
                            mr: [0, 0, 0, '10px', '10px', '10px'],
                            width: ['100%', '100%', '100%', '20%', '20%', '20%']
                        },
                        removeText: {
                            fontSize: fontSizes.p14,
                            color: colors.green,
                            lineHeight: '24px',
                            display: ['block', 'block', 'block', 'none', 'none', 'none']

                        },
                        quantity: {
                            flexDirection: 'column',
                            name: {
                                fontSize: fontSizes.p12,
                                textAlign: "center",
                                mb: '12px',
                                display: ['block', 'block', 'block', 'block', 'block', 'none']
                            }
                        },
                        quantityWrap: {
                            justifyContent: 'space-between'
                        }
                    },
                    pl: ['11px', '11px', '11px', '11px', '11px', '18px'],
                    pr: ['10px', '10px', '10px', '10px', '10px', '10px'],
                    height: [67, 67, 67, 67, 67, 45],
                    mb: [30, 30, 30, 30, 30, 30],
                    alignItems: 'center',
                    col: {
                        first: {
                            width: ['22%', '22%', '22%', '22%', '22%', '43%'],
                            alignItems: ['flex-start', 'flex-start', 'flex-start', 'flex-start', 'flex-start', 'center'],
                            flexWrap: ['nowrap', 'nowrap', 'nowrap', 'nowrap', 'nowrap', 'nowrap'],
                            flexDirection: ['column', 'column', 'column', 'column', 'column', 'row'],
                            height: '100%',
                            col: {
                                l: {
                                    width: ['100%', '100%', '100%', '100%', '100%', 124],
                                    mb: [14, 14, 14, 14, 14, 0]
                                },
                                r: {
                                    width: ['100%', '100%', '100%', '100%', '100%', 'auto'],

                                },
                            }
                        },
                        second: {
                            width: ['40%', '40%', '40%', '40%', '40%', '21%'],
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            col: {
                                l: {
                                    height: '100%'
                                },
                                r: {
                                    ml: [75, 75, 75, 75, 75, 40]
                                },
                            }
                        },
                        third: {
                            width: ['42%', '42%', '42%', '42%', '42%', '30%'],
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: '100%',
                            col: {
                                l: {
                                    height: '100%',
                                    flexWrap: ['wrap', 'wrap', 'wrap', 'wrap', 'wrap', 'nowrap'],
                                    flexDirection: ['column', 'column', 'column', 'column', 'column', 'row'],
                                    justifyContent: ['flex-start', 'flex-start', 'flex-start', 'flex-start', 'flex-start', 'flex-end'],
                                    alignItems: 'center',
                                    width: ['62%', '62%', '62%', '62%', '62%', 'auto']
                                },
                                r: {
                                    ml: 21,
                                    height: '24px',
                                },
                            }
                        }
                    }
                },
                article: {
                    fontSize: fontSizes.p14,
                    color: colors.black
                },
                name: {
                    fontSize: fontSizes.p14,
                    color: colors.green
                },
                nameBold: {
                    fontSize: fontSizes.p16,
                    color: colors.green,
                    fontWeight: fontWeights.bold
                },
                quantity: {
                    fontSize: fontSizes.p14,
                    color: colors.green,
                    height: '100%'
                },
                factQuantity: {},
                uomPrice: {
                    fontSize: fontSizes.p14,
                    color: colors.black,
                    textAlign: "center",
                    width: 130,
                    whiteSpace: 'nowrap',
                    mb: [14, 14, 14, 14, 14, 0]
                },
                price: {
                    fontSize: fontSizes.p18,
                    color: colors.black,
                    fontWeight: fontWeights.bold,
                    textAlign: "right",
                    width: 105,
                    whiteSpace: 'nowrap',
                    ml: [10]
                },
                remove: {
                    minWidth: '24px'
                }
            }
        }
    },
    buttons: {
        primary: {
            color: colors.white,
            background: colors.green,
            border: `none`,
            hover: {
                color: colors.white,
                background: colors.black
            }
        },
        secondary: {
            color: colors.bej,
            background: colors.orange,
            border: `none`,
            hover: {
                color: colors.bej,
                background: colors.orangeLight
            }
        },
        print: {
            color: colors.black,
            background: colors.orange,
            border: `1px solid ${colors.black}`,
            hover: {
                color: colors.black,
                background: colors.orangeLight
            }
        },
        dark: {
            color: colors.white,
            background: colors.black,
            border: `none`,
            hover: {
                color: colors.white,
                background: colors.green
            }
        },
        cancel: {
            color: colors.white,
            background: colors.black,
            border: `none`,
            hover: {
                color: colors.white,
                background: colors.red
            }
        },
        link: {
            color: colors.bej,
            background: colors.orange,
            border: `none`,
            hover: {
                color: colors.bej,
                background: colors.orangeLight
            }
        },
        confirm: {
            color: colors.black,
            background: colors.bej,
            border: `1px solid ${colors.black}`,
            hover: {
                color: colors.white,
                background: colors.black
            }
        },
        sizes: {
            xSmall: {
                height: '31px',
                fontSize: fontSizes.p12,
                borderRadius: '35px',
                paddingLeft: '30px',
                paddingRight: '30px',
                iconML: '-10px',
                iconMR: '5px',
            },
            small: {
                height: '35px',
                fontSize: fontSizes.p12,
                borderRadius: '35px',
                paddingLeft: '30px',
                paddingRight: '30px',
                iconML: '-10px',
                iconMR: '5px',
            },
            large: {
                height: '40px',
                fontSize: fontSizes.p14,
                borderRadius: '27px',
                paddingLeft: '40px',
                paddingRight: '50px',
                iconML: '-10px',
                iconMR: '15px',
            },
            xLarge: {
                height: '45px',
                fontSize: fontSizes.p14,
                borderRadius: '27px',
                paddingLeft: '40px',
                paddingRight: '50px',
                iconML: '-10px',
                iconMR: '15px',
            }
        }
    },
    inputs: {
        variants: {
            default: {borderColor: 'none'},
            error: {borderColor: colors.red},
            success: {borderColor: colors.green},
            border: {borderColor: colors.black10},
        },
        sizes: {
            small: {
                height: '31px',
                borderRadius: '5px',
                padding: '13px'
            },
            large: {
                height: '45px',
                borderRadius: '5px',
                padding: '13px'
            },
            fullWidth: {
                height: '45px',
                borderRadius: '5px',
                padding: '13px',
                width: '100%'
            }
        }
    },
    labels: {
        default: {
            color: colors.black60
        },
        error: {
            color: colors.black60
        },
        success: {
            color: colors.black60
        }
    },
}