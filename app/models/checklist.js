const sql = require('./db')



exports.GetChecklists = async (result) => {
    try {
        const data = await new Promise((resolve, reject) => {
            sql.query(
                "SELECT * FROM checklists",
                (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                }
            );
        })

        return result(null, data);

    } catch (error) {
        return result(error, null);

    }
}

exports.CreateChecklist = async (newChecklistData, result) => {
    try {
        const data = await new Promise((resolve, reject) => {
            sql.query(
                "INSERT INTO checklists (name) VALUES (?)", newChecklistData.name,
                (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                }
            );
        })

        return result(null, data);

    } catch (error) {
        return result(error, null);

    }
}


exports.DeleteChecklistById = async (checklistId, result) => {
    try {
        const data = await new Promise((resolve, reject) => {
            sql.query(
                "DELETE FROM checklists WHERE id = ?", checklistId,
                (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                }
            );
        })

        return result(null, data);

    } catch (error) {
        return result(error, null);

    }
}


exports.CreateChecklistItem = async (itemData, checklistId, result) => {
    try {
        const data = await new Promise((resolve, reject) => {
            sql.query(
                "INSERT INTO checklist_items (name, checklist_id) VALUES (?,?)", [itemData.name, checklistId],
                (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                }
            );
        })

        return result(null, data);

    } catch (error) {
        return result(error, null);

    }
}


exports.ChecklistItems = async(checklistId, result) => {
    try {
        const data = await new Promise((resolve, reject) => {
            sql.query(
                "SELECT * FROM checklist_items WHERE checklist_id = ?", checklistId,
                (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                }
            );
        })

        return result(null, data);

    } catch (error) {
        return result(error, null);

    }
}


exports.ChecklistItem = async (checklistItemId, result) => {
    try {
        const data = await new Promise((resolve, reject) => {
            sql.query(
                "SELECT * FROM checklist_items WHERE id = ?", checklistItemId,
                (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                }
            );
        })

        return result(null, data);

    } catch (error) {
        return result(error, null);

    }
}


exports.UpdateChecklistItemStatusByChecklistId = async (checklistItemId, result) => {
    try {
        const data = await new Promise((resolve, reject) => {

            var item = sql.query(
                "SELECT * FROM checklist_items WHERE id = ?", checklistItemId,
                (err, data) => {
                    if (err) {
                        reject(err);
                    }

                    if (data.length < 1) {
                        reject({ message: "data not found." })
                    }

                    var newStatus = data[0].status == 0 ? 1 : 0
                    sql.query(
                        "UPDATE checklist_items SET status = ? WHERE id = ?", [newStatus, checklistItemId],
                        (err, data) => {
                            if (err) {
                                reject(err);
                            }
                            resolve(data);
                        }
                    );
                    return data
                }
            );
            
            
        })

        return result(null, data);

    } catch (error) {
        return result(error, null);

    }
}


// Mengupdate nama checlist item
exports.UpdateChecklistItemName = async (newName, checklistItemId, result) => {
    try {
        const data = await new Promise((resolve, reject) => {
            sql.query(
                "UPDATE checklist_items SET name = ? WHERE id = ?", [newName, checklistItemId],
                (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                }
            );
        })

        return result(null, data);

    } catch (error) {
        return result(error, null);

    }
}


// Mendelete Checklist items berdasarkan id
exports.DeleteChecklistItemsById = async (checklistItemId, result) => {
    try {
        const data = await new Promise((resolve, reject) => {
            sql.query(
                "DELETE FROM checklist_items WHERE id = ?", checklistItemId,
                (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                }
            );
        })

        return result(null, data);

    } catch (error) {
        return result(error, null);

    }
}

