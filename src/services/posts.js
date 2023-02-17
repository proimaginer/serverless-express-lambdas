exports.selectPosts = async ({
  db,
  sort = 'latest',
  limit = 10,
  offset = 0,
}) => {
  let order;
  switch (sort) {
    case 'oldest':
      order = 'id asc';
      break;
    default:
      order = 'id desc';
      break;
  }

  const { rows: countRows } = await db.query(
    `
      SELECT count(id)
      FROM posts
    `,
  );
  const [{ count }] = countRows;

  const { rows: posts } = await db.query(
    `
      SELECT *
      FROM posts
      ORDER BY $1
      LIMIT $2
      OFFSET $3
    `,
    [order, limit, offset],
  );

  return {
    total_count: Number(count),
    posts,
  };
};
