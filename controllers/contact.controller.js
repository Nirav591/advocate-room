const { pool } = require('../config/sql.config');


const handleDatabaseError = (res, err) => {
  console.error('Database error:', err);
  return res.status(400).json({
    message: 'An error occurred',
    error: err.message,
  });
};


exports.createNewContact = (req, res) => {
  try{
    const { category, name, mobile_no, email, description } = req.body;
    const queryParams = [ category, name, mobile_no, email, description ];
    let query = 'INSERT INTO contact ( category, name, mobile_no, email, description ) VALUES (?, ?, ?, ?, ?)';
       
    pool.query(query, queryParams, async(err, result)=>{
      if(err){
        return handleDatabaseError(res, err);
      }     
      return res.status(200).json({success:true, message: 'Contact created successfully!' });            
    })
  } catch(err) {
    return handleDatabaseError(res, err);
  }
}

exports.updateContact = (req, res) => {
  try{
    const id = req.params.id;
    const { category, name, mobile_no, email, description } = req.body;
    const queryParams = [ category, name, mobile_no, email, description, id ];
    let query = 'UPDATE contact SET category = ?, name = ?, mobile_no = ?, email = ?, description = ? WHERE id = ?';
       
    pool.query(query, queryParams, (err, result)=>{
      if(err){
        return handleDatabaseError(res, err);
      }
      return res.status(200).json({success:true, message: 'Contact updated successfully!' });  
    })
  } catch(err) {
    return handleDatabaseError(res, err);
  }
}

exports.deleteContact = (req, res) => {
  try{   
    const id = req.params.id;
    const query = 'DELETE FROM contact WHERE id = ?';
    pool.query(query, [id], (err, result)=>{
      if(err){
        return handleDatabaseError(res, err);
      }
      return res.status(200).json({success: true, message: 'Contact deleted successfully!' });  
    })
  } catch(err) {
    return handleDatabaseError(res, err);
  }
}

exports.getContactById = (req, res) => {
  try{   
    const id = req.params.id;
    const query = 'SELECT * FROM contact WHERE id = ?';
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

exports.getContactList = (req, res) => {
  try{   
    const query = 'SELECT * FROM contact';
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