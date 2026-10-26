import { v4 as uuid4 } from 'uuid';


class FileService{
    async saveFile(file){
        try{
            // получаем 
        const fileType = file.name.split(".").pop()
        const fileName = `${uuid4()}.${fileType}`

        const filePath  = `./files/${fileName}`

        await file.mv(filePath)


        return fileName;


        }catch(err){
            console.log("Ошибка при добавлении файла:" + err);
            
        }





    }
}
export default new FileService;