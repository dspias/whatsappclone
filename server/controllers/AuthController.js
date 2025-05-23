import getPrismaInstance from "../utils/PrismaClient.js";

export const checkuser = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.json({ msg: "Email is required", status: false });
    }

    const prisma = getPrismaInstance();
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.json({ msg: "User not found", status: false });
    }

    return res.json({ msg: "User found", status: true, data: user });
  } catch (error) {
    next(error);
  }
};
