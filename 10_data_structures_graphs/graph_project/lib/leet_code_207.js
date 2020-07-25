// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

// const buildGraph = (list) => {
//   let graph = {};

//   list.forEach((prereq) => {
//     let [ course, pre ] = prereq.map(String);
//     if (course in graph) {
//       graph[course].push(pre);
//     } else {
//       graph[course] = [ pre ];
//     }

//     if (!(pre in graph)) {
//       graph[pre] = [];
//     }
//   });

//   return graph;
// }

// const canFinish = (numCourses, prerequisites) => {
//   let prereq = buildGraph(prerequisites);
//   let completed = [];

//   let eligibleCourseExists = true;
//   while (eligibleCourseExists) {
//     eligibleCourseExists = false;

//     for (let course in graph) {
//       let everyPreBeenMet = prereq[course].every((pre) => completed.includes(pre));

//       if (!completed.includes(course) && everyPreBeenMet) {
//         completed.push(course);
//         eligibleCourseExists = true;
//       }
//     }
//   }

//   return completed.length === numCourses;
// }


//



canFinish(2, [[1,0], [0, 1]]);