import axios from "axios";


test("Deve testar a API", async function () {

    await axios({
        url: "http://localhost:3000/checkin",
        method: "post",
        data: {
            plate: "AAA-999"
        }
    });
    
})