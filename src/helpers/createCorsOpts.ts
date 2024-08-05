import { CorsOptions, CorsOptionsDelegate } from 'cors';

export function createCorsOptions(
	whitelist: string[],
	credentials: boolean = false,
	optionsSuccessStatus: number = 204,
): CorsOptions | CorsOptionsDelegate {
	return {
		origin: function (
			origin: string | undefined,
			callback: (err: Error | null, allow?: boolean) => void,
		) {
			if (!origin || whitelist.indexOf(origin) !== -1) {
				callback(null, true);
			} else {
				callback(new Error('Not allowed by CORS'));
			}
		},
		credentials: credentials,
		optionsSuccessStatus: optionsSuccessStatus,
	};
}
