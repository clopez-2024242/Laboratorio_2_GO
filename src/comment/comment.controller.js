import { asyncHandler } from '../../middlewares/server-genericError-handler.js';
import {
    createCommentService,
    getCommentsByPublicationService,
    updateCommentService,
    deleteCommentService,
} from './comment.service.js';

export const createComment = asyncHandler(async (req, res) => {
    const userId = req.userId;

    const comment = await createCommentService(req.body, userId);

    res.status(201).json({
        success: true,
        message: 'Comentario creado',
        data: comment,
    });
});

export const getCommentsByPublication = asyncHandler(async (req, res) => {
    const { publicationId } = req.params;

    const comments = await getCommentsByPublicationService(publicationId);

    res.status(200).json({
        success: true,
        data: comments,
    });
});

export const updateComment = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const userId = req.userId;

    const updated = await updateCommentService(id, userId, req.body);

    res.status(200).json({
        success: true,
        message: 'Comentario actualizado',
        data: updated,
    });
});

export const deleteComment = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const userId = req.userId;

    await deleteCommentService(id, userId);

    res.status(200).json({
        success: true,
        message: 'Comentario eliminado',
    });
});