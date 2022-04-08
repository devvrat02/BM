export const Data = {
    Widget1: {
        title: "FINDS",
        name: "VULNERABILITIES",
        count: "400",
    },
    Widget2: {
        title: "PENTESTER",
        name: "CONNECTED",
        count: "40",
    },
    Widget3: {
        title: "PROJECTS",
        name: "LIVE",
        count: "23",
    },
    Widget4: {

        title: "CLIENT",
        name: "CONNECTED",
        count: "10",
    },

    Widget6: {
        id: "widget6",
        title: "Vulnerabilities Distribution",
        ranges: {
            TW: "This Week",
            LW: "Last Week",
            "2W": "2 Weeks Ago",
        },
        currentRange: "TW",
        mainChart: {
            series: {
                TW: [15, 20, 38, 27],
                LW: [19, 16, 42, 23],
                "2W": [18, 17, 40, 25],
            },
            options: {
                series: [76, 67, 61],
                chart: {
                    height: "90%",
                    type: "polarArea",
                },
                stroke: {
                    width: 1,
                    colors: undefined,
                },
                fill: {
                    type: "solid",
                    opacity: 0.7,
                },
                legend: {
                    position: "bottom",
                },
                theme: {
                    monochrome: {
                        enabled: false,
                        shadeTo: "light",
                        shadeIntensity: 0.65,
                    },
                },
                labels: ["WEB APPS", "APIs", "Cloud", "Mobile Apps"],
            },
        },
        footerLeft: {
            title: "Tasks Added",
            count: {
                "2W": 487,
                LW: 526,
                TW: 594,
            },
        },
        footerRight: {
            title: "Tasks Completed",
            count: {
                "2W": 193,
                LW: 260,
                TW: 287,
            },
        },
    },
    Widget5: {
        id: "widget5",
        series: {
            Weekly: [
                {
                    name: "Critical",
                    data: [12, 13, 15, 12, 4, 8, 1, 6, 1, 2, 0, 9],
                },
                {
                    name: "High",
                    data: [3, 4, 4, 8, 2, 20, 9, 1, 2, 9, 5, 3],
                },
                {
                    name: "Medium",
                    data: [30, 34, 41, 38, 22, 35, 2, 19, 29, 39, 45, 38],
                },
                {
                    name: "Low",
                    data: [30, 34, 41, 38, 22, 32, 29, 19, 29, 39, 25, 38],
                },
                {
                    name: "Informational",
                    data: [45, 50, 62, 48, 24, 48, 29, 19, 29, 39, 25, 38],
                },
            ],
            Montly: [
                {
                    name: "Critical",
                    data: [12, 13, 15, 12, 4, 13, 1, 6, 1, 2, 0, 9],
                },
                {
                    name: "High",
                    data: [3, 4, 4, 8, 2, 20, 9, 1, 2, 9, 5, 3],
                },
                {
                    name: "Medium",
                    data: [30, 34, 41, 38, 22, 35, 2, 19, 29, 39, 45, 38],
                },
                {
                    name: "Low",
                    data: [30, 34, 41, 38, 22, 32, 29, 19, 29, 39, 25, 38],
                },
                {
                    name: "Informational",
                    data: [45, 50, 62, 48, 24, 48, 29, 19, 29, 39, 25, 38],
                },
            ],


            Quaterly: [
                {
                    name: "Critical",
                    data: [12, 13, 15, 12, 4, 13, 1, 6, 1, 2, 0, 9],
                },
                {
                    name: "High",
                    data: [3, 4, 4, 8, 2, 20, 9, 1, 2, 9, 5, 3],
                },
                {
                    name: "Medium",
                    data: [30, 34, 41, 38, 22, 35, 2, 19, 29, 39, 45, 38],
                },
                {
                    name: "Low",
                    data: [30, 34, 41, 38, 22, 32, 29, 19, 29, 39, 25, 38],
                },
                {
                    name: "Informational",
                    data: [45, 50, 62, 48, 24, 48, 29, 19, 29, 39, 25, 38],
                },
            ],


            Yearly: [
                {
                    name: "Critical",
                    data: [12, 13, 15, 12, 4, 13, 1, 6, 1, 2, 0, 9],
                },
                {
                    name: "High",
                    data: [3, 4, 4, 8, 2, 20, 9, 1, 2, 9, 5, 3],
                },
                {
                    name: "Medium",
                    data: [30, 34, 41, 38, 22, 35, 2, 19, 29, 39, 45, 38],
                },
                {
                    name: "Low",
                    data: [30, 34, 41, 38, 22, 32, 29, 19, 29, 39, 25, 38],
                },
                {
                    name: "Informational",
                    data: [45, 50, 62, 48, 24, 48, 29, 19, 29, 39, 25, 38],
                },
            ],
        },
        options: {
            chart: {
                type: "line",
                height: "100%",
                stacked: true,
                foreColor: "#999",
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
            },
            stroke: {
                width: 3,
            },
            dataLabels: {
                enabled: false,
            },
            markers: {
                size: 0,
                strokeColor: "#fff",
                strokeWidth: 3,
                strokeOpacity: 1,
                fillOpacity: 1,
                hover: {
                    size: 6,
                },
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                categoriesMonth: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                tooltip: {
                    enabled: true,
                },
            },
            grid: {
                position: "back",
            },
            legend: {
                show: true,
            },
            fill: {
                type: "solid",
                opacity: 1,
            },
            tooltip: {
                followCursor: true,
                theme: "dark",
                fixed: {
                    enabled: false,
                    position: "topRight",
                    offsetX: 0,
                    offsetY: 0,
                },
            },
        },
    },
};

export const Asssets = [
    { assets: 'assets.securitybulls.com', risk: 'CRITICAL', val: 10 }
    , { assets: 'admin.securitybulls.com', risk: 'HIGH', val: 8 }
    , { assets: 'app.securitybulls.com', risk: 'LOW', val: 0 }
    , { assets: 'web.securitybulls.com', risk: 'CRITICAL', val: 10 }
    , { assets: 'load.securitybulls.com', risk: 'HIGH', val: 8 }
    , { assets: 'db.securitybulls.com', risk: 'LOW', val: 0 }
    , { assets: 'server.securitybulls.com', risk: 'CRITICAL', val: 10 }
    , { assets: 'elon.securitybulls.com', risk: 'HIGH', val: 8 }
    , { assets: 'dbms.securitybulls.com', risk: 'LOW', val: 0 }
    , { assets: 'eth.securitybulls.com', risk: 'CRITICAL', val: 10 }
    , { assets: 'mail.securitybulls.com', risk: 'HIGH', val: 8 }
    , { assets: 'adysg.securitybulls.com', risk: 'LOW', val: 0 }
    , { assets: 'adm.securitybulls.com', risk: 'HIGH', val: 8 }
    , { assets: 'asd.securitybulls.com', risk: 'LOW', val: 0 }
    , { assets: 'serv.securitybulls.com', risk: 'MEDIUM', val: 5 }
    , { assets: 'land.securitybulls.com', risk: 'MEDIUM', val: 5 }
    , { assets: 'bbms.securitybulls.com', risk: 'LOW', val: 0 }
    , { assets: 'ethk.securitybulls.com', risk: 'CRITICAL', val: 10 }
    , { assets: 'mails.securitybulls.com', risk: 'HIGH', val: 8 }
    , { assets: 'adysgmps.securitybulls.com', risk: 'MEDIUM', val: 5 }
];


