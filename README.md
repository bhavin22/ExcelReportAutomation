Steps to follow to run application for the first time

service.js : node scheduler file which runs every night 12:00 A.M.
app.js : node application server file to view "no diary" report.

- install mongodb and create db named "reportAutomation"
- specify your host name and db name in url string in app.js file
- put two excel reports inside main app directory or specify their paths in service.js file
- start server.js (which runs at every night, you can change timing in service.js file)
- start app.js (Right now for the simplicity we have single login with credensials stored in config file. We have not implemented any kind of session management, so you have login each time you refresh. We can implement session later)