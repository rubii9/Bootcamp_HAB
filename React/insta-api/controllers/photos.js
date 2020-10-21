const { getDB } = require('../db');

const {
  formatDateToDB,
  processAndSavePhoto,
  deleteFile
} = require('../helpers');

// GET - /photos
async function listPhotos(req, res, next) {
  try {
    const db = await getDB();

    const entries = await db.all(
      `
      SELECT photos.*,
      (SELECT COUNT(*) FROM photos_likes WHERE photo_id=photos.id) AS likes
      FROM photos
      ORDER BY date DESC
      `
    );

    res.send({
      status: 'ok',
      data: entries
    });
  } catch (error) {
    next(error);
  }
}

// POST - /photos
async function newPhoto(req, res, next) {
  try {
    const {
      body: { title, description },
      files
    } = req;

    if (!title || !files || !files.image) {
      const error = new Error('Required are missing');
      error.httpCode = 400;
      throw error;
    }

    const db = await getDB();

    const savedPhoto = await processAndSavePhoto(req.files.image);
    const date = formatDateToDB(new Date());

    const result = await db.run(
      `
        INSERT INTO photos(date, title, description, image)
        VALUES(:date, :title, :description, :image)
      `,
      {
        ':date': date,
        ':title': title,
        ':description': description,
        ':image': savedPhoto
      }
    );

    res.send({
      status: 'ok',
      data: {
        id: result.lastID,
        date,
        title,
        description,
        image: savedPhoto,
        likes: 0
      }
    });
  } catch (error) {
    next(error);
  }
}

// DELETE - /photos/:id
async function deletePhoto(req, res, next) {
  try {
    const { id } = req.params;
    const db = await getDB();

    const currentPhoto = await db.get('SELECT image FROM photos WHERE id=:id', {
      ':id': id
    });

    if (!currentPhoto) {
      const error = new Error('Photo not found');
      error.httpCode = 404;
      throw error;
    }

    await deleteFile(currentPhoto.image);

    await db.run('DELETE from photos WHERE id=:id', {
      ':id': id
    });

    await db.run('DELETE from photos_likes WHERE photo_id=:id', { ':id': id });

    res.send({
      status: 'ok',
      message: `The photo with id ${id} has been deleted`
    });
  } catch (error) {
    next(error);
  }
}

// PUT - /photos/:id
async function editPhoto(req, res, next) {
  try {
    const { title, description } = req.body;
    const { id } = req.params;

    if (!title) {
      const error = new Error(
        'Required fields place or description are missing'
      );
      error.httpCode = 400;
      throw error;
    }

    const db = await getDB();

    const currentPhoto = await db.get('SELECT image FROM photos WHERE id=:id', {
      ':id': id
    });

    if (!currentPhoto) {
      const error = new Error('Photo not found');
      error.httpCode = 404;
      throw error;
    }

    await db.run(
      'UPDATE photos SET title=:title, description=:description WHERE id=:id',
      {
        ':title': title,
        ':description': description,
        ':id': id
      }
    );

    res.send({
      status: 'ok',
      data: {
        id,
        title,
        description,
        image: currentPhoto.image
      }
    });
  } catch (error) {
    next(error);
  }
}

// POST - /photos/:id/likes

async function likePhoto(req, res, next) {
  try {
    const { id } = req.params;
    const db = await getDB();

    const photo = await db.get('SELECT image FROM photos WHERE id=:id', {
      ':id': id
    });

    if (!photo) {
      const error = new Error('Photo not found');
      error.httpCode = 404;
      throw error;
    }

    const date = formatDateToDB(new Date());

    await db.run(
      `
        INSERT INTO photos_likes(photo_id, date)
        VALUES(:id, :date)
      `,
      {
        ':id': id,
        ':date': date
      }
    );

    const likes = await db.get(
      `
      SELECT COUNT(*) as total FROM photos_likes WHERE photo_id=:id
      `,
      { ':id': id }
    );

    res.send({
      status: 'ok',
      data: {
        id,
        likes: likes.total
      }
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listPhotos,
  newPhoto,
  deletePhoto,
  editPhoto,
  likePhoto
};
