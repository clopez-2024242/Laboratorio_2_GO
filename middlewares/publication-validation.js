import { body, param } from 'express-validator';

export const createPublicationValidator = [
    body('numero').notEmpty(),
    body('titulo').isLength({ min: 5, max: 100 }),
    body('categoria').notEmpty(),
    body('texto').isLength({ min: 10 })
];

export const idParamValidator = [
    param('numero').notEmpty()
];