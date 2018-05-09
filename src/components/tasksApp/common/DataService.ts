import * as $ from "jquery";
import { UserData } from "./entits";

export default class DataService {
    private dataUrl: string

    constructor(url: string) {
        this.dataUrl = url;
    }

    public getUserInfo = function (userFaceBookId: number, cb: any) {
        
        $.get(`${this.dataUrl}/users/${userFaceBookId}`, cb);
    }

    public saveUser = function (userData: UserData, cb: any) {
        debugger
        $.ajax({
            type: "POST",
            url: `${this.dataUrl}/users/save`,
            data: userData,
            success: cb,
            dataType: "application/javascript"
          });
    }

    public getUserTasks = function (userFaceBookId: number) {

    }

}