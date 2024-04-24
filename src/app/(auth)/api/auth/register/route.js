import {registerService} from "@/services/auth.service";

export default async function POST(req, res) {
    const userInfo = req.body;
    const data = await registerService(userInfo);
    res.json(data);
}