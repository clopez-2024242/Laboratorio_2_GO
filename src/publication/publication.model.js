import { DataTypes } from 'sequelize';
import { sequelize } from '../../configs/db.js';
import { User } from '../users/user.model.js';

export const Publication = sequelize.define('Publication', {
    numero: {
        type: DataTypes.STRING(16),
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    texto: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    IdAutor: {
        type: DataTypes.STRING(16),
        allowNull: false
    }
    }, {
    tableName: 'publication',
    timestamps: true
    });

// Relación
User.hasMany(Publication, { foreignKey: 'authorId' });
Publication.belongsTo(User, { foreignKey: 'authorId' });