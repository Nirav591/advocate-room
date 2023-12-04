const { pool } = require('../config/sql.config');


const handleDatabaseError = (res, err) => {
  console.error('Database error:', err);
  return res.status(400).json({
    message: 'An error occurred',
    error: err.message,
  });
};


exports.createNewContactCategory = (req, res) => {
  try{
    const { name, description } = req.body;
    const queryParams = [ name, description ];
    let query = 'INSERT INTO contact_category ( name, description ) VALUES (?, ?)';
       
    pool.query(query, queryParams, async(err, result)=>{
      if(err){
        return handleDatabaseError(res, err);
      }     
      return res.status(200).json({success:true, message: 'Contact Category created successfully!' });            
    })
  } catch(err) {
    return handleDatabaseError(res, err);
  }
}

exports.updateContactCategory = (req, res) => {
  try{
    const id = req.params.id;
    const { name, description } = req.body;
    const queryParams = [ name, description, id ];
    let query = 'UPDATE contact_category SET name = ?, description = ? WHERE id = ?';
       
    pool.query(query, queryParams, (err, result)=>{
      if(err){
        return handleDatabaseError(res, err);
      }
      return res.status(200).json({success:true, message: 'Contact Category updated successfully!' });  
    })
  } catch(err) {
    return handleDatabaseError(res, err);
  }
}

exports.deleteContactCategory = (req, res) => {
  try{   
    const id = req.params.id;
    const query = 'DELETE FROM contact_category WHERE id = ?';
    pool.query(query, [id], (err, result)=>{
      if(err){
        return handleDatabaseError(res, err);
      }
      return res.status(200).json({success: true, message: 'Contact Category deleted successfully!' });  
    })
  } catch(err) {
    return handleDatabaseError(res, err);
  }
}

exports.getContactCategoryById = (req, res) => {
  try{   
    const id = req.params.id;
    const query = 'SELECT * FROM contact_category WHERE id = ?';
    pool.query(query, [id], (err, result)=>{
      if(err){
        return handleDatabaseError(res, err);
      }
      return res.status(200).json(result);  
    })
  } catch(err) {
    return handleDatabaseError(res, err);
  }
}

exports.getContactCategoryList = (req, res) => {
  try{   
    const query = 'SELECT * FROM contact_category';
    pool.query(query, (err, result)=>{
      if(err){
        return handleDatabaseError(res, err);
      }
      return res.status(200).json(result);  
    })
  } catch(err) {
    return handleDatabaseError(res, err);
  }
}