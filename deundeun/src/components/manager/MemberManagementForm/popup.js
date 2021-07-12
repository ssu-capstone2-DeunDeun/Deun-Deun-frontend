
export const msgPopupClear = (event) => {
    const t = document.getElementById("msgPopup");
    t.className = "msgDelete";
};
export const msgPopupMake = (event) => {
    const t = document.getElementById("msgPopup");
    t.className = "msgPopupBlock";
};

export const rolePopupClear = (event) => {
    const t = document.getElementById("rolePopup");
    t.className = "roleDelete";
};

export const rolePopupMake = (event) => {
    const t = document.getElementById("rolePopup");
    t.className = "rolePopupBlock";
};

export const authPopupClear = (event) => {
    const t = document.getElementById("authPopup");
    t.className = "authDelete";
};
export const authPopupMake = (event) => {
    const t = document.getElementById("authPopup");
    t.className = "authPopupBlock";
};

export const addRolePopupClear = (event) => {
    const t = document.getElementById("addRolePopup");
    t.className = "addRoleDelete";
};
export const addRolePopupMake = (event) => {
    const t = document.getElementById("addRolePopup");
    t.className = "addRolePopupBlock";
};

export const deleteRolePopupClear = (event) => {
    const t = document.getElementById("modalId");
    t.className = "delete";
};
export const deleteRolePopupMake = (event) => {
    const t = document.getElementById("modalId");
    t.className = "make";
};
