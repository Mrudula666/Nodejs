function studentDetails(obj) {
    var studentObject = {};
    studentObject.name = obj.name;
    studentObject.dateOfBirth = obj.dateOfBirth;
    studentObject.phoneNumber =obj.phoneNumber;
    studentObject.address = obj.address;
    return studentObject;
}

module.exports = studentDetails;