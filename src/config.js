import {config} from 'dotenv'; // import dotenv
config(); // initialize dotenv


export default {
    port: process.env.PORT || 3000,  // port for the server}
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDatabase: process.env.DB_DATABASE || '',

};