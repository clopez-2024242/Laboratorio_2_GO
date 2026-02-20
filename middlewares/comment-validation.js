import { body, param } from 'express-validator';

export const createCommentValidator = [
    body('id').notEmpty().withMessage('ID requerido'),
    body('texto')
        .isLength({ min: 3 })
        .withMessage('El comentario debe tener mínimo 3 caracteres'),
    body('publicationId')
        .notEmpty()
        .withMessage('ID de publicación requerido'),
];

export const idParamValidator = [
    param('id').notEmpty().withMessage('ID requerido'),
];