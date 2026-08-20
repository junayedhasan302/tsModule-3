"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canEdit = (role) => {
    if (role === 'admin' || role == "editor")
        return true;
    else
        return false;
};
console.log(canEdit("admin"));
console.log(canEdit("editor"));
console.log(canEdit("viewer"));
//# sourceMappingURL=canEdit.js.map