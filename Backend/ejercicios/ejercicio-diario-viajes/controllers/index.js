const { getDB } = require('../db');

async function listEntries(req, res, next) {
  const db = await getDB();

  const entries = await db.all(
    `SELECT id, date, description, place from diary ORDER BY date DESC`
  );

  res.send({
    status: 'ok',
    data: entries
  });
}

async function newEntry(req, res, next) {
  //Meterlos en la base de datos
  try {
    const { place, description } = req.body;

    if (!place || !description) {
      const error = new Error(
        'Required fields place or description are missing'
      );
      error.httpCode = 400;
      throw error;
    }

    // PASAN COSAS

    res.send({ status: 'ok', data: { place, description } });
  } catch (error) {
    next(error);
  }
}

async function deleteEntry(req, res, next) {
  const { id } = req.params;

  // PASAN MOVIDAS

  res.send({
    status: 'ok',
    message: `The post with id: ${id} has been deleted`
  });
}

module.exports = {
  listEntries,
  newEntry,
  deleteEntry
};
