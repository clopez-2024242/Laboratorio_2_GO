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
    authorId: {
        type: DataTypes.STRING(16),
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'updated_at',
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'deleted_at'
    }
    }, {
    tableName: 'publication',
    timestamps: false
    });

// Relación
User.hasMany(Publication, { foreignKey: 'numero' });
Publication.belongsTo(User, { foreignKey: 'numero' });
