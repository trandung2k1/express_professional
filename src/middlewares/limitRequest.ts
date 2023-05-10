import { Request } from "express";
const rateLimit = require('express-rate-limit');
export type RequestCustom = Request & { clientIp?: string };
const requestLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 1000,
    keyGenerator: (req: RequestCustom, res: Response) => {
        return req.clientIp;
    },
});
export default requestLimiter;
