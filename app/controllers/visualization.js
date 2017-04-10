module.controller("Visualization", ['$scope'])

randomArray = (length, max) => [...new Array(length)].map(() => Math.random());

function GraphService(userid, token, len = 30){
  return randomArray(len, 5);
}
