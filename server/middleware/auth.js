const { v4: uuidv4 } = require("uuid");
const db = require('../db/index');
const { createSessionHash, hash } = require('../util/auth.js');

module.exports.cookieParser = function (req, res, next) {
  const rawCookies = req.get('Cookie') || '';
  const parsedCookies = rawCookies.split('; ')
    .reduce((cookies, cookie) => {
      if (cookie.length) {
        const indx = cookie.indexOf('=');
        const key = cookie.slice(0, indx);
        const value = cookie.slice(indx + 1);
        cookies[key] = value;
      }
      return cookies;
    }, {});
  req.cookies = parsedCookies;
  next();
}

module.exports.sessionHandler = function (req, res, next) {
  let { session_id } = req.cookies;
  // check cookies for session_id
  Promise.resolve(session_id)
    .then((session_id) => {
      if (!session_id)
        throw Error('Aint got no session_id')
      return db.Session.findOne({ id: session_id })
    })
    .catch(() =>
      db.Session.create({
        id: uuidv4(),
        hash: hash(createSessionHash())
      }).then((session) => {
        res.cookie('session_id', session.id);
        return session;
      })
    )
    .then((session) => {
      req.session = session;
      next();
    })
}