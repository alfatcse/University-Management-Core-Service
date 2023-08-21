import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

const createToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expireTime: string
): string => {
  return jwt.sign(payload, secret, {
    expiresIn: expireTime,
  });
};

const verifyToken = (token: string, secret: Secret): JwtPayload => {
  console.log(secret, token);
  const s = jwt.verify(token, secret) as JwtPayload;
  console.log('sss', s);
  return s;
};

export const jwtHelpers = {
  createToken,
  verifyToken,
};
