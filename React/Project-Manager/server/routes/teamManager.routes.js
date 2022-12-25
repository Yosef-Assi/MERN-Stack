const ProjectCont = require('../controllers/teamManager.controller');
module.exports = function(app){
    app.post('/api/Project', ProjectCont.createProject);
    app.get('/api/Projects', ProjectCont.getAllProjects);
    app.get('/api/Project/:id', ProjectCont.getProject);
    app.put('/api/Project/:id', ProjectCont.updateProject);
    app.delete('/api/Project/:id', ProjectCont.deleteProject);
}