import { Comment } from './comment.model.js';

export const createCommentService = async (data, userId) => {
  return await Comment.create({
    ...data,
    authorId: userId,
  });
};

export const getCommentsByPublicationService = async (publicationId) => {
  return await Comment.findAll({
    where: { publicationId },
    order: [['createdAt', 'DESC']],
  });
};

export const updateCommentService = async (id, userId, data) => {
    const comment = await Comment.findByPk(id);

    if (!comment) {
        console.error('Comentario no encontrado');
    }

    if (comment.authorId !== userId) {
        console.error('No autorizado');
    }

    await comment.update(data);
    return comment;
};

export const deleteCommentService = async (id, userId) => {
    const comment = await Comment.findByPk(id);

    if (!comment) {
        console.error('Comentario no encontrado');
    }

    if (comment.authorId !== userId) {
        console.error('No autorizado');
    }

    await comment.destroy();
};