<template>
    <div>
        <div id="positionTakingRateLineChart" class="chart-canvas"></div>
    </div>
</template>

<script>
    import util from '@/assets/js/util'
    // 引入 ECharts 主模块
    const echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/line');
    require("echarts/lib/component/legend");
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    export default {
        data() {
            return {
                arrOne: ["10", "30", "50", "80"],
                arrTwo: ["5", "40", "40", "100"],
                eChartLineOption: {
                    color: ['#2482FC', '#F35252', '#E6A733', '#3BB950', '#7A52E6', '#6D2763', '#56A0B0', '#838383'],
                    tooltip: {
                        trigger: 'axis',
                        textStyle: {
                            fontSize: 11,
                        },
                        extraCssText: 'z-index:99',
                    },
                    grid: {
                        //距离上边框的距离（以下依次）
                        top: '18%',
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true,
                    },
                    legend: {
                        data: [{name: '', icon: 'line'}],
                        right: '0',
                        y: '10px',
                        itemWidth: 12, //图例的宽度
                        itemHeight: 10, //图例的高度
                        textStyle: {
                            fontSize: 11,
                            color: '#999',
                        }
                    },
                    xAxis: [{
                        type: 'category',
                        data: ["2019-09-12", "2019-09-13", "2019-09-14", "2019-09-15"],
                        axisLabel: {
                            showMaxLabel: true,
                            rotate: "35",
                            textStyle: {
                                color: '#999999',
                                fontSize: 11,
                                fontWeight: 400
                            },
                            formatter: function (value, index) {
                                let dateFormat = /^(\d{4})-(\d{2})-(\d{2})$/;
                                if (dateFormat.test(value)) {
                                    //true，是yyyy-MM-dd格式
                                    let val = new Date(value)
                                    // let myyear = val.getFullYear();
                                    let mymonth = val.getMonth() + 1;
                                    let myweekday = val.getDate();

                                    if (mymonth < 10) {
                                        mymonth = "0" + mymonth;
                                    }
                                    if (myweekday < 10) {
                                        myweekday = "0" + myweekday;
                                    }
                                    return (mymonth + "-" + myweekday);
                                } else {
                                    //false,不是yyyy-MM-dd格式
                                    return value;
                                }

                            },
                        },
                        axisTick: {
                            show: false
                        },
                        boundaryGap: false,
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#999999',
                            }
                        }
                    }],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: {
                                show: true,
                                formatter: function (value, index) {
                                    if (value >= 10000) {
                                        value = value / 10000 + "万";
                                    }
                                    return value;
                                },
                            },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#f3f3f3',
                                    width: 1,
                                    type: 'solid'
                                }
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#999999'
                                }
                            },
                            offset: 10,
                        }

                    ],
                    series: [{
                        name: '北京',
                        type: 'line',

                        data: [
                            {
                                value: 10,
                                label: {
                                    show: true,
                                    position: 'bottom'
                                }
                            },
                            {
                                value: 100,
                                label: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            {
                                value: 300,
                                label: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            {
                                value: 500,
                                label: {
                                    show: true,
                                    position: 'bottom'
                                }
                            },
                        ],

                    },
                        {
                            name: '上海',
                            type: 'line',
                            data: [
                                {
                                    value: 50,
                                    label: {
                                        show: true,
                                        position: 'top'
                                    }
                                },
                                {
                                    value: 100,
                                    label: {
                                        show: true,
                                        position: 'bottom'
                                    }
                                },
                                {
                                    value: 200,
                                    label: {
                                        show: true,
                                        position: 'bottom'
                                    }
                                },
                                {
                                    value: 1000,
                                    label: {
                                        show: true,
                                        position: 'top'
                                    }
                                },
                            ],


                        }
                    ]
                },
                myChartLine: null,
            }
        },
        mounted() {
            // let newArr1 = [];
            // let newArr2 = [];
            // for (let i in this.arrOne) {
            //     for (let k in this.arrTwo) {
            //         if (i === k) {
            //             if (parseInt(this.arrOne[i]) >= parseInt(this.arrTwo[k])) {
            //                 newArr1.push({
            //                     value: this.arrOne[i],
            //                     label: {
            //                         show: true,
            //                         position: 'top'
            //                     }
            //                 });
            //                 newArr2.push({
            //                     value: this.arrTwo[k],
            //                     label: {
            //                         show: true,
            //                         position: 'bottom'
            //                     }
            //                 });
            //             } else {
            //                 newArr1.push({
            //                     value: this.arrOne[i],
            //                     label: {
            //                         show: true,
            //                         position: 'bottom'
            //                     }
            //                 });
            //                 newArr2.push({
            //                     value: this.arrTwo[k],
            //                     label: {
            //                         show: true,
            //                         position: 'top'
            //                     }
            //                 });
            //             }
            //
            //         }
            //     }
            // }
            // console.log(newArr1)
            // console.log(newArr2)
            // this.eChartLineOption.series[0].data = newArr1;
            // this.eChartLineOption.series[1].data = newArr2;
            // this.labelPositionSort(this.arrOne, this.arrTwo)
            console.log(util.labelPositionSort(this.arrOne, this.arrTwo)[0])
            this.$nextTick(() => {
                this.myChartLine = echarts.init(document.getElementById('positionTakingRateLineChart'))
                this.myChartLine.setOption(this.eChartLineOption);
                this.myChartLine.hideLoading()
            })
        },
        methods: {


        }
    };
</script>
<style lang="scss" scoped>
    .block {
        padding: 10px;
    }
    .chart-canvas {
        display: inline-block;
        text-align: left;
        margin: 0 auto;
        width: 100%;
        height: 250px;

    }
</style>
