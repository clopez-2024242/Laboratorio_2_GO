import { body } from 'express-validator';

export const validateChangePassword = [
    body('currentPassword')
        .notEmpty()
        .withMessage('La contraseña actual es obligatoria'),

    body('newPassword')
        .notEmpty()
        .withMessage('La nueva contraseña es obligatoria')
        .isLength({ min: 6 })
        .withMessage('La nueva contraseña debe tener al menos 6 caracteres'),
];