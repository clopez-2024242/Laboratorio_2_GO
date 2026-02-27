import { Op } from 'sequelize';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, UserProfile } from './user.model.js';

export const registerUserService = async (data) => {
    const { Password, ...rest } = data;

    const existingUser = await User.findOne({
        where: {
            [Op.or]: [
                { Email: data.Email },
                { Username: data.Username }
            ]
        }
    });
    if (existingUser) {
        throw new Error('El usuario o correo ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    const user = await User.create({
        ...rest,
        Password: hashedPassword
    });

    return user;
};

export const loginUserService = async (identifier, password) => {
    const user = await User.findOne({
        where: {
            [Op.or]: [
                { Email: identifier },
                { Username: identifier }
            ]
        }
    });

    if (!user) {
        throw new Error('Usuario Invalido');
    }

    const isPasswordValid = await bcrypt.compare(password, user.Password);

    if (!isPasswordValid) {
        throw new Error('Usuario Invalido');
    }

    const token = jwt.sign(
        { sub: user.userId },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return {user, token};
};

export const updateUserService = async (userId, data) => {
    const user = await User.findByPk(userId);

    if (!user) {
        throw new Error('No Se Encuentra El Usuario');
    }

    await user.update(data);
    return user;
};

export const changePasswordService = async (userId, oldPassword, newPassword) => {
    const user = await User.findByPk(userId);

    if (!user) {
        throw new Error('No Se Encuentra El Usuario');
    }

    const isValid = await bcrypt.compare(oldPassword, user.Password);

    if (!isValid) {
        throw new Error('La Contraseña Actual es Incorrecta');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await user.update({ Password: hashedPassword });
    return { message: 'Contraseña Cambiada Correctamente' };
};

export const getUserProfileService = async (userId) => {
    const user = await User.findByPk(userId, {
        include: [
            {
                model: UserProfile,
                as: 'UserProfile'
            }
        ]
    });

    if (!user) {
        throw new Error('No Se Encuentra El Usuario');
    }

    return user;
};