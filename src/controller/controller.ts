import { Request, Response } from 'express';

type User = {
    firstname : string,
    lastName : string,
    country : string,
    phone : string,
    isDeleted : boolean
}

export class UserController {
    static async createUser(req : Request, res : Response) {
        //Extract the req body and make respective lambda call

        //pass the response back
    }

    static async getUser(req : Request, res : Response) {
        //Extract the req body and make respective lambda call

        //pass the response back
    }

}
