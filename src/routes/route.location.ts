import { Router } from "express"
import {
    setLocation
} from "../controllers/controllers.location"
import { searchVendors } from "../controllers/controllers.vendor"

const router = Router()

router.post("/set", setLocation)
router.get("/search", searchVendors)

export default router