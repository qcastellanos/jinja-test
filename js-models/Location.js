function Location () {
    this.identifier = "identifier";
    this.status = "status";
    this.operationalStatus = "operationalStatus";
    this.name = "name";
    this.alias = "alias";
    this.description = "description";
    this.mode = "mode";
    this.type = "type";
    this.telecom = "telecom";
    this.address = "address";
    this.physicalType = "physicalType";
    this.position = "position";
    this.managingOrganization = "managingOrganization";
    this.partOf = "partOf";
    this.endpoint = "endpoint";
    
    
    this.toString = function() {
        return "*********************************************************" 
        + "\n LOCATION:"  
            + "\n*  " + "identifier: " + this.identifier
            + "\n*  " + "status: " + this.status
            + "\n*  " + "operationalStatus: " + this.operationalStatus
            + "\n*  " + "name: " + this.name
            + "\n*  " + "alias: " + this.alias
            + "\n*  " + "description: " + this.description
            + "\n*  " + "mode: " + this.mode
            + "\n*  " + "type: " + this.type
            + "\n*  " + "telecom: " + this.telecom
            + "\n*  " + "address: " + this.address
            + "\n*  " + "physicalType: " + this.physicalType
            + "\n*  " + "position: " + this.position
            + "\n*  " + "managingOrganization: " + this.managingOrganization
            + "\n*  " + "partOf: " + this.partOf
            + "\n*  " + "endpoint: " + this.endpoint
            + "\n*********************************************************"
    }
}

module.exports = Location;