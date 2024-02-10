const crypto = require('crypto');
method = {};

method.encrptToDb = (val)=>{  // for db and table naming only
    return val.replace(/-/g,'_').replace(/\s/g,'_').toLowerCase()
}

method.decrptFromDb = (val)=>{  // for data stored which are searchable or used for filtering in row or url
    return val.replace(/_/g,'-').replace(/\s/g,'-').toLowerCase();
}

method.escapeMySQLdata = (val)=>{
    return val;
}

method.generateKey = (val,hashType='sha256')=>{
    return crypto.createHash(hashType).update(val).digest('hex');
}

method.safeString = (val)=>{
    return val;
}

method.timeStamp = ()=>{
    return new Date().getTime();
}

method.generateOTP = (length) => {
    let res  = '';
    let ch   = '0123456789';
    let chl = ch.length;
    for ( var i = 0; i < length; i++ ) {
      res += ch.charAt(Math.floor(Math.random() * chl));
    }
    return res;
}

method.isEmailAddress = (str) => {
    var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(str);  // returns a boolean
}
method.isNumber = (str) => {
    var pattern = /^\d+\.?\d*$/;
    return pattern.test(str);  // returns a boolean
}


module.exports = method;