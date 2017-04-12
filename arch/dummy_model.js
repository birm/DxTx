var model = {};
model.users =
[
  {
    id: 1,
    username: "Alex",
    hash: "password",
    salt: "1",
    location: "30332",
    display_name: "Alex Admin",
    type: "admin"
  }
  ,
  {
    id: 2,
    username: "danielle",
    hash: "password",
    salt: "1",
    location: "30332",
    display_name: "Danielle Doctor",
    type: "admin",
    permissions: [
      {
        user: 1,
        level: "owner"
      }
    ]
  }
  ,
  {
    id: 3,
    username: "nick",
    hash: "password",
    salt: "1",
    location: "30332",
    display_name: "Nick Nurse",
    type: "physician",
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
];


model.reminders = [
  {
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

model.patients = [
  {
  id: 1,
  name: "Pete Patient",
  DOB: "01/01/1991",
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

model.charts = [
  {
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

model.chartfill = [
  {
    id: 1,
    title: "Bob's intake",
    patient: 1,
    questions: [
      {
        text: "How do you feel today?",
        type: "paragraph",
        answer: "Felt okay until I fell."
      },
      {
        text: "Why did you come in?",
        type: "paragraph",
        validation: ["nonempty"],
        answer: "I fell and my arm is now swollen."
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


// how to search by id
function findchart(n){
  return model.charts.find(x => x.id === n)
}

// how to return only with permissions
function allows(permissions, user){
  // given a permissions array, return if the user is present
  if (permissions){
    return (permissions.find(x => x.user === user));
  }
  else{
    return 0
  }
}

function allowedchart(n){
  return model.charts.find(x => allows(x.permissions, n))
}
