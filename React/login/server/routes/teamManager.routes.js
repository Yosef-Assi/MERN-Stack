const ProjectCont = require('../controllers/teamManager.controller');
const UserCont = require('../controllers/user.controllers');
const { authenticate } = require('../config/jwt.config');

module.exports = function(app){
    app.post('/api/Project', ProjectCont.createProject);
    app.post('/api/user', UserCont.createUser);
    app.post('/api/user/reg', UserCont.reg);

    app.get('/api/logout', UserCont.logout);
    app.post('/api/login', UserCont.loginUser);
    app.get("/api/users", authenticate, UserCont.getAllUsers);



    app.get('/api/Projects', ProjectCont.getAllProjects);
    app.get('/api/Project/:id', ProjectCont.getProject);
    app.put('/api/Project/:id', ProjectCont.updateProject);
    app.delete('/api/Project/:id', ProjectCont.deleteProject);
}