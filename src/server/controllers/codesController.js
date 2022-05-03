import codes from "../models/Code.js";

class CodesController {
  static getAllCodes(req, res) {
    codes.find((error, code) => {
      if (error) throw error;
      res.status(200).json(code);
    });
  }

  static getCodeById(req, res) {
    const { id } = req.params;

    codes.findById(id, (error, code) => {
      if (error) {
        res.status(400).send(`${error.message} - failed to get code`);
      } else {
        res.status(200).send(code);
      }
    });
  }

  static addNewCode(req, res) {
    let code = new codes(req.body);

    code.save((error) => {
      if (error) {
        res
          .status(500)
          .send(`Error: ${error.message} - failed to create new code`);
      } else {
        res.status(201).send(code.toJSON());
      }
    });
  }

  static updateCode(req, res) {
    const { id } = req.params;

    codes.findByIdAndUpdate(id, { $set: req.body }, (error, code) => {
      if (error) {
        res.status(500).send(`Error: ${error.message} - failed to update code`);
      } else {
        res.status(200).send("code updated");
      }
    });
  }

  static deleteCode(req, res) {
    const { id } = req.params;

    codes.findByIdAndDelete(id, (error) => {
      if (error) {
        res.status(500).send(`Error: ${error.message} - failed to delete code`);
      } else {
        res.status(200).send("code deleted");
      }
    });
  }
}

export default CodesController;
