const baseUrl = "https://restwinecooler2.azurewebsites.net/api/controller"


Vue.createApp({
    data() {
        return {
            winelist: [],
            wine: { coolerId: 0, capacityOfBottles: null, temp: null, bottlesInStorage: null},
            idToGetBy: null,
            singleWine: null,
        }
    },

    mounted(){
        this.getAll()
    },

    methods: {

        // getAllTemperatures() initiates the rest api for use in this method 
        getAll() {
            this.helperGetAndShow(baseUrl)
        },
        // helperGetAndShow() inititates the full json from api to be worked with
        async helperGetAndShow(url) {
            try {
                const response = await axios.get(url)
                this.winelist = await response.data

            } catch (ex) {
                alert(ex.message)
            }
        },

        async addwine() {
            const response = await axios.post(baseUrl, this.wine)
            this.getAll()
        },

        async getById(id) {
            const url = baseUrl + "/" + id
            try {
                const response = await axios.get(url)
                this.singleWine = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
    }
}).mount("#app")