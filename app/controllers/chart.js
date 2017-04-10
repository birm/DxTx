module.controller("ChartCreate", ['$scope'], function($scope){

});

module.controller("ChartView", ['$scope', 'chartview'], function($scope){

});

module.service('chartview', function() {
    this.chart = {
    id: 1,
    title: "basic test intake",
    questions: [
      {
        text: "How do you feel today?",
        type: "paragraph",
        answer: "Describe your body feel in general terms."
      },
      {
        text: "Why did you come in?",
        type: "paragraph",
        validation: ["nonempty"],
        answer: "Describe your motivation for coming in"
      }
    ],
    permissions: [
      {
        user: 2,
        level: "owner"
      },
      {
        user: 1,
        level: "edit"
      }
    ]
  }
});

module.controller("Charts", ['$scope', 'mycharts'], function($scope){

});

module.service('mycharts', function() {
      this.charts = [{
      id: 1,
      title: "basic test intake",
      questions: [
        {
          text: "How do you feel today?",
          type: "paragraph",
          answer: "Describe your body feel in general terms."
        },
        {
          text: "Why did you come in?",
          type: "paragraph",
          validation: ["nonempty"],
          answer: "Describe your motivation for coming in"
        }
      ],
      permissions: [
        {
          user: 2,
          level: "owner"
        },
        {
          user: 1,
          level: "edit"
        }
      ]
    }
  ]
});
