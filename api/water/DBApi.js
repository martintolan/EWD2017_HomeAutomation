
var waterUsage = {
	title: "Water Usage",
	liters_rows: [["17:29", 20.2], ["17:28", 56], ["17:27", 0.5], ["17:26", 2.3], ["17:25", 0], ["17:24", 0], ["17:23", 0], ["17:22", 105], ["17:21", 110],
                 ["17:20", 108], ["17:19", 106], ["17:18", 56], ["17:17", 35], ["17:16", 26], ["17:15", 5], ["17:14", 3], ["17:13", 2]
  ],
};

const dbStubAPI = {
    // get all water usage info: get('/',
    getWaterInfo : () => {
        return waterUsage;
    },// getWaterInfo()

    // post('/',

    // put('/',
}
export default dbStubAPI;
