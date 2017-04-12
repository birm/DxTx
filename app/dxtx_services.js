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
  }
});

module.service('ChartService', function() {
  this.data = [{
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
  }]
  this.charts = function() {
    return this.data;
  }
});

module.service('ReminderService', function() {
  this.reminders = [{
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
  ]
  this.reminders = function() {
    return this.reminders
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
