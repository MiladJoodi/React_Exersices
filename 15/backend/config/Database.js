import {Sequelize} from "sequelize";

const db = new Sequelize("uploader", "toplearn", "123456farzad", {
     host: "localhost",
     dialect: "mysql",
});


export default db;
