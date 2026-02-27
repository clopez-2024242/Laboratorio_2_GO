export const errorHandler = (err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    console.error(`Stack: ${err.stack}`);

    // Sequelize validation error
    if (err.name === 'SequelizeValidationError') {
        const errors = err.errors.map(error => ({
        field: error.path,
        message: error.message
        }));

        return res.status(400).json({
        success: false,
        message: 'Error de validación',
        errors
        });
    }

    // Unique constraint
    if (err.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({
        success: false,
        message: 'El registro ya existe',
        error: 'DUPLICATE_FIELD'
        });
    }

    // Foreign key constraint
    if (err.name === 'SequelizeForeignKeyConstraintError') {
        return res.status(400).json({
        success: false,
        message: 'Referencia inválida',
        error: 'INVALID_REFERENCE'
        });
    }

    // JWT
    if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({
        success: false,
        message: 'Token inválido'
        });
    }

    if (err.name === 'TokenExpiredError') {
        return res.status(401).json({
        success: false,
        message: 'Token expirado'
        });
    }

    // Error personalizado
    if (err.statusCode) {
        return res.status(err.statusCode).json({
        success: false,
        message: err.message
        });
    }

    // Default
    res.status(500).json({
        success: false,
        message: 'Error interno del servidor'
    });
};

export const notFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Ruta no encontrada: ${req.originalUrl}`
    });
};