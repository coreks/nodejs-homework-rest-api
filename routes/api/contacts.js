const express = require("express");
const router = express.Router();

const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { joiSchema, favoriteJoiSchema } = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");

router.get("/", auth, ctrlWrapper(ctrl.getAllContacts));

router.get("/:contactId", auth, ctrlWrapper(ctrl.getContactById));

router.post("/", auth, validation(joiSchema), ctrlWrapper(ctrl.postContact));

router.delete("/:contactId", auth, ctrlWrapper(ctrl.deleteContact));

router.put(
  "/:contactId",
  auth,
  validation(joiSchema),
  ctrlWrapper(ctrl.putContact)
);

router.patch(
  "/:contactId/favorite",
  auth,
  validation(favoriteJoiSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
