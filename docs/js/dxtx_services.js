module.service('ChartViewService', function() {
  this.data = {
    id: 1,
    title: "basic test intake",
    questions: [{
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
    permissions: [{
        user: 2,
        level: "owner"
      },
      {
        user: 1,
        level: "edit"
      }
    ]
  };

  this.chart = function() {
    return this.data;
  };
});

module.service('ChartService', function() {
  this.chartlist = [{
    id: 1,
    title: "basic test intake",
    modified: "1/10/2017",
    questions: [{
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
    permissions: [{
        user: 2,
        level: "owner"
      },
      {
        user: 1,
        level: "edit"
      }
    ]
  },
  {
    id: 2,
    title: "Feedback",
    modified: "1/10/2017",
    questions: [{
        text: "How was your visit?",
        type: "paragraph",
        answer: "Describe your visit in general terms."
      },
      {
        text: "What recommendations do you have?",
        type: "paragraph",
        validation: ["nonempty"],
        answer: "Describe what you would change."
      }
    ],
    permissions: [{
        user: 2,
        level: "owner"
      },
      {
        user: 1,
        level: "edit"
      }
    ]
  }];

  this.chart_search = function(search){
    return this.chartlist;
  };

  this.charts = function() {
    return this.chartlist;
  };
});

module.service('ReminderService', function() {
  this.remind_list = [{
      id: 1,
      heading: "Add Physicians",
      text: "Need to add the Physicians to the app",
      due: "10/10/2017",
      owner: 1
    },
    {
      id: 2,
      heading: "Add Patients",
      text: "Need to add the Patients to the app",
      due: "10/1/2017",
      owner: 2
    }
  ];

  this.reminders = function() {
    return this.remind_list;
  }

  this.reminder_search = function(search) {
    return this.remind_list;
  }
});


module.service('WeatherService', function() {
  this.data = "73 degrees and sunny"
  this.weather = function() {
    return this.data;
  }
});


module.service('LoginService', function() {
  this.user = 1
  this.login = function() {
    return this.user;
  }
  this.token = function() {
    return 1;
  }
});


module.service('MetricService', function() {
  this.metric_list = [{
    metric:"Flu",
    status:"5% (-5.1%)"
  },
  {
    metric:"Kindness",
    status:"80% (+3.8%)"
  }];
  this.metric_search = function(search){
    return this.metric_list;
  }

  this.metrics = function() {
    return this.metric_list;
  }
});


module.service('mypatients', function() {
  this.patientlist = [{
    id: 1,
    name: "Pete Patient",
    DOB: "01/01/1991",
    permissions: [{
        user: 2,
        level: "owner"
      },
      {
        user: 1,
        level: "edit"
      }
    ]
  }];
  this.patient_search = function(search){
    return this.patientlist;
  }

  this.patients = function() {
    return this.patientlist;
  }
});


module.service('patientcollision', function() {
  this.match = 1;
  this.same = function() {
    return this.match;
  }

});


module.service('patientview', function() {
  this.patient = {
    id: 1,
    name: "Pete Patient",
    DOB: "01/01/1991",
    permissions: [{
        user: 2,
        level: "owner"
      },
      {
        user: 1,
        level: "edit"
      }
    ]
  }
  this.patientinfo = function() {
    return this.patient;
  }
});


module.factory('GraphService', function() {
  var graph = {}
  graph.randomArray = (len) => [...new Array(len)].map(() => Math.random());
  graph.data = graph.randomArray(10);
  return graph
});
