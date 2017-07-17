function Patient () {
    this.identifier = "identifier";
    this.active = "active";
    this.name = "name";
    this.telecom = "telecom";
    this.gender = "gender";
    this.birthDate = "birthDate";
    this.address = "address";
    this.maritalStatus = "maritalStatus";
    this.photo = "photo";
    this.contact = "contact";
    this.animal = "animal";
    this.communication = "communication";
    this.generalPractitioner = "generalPractitioner";
    this.managingOrganization = "managingOrganization";
    this.link = "link";
    
    
    this.toString = function() {
        return "*********************************************************" 
        + "\n PATIENT:"  
            + "\n*  " + "identifier: " + this.identifier
            + "\n*  " + "active: " + this.active
            + "\n*  " + "name: " + this.name
            + "\n*  " + "telecom: " + this.telecom
            + "\n*  " + "gender: " + this.gender
            + "\n*  " + "birthDate: " + this.birthDate
            + "\n*  " + "address: " + this.address
            + "\n*  " + "maritalStatus: " + this.maritalStatus
            + "\n*  " + "photo: " + this.photo
            + "\n*  " + "contact: " + this.contact
            + "\n*  " + "animal: " + this.animal
            + "\n*  " + "communication: " + this.communication
            + "\n*  " + "generalPractitioner: " + this.generalPractitioner
            + "\n*  " + "managingOrganization: " + this.managingOrganization
            + "\n*  " + "link: " + this.link
            + "\n*********************************************************"
    }
}

module.exports = Patient;