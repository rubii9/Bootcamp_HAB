const { getDB } = require('../db');
const {
  formatDateToDB,
  processAndSavePhoto,
  deletePhoto
} = require('../helpers');

// GET - /entries
async function listEntries(req, res, next) {
  try {
    const db = await getDB();

    const entries = await db.all(
      `SELECT id, date, description, place, image from diary ORDER BY date DESC`
    );

    res.send({
      status: 'ok',
      data: entries
    });
  } catch (error) {
    next(error);
  }
}

// POST - /entries
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

    let savedFileName;

    if (req.files && req.files.photo) {
      try {
        savedFileName = await processAndSavePhoto(req.files.photo);
      } catch (error) {
        const imageError = new Error(
          'Can not process upload image. Try again.'
        );
        imageError.httpCode = 400;
        throw imageError;
      }
    }

    const db = await getDB();

    const date = formatDateToDB(new Date());

    const result = await db.run(
      'INSERT INTO diary(date, place, description, image) VALUES(:date, :place, :description, :image)',
      {
        ':place': place,
        ':description': description,
        ':date': date,
        ':image': savedFileName
      }
    );

    res.send({
      status: 'ok',
      data: {
        id: result.lastID,
        date,
        place,
        description,
        image: savedFileName
      }
    });
  } catch (error) {
    next(error);
  }
}

// PUT - /entries/:id
async function editEntry(req, res, next) {
  try {
    const { place, description } = req.body;
    const { id } = req.params;

    if (!place || !description) {
      const error = new Error(
        'Required fields place or description are missing'
      );
      error.httpCode = 400;
      throw error;
    }

    const db = await getDB();

    const current = await db.get('SELECT image FROM diary WHERE id=:id', {
      ':id': id
    });

    let savedFileName;

    if (req.files && req.files.photo) {
      try {
        savedFileName = await processAndSavePhoto(req.files.photo);

        if (current && current.image) {
          await deletePhoto(current.image);
        }
      } catch (error) {
        const imageError = new Error(
          'Can not process upload image. Try again.'
        );
        imageError.httpCode = 400;
        throw imageError;
      }
    } else {
      savedFileName = current.image;
    }

    await db.run(
      'UPDATE diary SET place=:place, description=:description, image=:image WHERE id=:id',
      {
        ':place': place,
        ':description': description,
        ':image': savedFileName,
        ':id': id
      }
    );

    res.send({
      status: 'ok',
      data: {
        id,
        place,
        description,
        image: savedFileName
      }
    });
  } catch (error) {
    next(error);
  }
}

// GET - /entries/:id
async function getEntry(req, res, next) {
  try {
    const { id } = req.params;

    const db = await getDB();

    const result = await db.get('SELECT * FROM diary WHERE id=:id', {
      ':id': id
    });

    if (!result) {
      const error = new Error(`The entry with id ${id} does not exist`);
      error.httpCode = 404;
      throw error;
    }

    res.send({
      status: 'ok',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

// DELETE - /entries/:id
async function deleteEntry(req, res, next) {
  try {
    const { id } = req.params;

    const db = await getDB();

    // Delete image if exists!
    const current = await db.get('SELECT image from diary where id=:id', {
      ':id': id
    });

    if (current && current.image) {
      await deletePhoto(current.image);
    }

    const result = await db.run('DELETE from diary WHERE id=:id', {
      ':id': id
    });

    if (result.changes === 0) {
      const error = new Error(`There is no entry with id ${id}`);
      error.httpCode = 400;
      throw error;
    }

    res.send({
      status: 'ok',
      message: `The entry with id ${id} has been deleted`
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listEntries,
  newEntry,
  getEntry,
  deleteEntry,
  editEntry
};
