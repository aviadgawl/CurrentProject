export class UserData{
    public userName:string;
    public pictrueUrl:string;
    public id:string;

    constructor(userName:string , pictureUrl:string , id:string) {
        this.userName = userName;
        this.pictrueUrl = pictureUrl;
        this.id = id;
    }
}