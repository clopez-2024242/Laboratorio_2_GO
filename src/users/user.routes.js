import { Router } from 'express';
import {
  updateUserRole,
  getUserRoles,
  getUsersByRole,
} from './user.controller.js';
import { validateJWT } from '../../middlewares/validate-JWT.js';
import { validateChangePassword } from '../../middlewares/user-validation.js';
import { changePasswordController } from './user.controller.js';

const router = Router();

// PUT /api/v1/users/:userId/role
router.put('/:userId/role', ...updateUserRole);

// GET /api/v1/users/:userId/roles
router.get('/:userId/roles', ...getUserRoles);

// GET /api/v1/users/by-role/:roleName
router.get('/by-role/:roleName', ...getUsersByRole);

router.put('/change-password', validateJWT, validateChangePassword, changePasswordController);

export default router;
