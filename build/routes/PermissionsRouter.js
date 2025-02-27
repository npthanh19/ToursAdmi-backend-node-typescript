"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const PermissionsController = require("../controllers/PermissionsController");
const router = express.Router();
router.get("/", PermissionsController.getPermissions);
router.get("/getPage", PermissionsController.getPagePermissions);
router.post("/add-permissions", PermissionsController.postAddPermissions);
router.post("/edit-permissions", PermissionsController.postEditPermissions);
router.get("/get-permission/:id", PermissionsController.getPermissionsById);
router.delete("/delete-permissions/:id", PermissionsController.deletePermission);
module.exports = router;
