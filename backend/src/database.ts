import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:Bento@20@localhost:3306/pitu_teste');

export default sequelize;