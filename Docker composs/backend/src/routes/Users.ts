import { Request, Response, Router } from "express";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";
import { ParamsDictionary } from "express-serve-static-core";

// Init shared
const router = Router();

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get("/", async (req: Request, res: Response) => {
  return res.status(OK).json({
    user: {
      id: 1,
      name: "John"
    }
  });
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
