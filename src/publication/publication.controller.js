import {
    createPublicationService,
    getAllPublicationsService,
    getPublicationByIdService,
    updatePublicationService,
    deletePublicationService
} from './publication.service.js';

export const createPublication = async (req, res) => {
    try {
        const publication = await createPublicationService(req.body, req.userId);
        res.status(201).json(publication);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllPublication = async (req, res) => {
    const publication = await getAllPublicationsService();
    res.status(200).json(publication);
};

export const getPublicationById = async (req, res) => {
    const publication = await getPublicationByIdService(req.params.id);
    if (!publication) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(publication);
};

export const updatePublication = async (req, res) => {
    try {
        const publication = await updatePublicationService(
        req.params.id,
        req.userId,
        req.body
        );
        res.status(200).json(publication);
    } catch (error) {
        if (error.message === 'Unauthorized')
        return res.status(403).json({ message: error.message });

        res.status(400).json({ message: error.message });
    }
    };

    export const deletePublication = async (req, res) => {
    try {
        await deletePublicationService(req.params.id, req.userId);
        res.status(200).json({ message: 'Deleted' });
    } catch (error) {
        if (error.message === 'Unauthorized')
        return res.status(403).json({ message: error.message });

        res.status(400).json({ message: error.message });
    }
};