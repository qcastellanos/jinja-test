function Practitioner () {
    this.identifier = "identifier";
    this.active = "active";
    this.name = "name";
    this.telecom = "telecom";
    this.address = "address";
    this.gender = "gender";
    this.birthDate = "birthDate";
    this.photo = "photo";
    this.qualification = "qualification";
    this.communication = "communication";
    
    
    this.toString = function() {
        return "*********************************************************" 
        + "\n PRACTITIONER:"  
            + "\n*  " + "identifier: " + this.identifier
            + "\n*  " + "active: " + this.active
            + "\n*  " + "name: " + this.name
            + "\n*  " + "telecom: " + this.telecom
            + "\n*  " + "address: " + this.address
            + "\n*  " + "gender: " + this.gender
            + "\n*  " + "birthDate: " + this.birthDate
            + "\n*  " + "photo: " + this.photo
            + "\n*  " + "qualification: " + this.qualification
            + "\n*  " + "communication: " + this.communication
            + "\n*********************************************************"
    }
}

module.exports = Practitioner;