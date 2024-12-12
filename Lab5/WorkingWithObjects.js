const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  };
  
  const module = {
    id: 1,
    title: "Module 1",
    description: "Introduction to React",
  };
  
  export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
      res.json(assignment.title);
    });
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
      const { newTitle } = req.params;
      assignment.title = newTitle;
      res.json(assignment);
    });
    app.get("/lab5/assignment/score/:newScore", (req, res) => {
      const { newScore } = req.params;
      assignment.score = Number(newScore);
      res.json(assignment);
    });
    app.get("/lab5/assignment/completed/:newStatus", (req, res) => {
      const { newStatus } = req.params;
      assignment.completed = newStatus === 'true';
      res.json(assignment);
    });
    app.get("/lab5/assignment/due/:newDue", (req, res) => {
        const { newDue } = req.params;
        assignment.due = newDue;
        res.json(assignment);
      });
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
    app.get("/lab5/module/title", (req, res) => {
      res.json(module.title);
    });
    app.get("/lab5/module/title/:newTitle", (req, res) => {
      const { newTitle } = req.params;
      module.title = newTitle;
      res.json(module);
    });
    app.get("/lab5/module/description", (req, res) => {
      res.json(module.description);
    });
    app.get("/lab5/module/description/:newDescription", (req, res) => {
      const { newDescription } = req.params;
      module.description = newDescription;
      res.json(module);
    });
  }