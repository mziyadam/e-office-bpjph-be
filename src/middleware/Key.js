const Key = {
  /**
   * Verify Token
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns {object|void} response object
   */
 
  async verifyKeyWeb(req, res, next) {
    const api_key = req.headers['x-key'];
    const key = 'M0BD29SB11kFDF.d3rd.eoffice';
    if(!api_key) {
      return res.status(400).send({ 'message': 'API_Key tidak ada' });
    }
    try {
      if(api_key!==key) {
        return res.status(400).send({ 'message': 'API_Key tidak valid' });
      }
      next();
    } catch(error) {
      return res.status(400).send(error);
    }
  }
  
}

export default Key;
