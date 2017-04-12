# User
* id (short uuid)
* username
* hash
* salt
* location
* display name
* type
* permissions (contains Permission items)

# Reminder
* id (short uuid)
* text
* owner
* status
* date due

# Patient
* id (short uuid)
* created
* Name
* DOB
* permissions (contains Permission items)

# Chart
* title
* created
* questions (contain Question items)
* permissions (contains Permission items)

# Question
* text
* type
* validation
* answer (default or filled)

# ChartFill
* title
* patient
* created
* questions (contain Question items)
* permissions (contains Permission items)

# Care
* search
* operation
* comparison
* permissions (contains Permission items)

# Permission (member)
* user (reference to id)
* level (which permissions; owner, view, nameonly, or edit) (nameonly just shows that it exists, but no detail)
