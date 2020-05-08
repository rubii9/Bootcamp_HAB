const { format } = require('date-fns');

// Format a date to DB
function formatDateToDB(date) {
  return format(date, 'yyyy-MM-dd HH:mm:ss');
}

module.exports = {
  formatDateToDB
};
