# CONTROLLERS and Services
Core - Header, footer, space for info
Home - handle the home screens
Login - Handle login
  LoginService - (username, password) -> user ID, token
ExpandItem - items on home which can expand
Visualization - the top visualization
  GraphService - (UserId, token) -> return the visualization data for the user
Reminder - the reminders
  ReminderService - (UserId, token) -> Reminders list for the user
Info - time, date, weather, etc
  TimeService - ()->Time
  WeatherService - (Location) -> Weather String
Patients - list of patients
  PatientService - (UserId, token) -> Patients
Patient Create - new patient
  PatientCollisionService - (Name, DOB) -> Patients
Patient - view patient
  PatientViewService - (PatientID, UserId, token) -> Patient Info
Charts - list of charts
  ChartService - (UserId, token) -> Charts for the user
Chart Create - create chart
Chart - fill chart
  ChartViewService (ChartId, UserId, token) -> Chart Info
CareMGT - care mgt summary
  CareService (UserId, token) -> list of care items
CareMGT view - view a care management item
  CareService (CareId, UserId, token) -> care item details
CareMGT create - creation of care management
Activity - list of activity
  ActivityService (UserId, token) -> list of activity that user can see
Users - list of Users
  UserService (UserId, token) -> list of users that user can see
user create - creation of user
