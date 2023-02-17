const pg = require('../../lib/pg');
const { selectPosts } = require('../services/posts');

exports.getPosts = async (req, res) => {
  const db = await pg.connect();

  try {
    await db.query('BEGIN');

    const data = await selectPosts({ db, ...req.query });

    // 쿼리 커밋
    await db.query('COMMIT');
    return res.status(200).json(data);
  } catch (error) {
    // 쿼리 롤백
    await db.query('ROLLBACK');
    return res.status(error.status || 500).json({ message, errorArray });
  } finally {
    db.release();
  }
};
