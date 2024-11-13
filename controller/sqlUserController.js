import User from '../model/sqlModel';
import bcrypt from 'bcrypt';

const sqlUserController = {
  async createUser(req, res) {
    const { username, password, fullname, address, sex, email, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = await User.create({
        username,
        password: hashedPassword,
        fullname,
        address,
        sex,
        email,
        role,
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async getUser(req, res) {
    const { username } = req.params;
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async updateUser(req, res) {
    const { username } = req.params;
    const { password, fullname, address, sex, email, role } = req.body;
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        if (password) {
          const hashedPassword = await bcrypt.hash(password, 10);
          await User.update(
            { password: hashedPassword },
            { where: { username } }
          );
        }
        if (fullname) {
          await User.update({ fullname }, { where: { username } });
        }
        if (address) {
          await User.update({ address }, { where: { username } });
        }
        if (sex) {
          await User.update({ sex }, { where: { username } });
        }
        if (email) {
          await User.update({ email }, { where: { username } });
        }
        if (role) {
          await User.update({ role }, { where: { username } });
        }
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async deleteUser(req, res) {
    const { username } = req.params;
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        await User.destroy({ where: { username } });
        res.status(200).json({ message: 'User deleted successfully' });
      }
    } catch (error) {
      res.status(400).json(error);
    }
  },
};

export default sqlUserController;