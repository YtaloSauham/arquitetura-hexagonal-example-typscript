import express ,{Request,response,Response} from "express";
const app = express();
app.use(express.json());
app.post("/checkin", function(request: Request, response: Response){
    console.log(request.body);
    response.end();
})
app.listen(3000)