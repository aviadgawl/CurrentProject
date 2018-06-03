export class UserData{
    public userName:string;
    public pictrueUrl:string;
    public id:string;
    public points:number;
    public tasks:Task[];
    public dateCreated: Date

    constructor(userName:string , pictureUrl:string , id:string) {
        this.userName = userName;
        this.pictrueUrl = pictureUrl;
        this.id = id;
        this.points = 0;
        this.tasks = [];
    }

    calculateLevel = () => {
        return Math.floor(this.points / 100);
    }
}

export class Task {
    public header:string;
    public body:string;
    public userFacebookId:string;
    public patronId:string;
    public status:string;
    public dateCreated = new Date;

}