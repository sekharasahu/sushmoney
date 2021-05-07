const axios = require('axios').default;

import { Request, Response } from 'express';


type User = {
    firstname: string,
    lastName: string,
    city: string
}

export class UserController {
    static async createUser(req: Request, res: Response) {
        //Extract the req body and make respective lambda call
        try {
            let newUser : User = req.body;
            let result = await axios({
                method: process.env.LAMBDA_CREATE_USER_HTTP_METHOD,
                url: process.env.LAMBDA_CREATE_USER_URI,
                data: newUser
            });

            if(result.status == 200) {
                return res.status(200).send(req.body);
            }
            return res.status(400).send("Something went worng");
        } catch (err) {
            console.log(err);
            return res.status(400).send("Something went worng");
        }
    }

    static async getUser(req: Request, res: Response) {
        //Make the respective lambda call
        try {
            let result = await axios.get(process.env.LAMBDA_GET_USER_URI)
            if(result.status == 200) {
                return res.status(200).send(result.data);
            }
            return res.status(400).send("Something went worng");
        } catch (err) {
            console.log(err);
            return res.status(400).send("Something went worng");
        }

        //pass the response back
    }

    static async deleteUser(req: Request, res: Response) {
        //Make the respective lambda call
        try {
            let result = await axios({
                method: process.env.LAMBDA_DELETE_USER_HTTP_METHOD,
                url: process.env.LAMBDA_DELETE_USER_URI,
            });
            if(result.status == 200) {
                return res.status(200).send("Users deleted");
            }
            return res.status(400).send("Something went worng");
        } catch (err) {
            console.log(err);
            return res.status(400).send("Something went worng");
        }

        //pass the response back
    }

}
