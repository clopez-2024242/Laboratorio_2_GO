import { DataTypes } from 'sequelize';
import { sequelize } from '../../configs/db.js';
import { User } from '../users/user.model.js';
import { Publication } from '../publications/publication.model.js';

export const Comment = sequelize.define(
    'Comment',
    {
        id: {
        type: DataTypes.STRING(16),
        primaryKey: true,
        },
        texto: {
        type: DataTypes.TEXT,
        allowNull: false,
        },
        publicationId: {
        type: DataTypes.STRING(16),
        allowNull: false,
        },
        authorId: {
        type: DataTypes.STRING(16),
        allowNull: false,
        },
    },
    {
        tableName: 'comments',
        timestamps: true,
    }
);

// Relaciones
User.hasMany(Comment, { foreignKey: 'authorId' });
Comment.belongsTo(User, { foreignKey: 'authorId' });

Publication.hasMany(Comment, { foreignKey: 'publicationId' });
Comment.belongsTo(Publication, { foreignKey: 'publicationId' });