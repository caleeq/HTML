const app = Vue.createApp({
    data() {
        return {
            message: 'The quick brown fox jumps over the lazy dog',
            search: '',
            tableHeader: ['Rbo', 'Order', 'Mode', 'Item'],
            tableData: [],
            pageSize: 10,
            pageNow: 1,
            loading: true,
            loadFrom: false,
            test: {
                rbo: '',
                order: '',
                mode: '',
                item: ''
            },
            rboList: [],
            modeList: [],
            rowIndex: 0
        }
    },
    computed: {
        filterData() {
            this.pageNow = 1
            return this.tableData.filter(data => !this.search || data.item.toLowerCase().includes(this.search))
        },
        paginateData() {
            let start = (this.pageNow - 1) * this.pageSize
            let end = this.pageNow * this.pageSize
            return this.filterData.slice(start, end)
        },
        pageTotal() {
            return Math.ceil(this.filterData.length / this.pageSize) || 0
        },
        pageList() {
            let arr = []
            for (let index = 1; index <= this.pageTotal; index++) {
                arr.push(index);
            }
            let n = this.pageNow
            let max = 3
            let mid = Math.ceil(max / 2)
            let list = []
            if (n < mid) {
                list = arr.slice(0, max)
            } else if (n > arr.length - mid) {
                list = arr.slice(-max)
            } else {
                list = arr.slice(n - mid, n + mid - 1)
            }
            return list
        },
        pageActive() {
            return this.pageList.map(x => x == this.pageNow ? true : false)
        },
    },
    methods: {
        submitForm() {
            $('.ui.form').form({
                fields: {
                    rbo: 'empty',
                    order: 'empty',
                    mode: 'empty',
                    item: 'empty',
                }
            })
            if ($('.ui.form').form('is valid')) {
                let rowData = Object.values(this.test)
                this.loadFrom = true
                google.script.run.withSuccessHandler(feedBack).addNewRecord(rowData)
            } else {
                $('body').toast({
                    message: `Please fill the required field !`,
                    showIcon: 'exclamation circle',
                    class: 'error',
                    position: 'top center'
                })
            }
        },
        clearForm() {
            let object = this.test
            for (const key in object) {
                if (Object.hasOwnProperty.call(object, key)) {
                    object[key] = "";
                    $('select[name=' + key + ']').dropdown('set text', '')
                }
            }
        },
        toPage(n) {
            this.pageNow = n
        },
        clearSearch() {
            this.search = ''
        },
        locateRow(index) {
            this.rowIndex = index + 1
        },
        refreshTable() {
            google.script.run.withSuccessHandler(loadOrderData).getOrderList()
        }
    },
    beforeMount() {
        google.script.run.withSuccessHandler(loadOrderData).getOrderList()
        google.script.run.withSuccessHandler(loadRboData).getRboList()
        google.script.run.withSuccessHandler(loadPrinterData).getPrinterList()
    },
    mounted() {
        $('.ui.dropdown').dropdown({
            forceSelection: false
        })
        $('.ui.checkbox').checkbox()
    },
    watch: {
        tableData(newVal, oldVal) {
            this.loading = false
        }
    }
})
const vm = app.mount("#app")

function loadOrderData(serverResponce) {
    try {
        const name = ['rbo', 'order', 'mode', 'item']
        let arr = []
        for (let i = 0; i < serverResponce.length; i++) {
            let obj = {};
            for (let j = 0; j < name.length; j++) {
                obj[name[j]] = serverResponce[i][j]
            }
            arr.push(obj)
        }
        vm.tableData = arr
    } catch (e) {
        console.log(e)
    }
}

function loadRboData(serverResponce) {
    try {
        vm.rboList = serverResponce
    } catch (e) {
        console.log(e)
    }
}

function loadPrinterData(serverResponce) {
    try {
        vm.modeList = serverResponce
    } catch (e) {
        console.log(e)
    }
}

function feedBack() {
    vm.loadFrom = false
    vm.clearForm()
    google.script.run.withSuccessHandler(loadOrderData).getOrderList()
    $('body').toast({
        message: 'OK',
        showIcon: 'check',
        class: 'success',
        position: 'bottom center'
    })
}