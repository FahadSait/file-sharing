import mongoose from 'mongoose';

const DBconnection = async ()=>{
    const MONODB_URL=`mongodb://fksait9038:Iloveuallah786@ac-rdhj1we-shard-00-00.wkjiorm.mongodb.net:27017,ac-rdhj1we-shard-00-01.wkjiorm.mongodb.net:27017,ac-rdhj1we-shard-00-02.wkjiorm.mongodb.net:27017/?ssl=true&replicaSet=atlas-2st36m-shard-0&authSource=admin&retryWrites=true&w=majority&appName=file-sharing`;
    try { 
        await mongoose.connect(MONODB_URL, { useNewUrlParser : true });
        console.log('Connected to Database');
    } catch (error) {
        console.error('Error while connecting the database', error.message);
    }
}

export default DBconnection;