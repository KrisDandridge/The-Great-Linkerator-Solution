const sync = require('./sync')
const client = require('./client')
// get all links
async function getAllLinks() {
  try {
    const {
      rows: links
    } = await client.query(`
      SELECT *
      FROM links;
    `)
    console.log('These are the links:', links)
    return links
  } catch (error) {
    throw error
  }
}
// create new link
const createLink = async ({link, comment} ) => {
  console.log('strting to create new link')
  try {
    console.log('this is link', link)
    const {
      rows: [newLink],
    } = await client.query(
      `
      INSERT INTO links (link, comment)
      VALUES($1, $2)
      RETURNING *;
    `,
      [link, comment],
    )
    console.log('creating new Link', newLink)
    return newLink
  } catch (error) {
    throw error
  }
}
const getLinkById = async (id) => {
  try {
    const {
      rows: [link],
    } = await client.query(
      `
    SELECT * 
    FROM links
    WHERE id=$1;
    `,
      [id],
    )
    if (!link) {
      return 'No link was found with that id'
    }
    return link
  } catch (error) {
    console.error(error)
  }
}
const updateLink = async (id, fields = {}) => {
  console.log('this is update fields', fields)
  console.log('this is id for updateee', id)
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 2}`)
    .join(', ')
  console.log('this is update fields after setsting', fields)
  console.log('this is setstring', setString)
  try {
    console.log('hitting api for update')
    if (setString.length > 0) {
      const result = await client.query(
        `
      UPDATE links
      SET ${setString}
      WHERE id=$1
      RETURNING *;
      `,
        [id, ...Object.values(fields)],
      )
      console.log('this is the updated link thats returend', result)
      return result
    }
  } catch (error) {
    throw error
  }
}
const deleteLink = async (id) => {
  console.log('delete id is', id)
  try {
    const {
      rows: [delLink],
    } = await client.query(
      `
    DELETE FROM links
    WHERE id= $1;
    `,
      [id],
    )
    return 'Link is deleted '
  } catch (error) {
    throw error
  }
}

const createTags = async (tagList) =>{

  if (tagList.length === 0) {
    return;
  }
  const valuesStringInsert = tagList.map(
    (_, index) => `$${index + 1}`
  ).join('), (');

  const valuesStringSelect = tagList.map(
    (_, index) => `$${index + 1}`
  ).join(', ');

  try{
    await client.query(`
      INSERT INTO tags(tag)
      VALUES (${ valuesStringInsert })
      ON CONFLICT (tag) DO NOTHING;
    `, tagList);
    const { rows } = await client.query(`
      SELECT * FROM tags
      WHERE tag
      IN (${ valuesStringSelect });
    `, tagList);

    return rows;
  } catch (error) {
    throw error;
  }
}
  

const getAllTags = async () =>{

  try{
    const {rows} = client.query(`
    SELECT * 
    FROM tags;
    `);
    return rows
  }catch(error){
    console.log(error)
  }
}





module.exports = {
  sync,
  client,
  getAllLinks,
  createLink,
  getLinkById,
  updateLink,
  deleteLink,
  createTags,
  getAllTags,
}