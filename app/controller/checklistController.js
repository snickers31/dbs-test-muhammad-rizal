const checklistRepo = require('../models/checklist');


exports.CreateNewChecklist = async (req, res) => {
    try {

        var newChecklist = {
            name: req.body.name,
        }

        await checklistRepo.CreateChecklist(newChecklist, (err, data) => {
            if (err) {
                throw err
            }
            return data

        })
        res.send("Successfully Created Checklist")
    } catch (error) {
        res.status(400).send(error)
    }

}

exports.GetChecklists = async (req, res) => {

    try {

        var result = await checklistRepo.GetChecklists( (err, data) => {
            if (err) {
                throw err
            }
            return data

        })
        res.send(result)
    } catch (error) {
        res.status(400).send(error)
    }

}
exports.DeleteChecklistById = async (req, res) => {
    try {


        await checklistRepo.DeleteChecklistById(req.params.checklistId, (err, data) => {
            if (err) {
                throw err
            }
            return data

        })
        res.send("Successfully Delete Checklist")
    } catch (error) {
        res.status(400).send(error)
    }
}





exports.GetChecklistItemsByChecklistId = async (req, res) => {
    try {
        var data = await checklistRepo.ChecklistItems(req.params.checklistId, (err, data) => {
            if (err) {
                throw err
            }
            return data

        })
        res.send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}
   

exports.CreateNewChecklistItem = async (req, res) => {
    try {
        var newItem = {
            name: req.body.itemName,
        }
        await checklistRepo.CreateChecklistItem(newItem, req.params.checklistId, (err, data) => {
            if (err) {
                throw err
            }
            return data

        })
        res.send("Successfully Create Checklist Item")
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.GetChecklistItemsById= async (req, res) => {
    try {
        var data = await checklistRepo.ChecklistItem(req.params.checklistItemId, (err, data) => {
            if (err) {
                throw err
            }
            return data

        })
        res.send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.UpdateStatusChecklistItemById = async (req, res) => {
    try {
        await checklistRepo.UpdateChecklistItemStatusByChecklistId(req.params.checklistItemId, (err, data) => {
            if (err) {
                throw err
            }
            return data

        })
        res.send("Successfully Update Checklist Item Status")
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.UpdateChecklistItemNameById = async (req, res) => {
    try {
        await checklistRepo.UpdateChecklistItemName(req.body.itemName, req.params.checklistItemId, (err, data) => {
            if (err) {
                throw err
            }
            return data

        })
        res.send("Successfully Update Checklist Item Name")
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.DeleteChecklistItemById = async (req, res) => {
    try {
        await checklistRepo.DeleteChecklistItemsById(req.params.checklistItemId, (err, data) => {
            if (err) {
                throw err
            }
            return data

        })
        res.send("Successfully Delete Checklist")
    } catch (error) {
        res.status(400).send(error)
    }
}



