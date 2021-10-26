const express = require('express')
const cors = require('cors')
const {
leads,
  players,
  createPlayer,
  getPlayers,
  createLead,
  getNotConfirmedLeads,
  getConfirmedLeads,
  confirmLead,
  clearGame
} = require('./storage')

const app = express()

app.use(cors())
app.use(express.json());

app.post('/create-player', function (req, res, next) {

  //console.log(req.body, req.query)
  res.json(createPlayer(req.body))
})

app.get('/get-players', function (req, res, next) {
  res.json(getPlayers())
})

app.post('/create-lead', function (req, res, next) {
  res.json(createLead(req.body))
})

app.get('/get-not-confirmed-leads', function (req, res, next) {
  res.json(getNotConfirmedLeads(req.query.playerId))
})

app.get('/get-confirmed-leads', function (req, res, next) {
  res.json(getConfirmedLeads())
})

app.get('/confirm-lead', function (req, res, next) {
  res.json(confirmLead(req.query.leadId))
})

app.get('/clear-game', function (req, res, next) {
  clearGame();
  res.json()
})

app.listen(8080, function () {
  console.log('backend server listening on port 8080')
})