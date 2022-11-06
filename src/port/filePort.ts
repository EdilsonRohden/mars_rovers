import fs from 'fs'
import explore from '../service/explorationService';

fs.readFile(process.argv[2], (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(explore(data.toString()));
})