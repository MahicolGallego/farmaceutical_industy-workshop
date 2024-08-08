import { NextFunction, Request, Response } from 'express';

export const errorHandler = (
	error: Error,
	_req: Request,
	res: Response,
	_next: NextFunction,
) => {
	console.error(error.stack);
	res.status(500).json({ error: error.message, message: 'There is an error' });
};
