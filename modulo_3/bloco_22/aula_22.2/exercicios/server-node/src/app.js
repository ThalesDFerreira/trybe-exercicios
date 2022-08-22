const express = require('express');

const app = express();

app.get('/myActivities/:id', (req, res) => {
  const activity = activities.find(({ id }) => id === Number(req.params.id));
  res.status(200).json(activity);
});

app.get('/myActivities', (req, res) => res.status(200).json({ activities }));


pp.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  let filteredActivities = activities;

  if (status) {
    filteredActivities = activities.filter((activity) => activity.status === status);
  }

  res.status(200).json({ activities: filteredActivities });
});

modules.exports = { app };