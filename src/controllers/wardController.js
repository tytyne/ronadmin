import WardData from "../database/data/Ward";

class wardController {
  static async allWards(req, res, next) {
    try {
      const data = await WardData.getWards();
      return res.status(200).json({ message: "wards", data });
    } catch (err) {
      return next(new Error(err));
    }
  }
  static async createWard(req, res, next) {
    try {
      const data = req.body;
      const ward = await WardData.storeWard(data);
      console.log("check ward", ward);
      return res.status(200).json({ message: "successfully created", ward });
    } catch (err) {
      return next(new Error(err));
    }
  }

  static async updatingWard(req, res, next) {
    try {
      const wardId = req.params.Id;
      const data = req.body;
      const ward = await WardData.getWardById(wardId);
      console.log("hellloooo", ward);

      if (ward.length === 0)
        return res.status(400).json({ error: "This  ward can't be found!" });
      else await WardData.updateWard(wardId, data);
      return res.status(200).json({ message: "Update ward succesfully!" });
    } catch (err) {
      return next(new Error(err));
    }
  }
  static async deletingWard(req, res, next) {
    try {
      const wardId = req.query.Id;
      const ward = await WardData.getWardById(wardId);
      if (ward.length === 0)
        return res.status(400).json({ error: "The Id doesn't exist!" });
      else await WardData.deleteById(wardId);

      return res.status(200).json({ message: "ward deleted successfully" });
    } catch (err) {
      return next(new Error(err));
    }
  }
}
export default wardController;
