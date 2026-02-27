import { Publication } from './publication.model.js';

export const createPublicationService = async (data, authorId) => {
  const publication = await Publication.create({
    ...data,
    authorId: authorId
  });

  return publication;
};

export const getAllPublicationsService = async () => {
  return await Publication.findAll({
    order: [['createdAt', 'DESC']]
  });
};

export const getPublicationByIdService = async (id) => {
  const publication = await Publication.findByPk(id);

  if (!publication) {
    throw new Error('Publicación no encontrada');
  }

  return publication;
};

export const updatePublicationService = async (id, userId, data) => {
  const publication = await Publication.findByPk(id);
  
  if(!publication){
    throw new Error('Publicación no encontrada');
  }

  if(publication.authorId !== userId){
    throw new Error('No autorizado');
  }
    

  await publication.update(data);
  return publication;
};

export const deletePublicationService = async (id, authorId) => {
  const publication = await Publication.findByPk(id);

  if (!publication) {
    throw new Error('Publicación no encontrada');
  }

  if (publication.authorId !== userId) {
    throw new Error('No autorizado');
  }
  
  await publication.destroy();
  return publication;
};
