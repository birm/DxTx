var model = {};
model.users = {users:
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
]};


model.reminders = {reminder:[
  {
  id: 1,
  heading: "Add Physicians",
  content: "Need to add the Physicians to the app",
  owner: 1
  },
  {
  id: 2,
  heading: "Add Patients",
  content: "Need to add the Patients to the app",
  owner: 2
  }
]}

model.patients = {patient:[
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
]}

model.charts = {chart:[
  {
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
]}

model.chartfill = {chartfill:[
  {
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
}
