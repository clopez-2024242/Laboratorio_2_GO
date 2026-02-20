import { Router } from 'express';
import { validateJWT } from '../../middlewares/validate-JWT.js';
import {
    createPublication,
    getAllPublication,
    getPublicationById,
    updatePublication,
    deletePublication
} from './publication.controller.js';
import {
    createPublicationValidator,
    idParamValidator
} from '../../middlewares/publication-validation.js';

const router = Router();

router.post('/', validateJWT, createPublication, createPublicationValidator);
router.get('/', getAllPublication);
router.get('/:id', idParamValidator, getPublicationById);
router.put('/:id', validateJWT, updatePublication);
router.delete('/:id', validateJWT, deletePublication);

export default router;