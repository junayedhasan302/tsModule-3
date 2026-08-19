interface GeneralPatient {
  name: string;
  age: number;
  type: "general";
}

interface EmergencyPatient {
  name: string;
  age: number;
  type: "emergency";
  emergencyLevel: 1 | 2 | 3;
}

const getPatientStatus = (
  patient: GeneralPatient | EmergencyPatient
): string => {
  if (patient.type === "general") {
    return "General patient";
  } else if (patient.type === "emergency") {
    if (patient.emergencyLevel === 1) {
      return "Critical emergency";
    } else if (patient.emergencyLevel === 2) {
      return "Serious emergency";
    }
  }

  return "Moderate emergency";
};

const patient1: GeneralPatient = {
  name: "Rahim",
  age: 35,
  type: "general",
};

const patient2: EmergencyPatient = {
  name: "Karim",
  age: 60,
  type: "emergency",
  emergencyLevel: 1,
};

console.log(getPatientStatus(patient1));
console.log(getPatientStatus(patient2));