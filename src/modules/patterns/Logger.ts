export class Logger {
	private static instance: Logger | null = null;
	private logs: string[] = [];

	private constructor() { }

	static getInstance(): Logger {
		if (!Logger.instance) {
			Logger.instance = new Logger();
		}
		return Logger.instance;
	}

	public log(message: string): void {
		console.log(`[LOG:]: ${message}`);
		this.logs.push(message);
	}

	public get logList() {
		return this.logs
	}

	public clearLogs(): void {
		this.logs = [];
	}
}
