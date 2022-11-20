import passport from "passport";
import { Strategy, VerifyFunction } from "passport-local";
import prisma from "../prismaClient";
import { comparePassword } from "../helpers/userHelper";

const authUser: VerifyFunction = async (email, password, next) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user || !comparePassword(password, user.password)) {
    return next(null, false);
  }

  return next(null, user);
};

passport.use(new Strategy({ usernameField: "email" }, authUser));

passport.serializeUser((user, next) => next(null, user.email));

passport.deserializeUser(async (email, next) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email as string,
    },
  });

  if (!user) {
    return next(null, false);
  }

  return next(null, user);
});

export default passport;
