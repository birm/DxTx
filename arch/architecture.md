# CONTROLLERS and Services
Core - Header, footer, space for info

Home - handle the home screens

Login - Handle login

  * LoginService - (username, password) -> user ID, token
  
ExpandItem - items on home which can expand

Visualization - the top visualization

  * GraphService - (UserId, token) -> return the visualization data for the user
  
Remind - the reminders

  * ReminderService - (UserId, token) -> Reminders list for the user
  
RemindAdd - add a reminder

Info - time, date, weather, etc

  * TimeService - ()->Time
  
  * WeatherService - (Location) -> Weather String
  
Patients - list of patients

  * PatientService - (UserId, token) -> Patients
  
PatientCreate - new patient

  * PatientCollisionService - (Name, DOB) -> Patients
  
PatientView - view patient

  * PatientViewService - (PatientID, UserId, token) -> Patient Info
  
Charts - list of charts

  * ChartService - (UserId, token) -> Charts for the user
  
ChartCreate - create chart

ChartView - fill chart

  * ChartViewService (ChartId, UserId, token) -> Chart Info
  
Care - care mgt summary

  * CareListService (UserId, token) -> list of care items
  
CareView - view a care management item

  * CareService (CareId, UserId, token) -> care item details
  
CareCreate - creation of care management

Activity - list of activity

  * ActivityService (UserId, token) -> list of activity that user can see
  
User - list of Users

UserCreate - creation of user
