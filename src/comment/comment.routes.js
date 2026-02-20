import { Router } from 'express';
import { validateJWT } from '../../middlewares/validate-JWT.js';
import {
    createComment,
    getCommentsByPublication,
    updateComment,
    deleteComment,
} from './comment.controller.js';

import {
    createCommentValidator,
    idParamValidator,
} from './comment.validators.js';

const router = Router();

router.post(
    '/',
    validateJWT,
    createCommentValidator,
    createComment
);

router.get(
    '/publication/:publicationId',
    getCommentsByPublication
);

router.put(
    '/:id',
    validateJWT,
    idParamValidator,
    updateComment
);

router.delete(
    '/:id',
    validateJWT,
    idParamValidator,
    deleteComment
);

export default router;