const router = require('express').Router();
const { hash } = require('./util/auth');

module.exports = function (db) {

  router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const user = await new db.User(
      { username, password: hash(password) }
    ).save();
    const session = await db.Session.findOne(
      { id: req.session.id }
    );
    session.user_id = user._id;
    await session.save();
    res.status(201).send(user)
  });

  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await db.User.findOne({ username });
    if (!user || user.password !== hash(password))
      return res.sendStatus(401);
    return res.status(200).send(user);
  });

  return router;
}