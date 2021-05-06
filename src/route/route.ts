import { Request, Response, Router } from 'express';
const router : Router = Router();

import { UserController } from '../controller/controller';

router.get('/', (req: Request, res : Response)=>{
    res.status(200).send('Server is Ok !!!');
});

router.post('/user', UserController.createUser);
router.get('/user', UserController.getUser);



module.exports = router;