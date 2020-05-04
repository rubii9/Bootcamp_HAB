async function listEntries(req, res, next) {
  // PASAN COSAS!!!!

  res.send({
    status: 'ok',
    data: [
      {
        id: 1,
        place: 'Costa da morte',
        description: 'Lorem ipsum dolor sit amet',
        date: '2020-05-04 12:33:03',
        image: '/uploads/9788ce68-1aa2-4bfb-bddd-5b1394917190.jpg'
      },
      {
        id: 2,
        place: 'Camariñas',
        description: 'Lorem ipsum dolor sit amet',
        date: '2020-05-04 15:33:03',
        image: '/uploads/3788ce68-1aa2-4bfb-bddd-5b1394917190.jpg'
      }
    ]
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
