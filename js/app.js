var API = (function () {

    /**
     * @param data [obj]
     *      @prop startDate [timestamp] - unix eg. 1427035530
     *      @prop duration [int] - days eg. 30
     *      @prop distance: [float] - miles eg. 3.12
     *      @prop name [string] - eg. 'Frequent Plodder'
     *
     * @return success [boolean]
     */
    var createGoal = function (data) {
        // generate id
        // generate endDate

    };

    /**
     * @param data [object]
     *  @prop time [timestamp] - unix eg. 1427035530
     *  @prop duration [int] - seconds eg. 1702
     *  @prop distance: [float] - miles eg. 3.12
     *  @prop caloriesBurned: [int] - calories eg. 497
     *
     * @return success [boolean]
     */
    var addWorkout = function (data) {

    };

    /**
     * @param id [int]
     *
     * @return progress [obj]
     *      @prop percentComplete [int] - % progress eg. 99
     *      @prop remainingDays [int] - days eg. 7
     *      @prop distanceCovered: [float] - miles eg. 21.75
     *      @prop distanceRemaining: [float] - miles eg. 28.25
     */
    var getGoalProgress = function (id) {

    };

    /**
     * @param id [int]
     *
     * @return sessions [array]
     *      sessions: [
     *          {
     *              time: 1427035530,
     *              duration: 1702,
     *              distance: 3.12,
     *              caloriesBurned: 497
     *          }
     *      ]
     */
    var getWorkouts = function (id) {

    };

    var getWorkouts = function (id) {

    };

    return {
        // create
        createGoal: addGoal,
        addWorkout: addWorkout,

        // read
        getWorkouts: getWorkouts,
        getGoalProgress: getGoalProgress,

    };

})();

var storage = localStorage;

var dump = storage.getItem('data');
console.log(data.goals[0]);



// var dateString = moment.unix(1427741580).format("DD/MM/YYYY");
// console.log(dateString);



// var data = {
//   goals: [
//     {
//       distance: 40,
//       unit: 'miles',
//       startDate: 1427035530,
//       endDate: 1429318800,
//       status: 'in-progress',
//       sessions: [
//         {
//           time: 1427035530,
//           duration: 1702,
//           distance: 3.12,
//           caloriesBurned: 497
//         },
//         {
//           time: 1427220900,
//           duration: 3180,
//           distance: 4.72,
//           caloriesBurned: 764
//         },
//         {
//           time: 1427741580,
//           duration: 1871,
//           distance: 3.12,
//           caloriesBurned: 421
//         }
//       ]
//     }
//   ]
// };