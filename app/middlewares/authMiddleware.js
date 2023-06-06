import { verify } from 'jsonwebtoken';

// Authentication middleware
export function authenticate(req, res, next) {
  try {
    // Get the token from the request cookies
    const token = req.cookies.token;

    // Verify and decode the token
    const decoded = verify(token, 'secret-key');

    // Attach the authenticated user to the request object
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Unauthorized' });
  }
}
