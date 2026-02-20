import { Publication } from './publication.model.js';

export const createPublicarionService = async (data, userId) => {
  return await Publication.create({
    ...data,
    authorId: userId
  });
};

export const getAllPublicationsService = async () => {
  return await Publication.findAll({
    order: [['createdAt', 'DESC']]
  });
};

export const getPublicarionByIdService = async (id) => {
  return await Publication.findByPk(id);
};

export const updatePublicacionService = async (id, userId, data) => {
  const publication = await Publication.findByPk(id);
  if (!publication){
    console.error('Publicacion no Existente');
  } 

  if (publication.authorId !== userId){
    console.error('No Autorizado');
  }
    

  await publication.update(data);
  return publication;
};

export const deletePublicationService = async (id, userId) => {
  const publication = await Publication.findByPk(id);
  if (!publication){
    console.error('Publicacion no Encontrada');
  }
  if (post.authorId !== userId){
    console.error('Unauthorized');
  }
  await post.destroy();
};