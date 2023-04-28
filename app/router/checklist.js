const express = require('express');
const router = express.Router();

const controller = require('../controller/checklistController');

router.get('/checklist', controller.GetChecklists);
router.post('/checklist', controller.CreateNewChecklist);
router.delete('/checklist/:checklistId', controller.DeleteChecklistById);
router.get('/checklist/:checklistId/item', controller.GetChecklistItemsByChecklistId);
router.post('/checklist/:checklistId/item', controller.CreateNewChecklistItem);
router.get('/checklist/:checklistId/item/:checklistItemId', controller.GetChecklistItemsInChecklist);
router.put('/checklist/:checklistId/item/:checklistItemId', controller.UpdateStatusChecklistItemById);
router.delete('/checklist/:checklistId/item/:checklistItemId', controller.DeleteChecklistItemById);
router.put('/checklist/:checklistId/item/rename/:checklistItemId', controller.UpdateChecklistItemNameById);


module.exports = router