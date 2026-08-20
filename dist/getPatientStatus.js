"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPatientStatus = (patient) => {
    if (patient.type === "general") {
        return "General patient";
    }
    else if (patient.type === "emergency") {
        if (patient.emergencyLevel === 1) {
            return "Critical emergency";
        }
        else if (patient.emergencyLevel === 2) {
            return "Serious emergency";
        }
    }
    return "Moderate emergency";
};
const patient1 = {
    name: "Rahim",
    age: 35,
    type: "general",
};
const patient2 = {
    name: "Karim",
    age: 60,
    type: "emergency",
    emergencyLevel: 1,
};
console.log(getPatientStatus(patient1));
console.log(getPatientStatus(patient2));
//# sourceMappingURL=getPatientStatus.js.map