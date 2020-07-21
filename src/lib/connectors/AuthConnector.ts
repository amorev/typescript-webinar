interface RequestResult {
    result?: any;
    info?: any;
}

interface SendMessageResult {
    info?: any;
}

interface AuthConnectorInterface {
    sendMessage(message: string, data: any): Promise<SendMessageResult>;

    request(message: string, data: any): Promise<RequestResult>;
}

class RestConnector implements AuthConnectorInterface {
    async request(message: string, data: any): Promise<RequestResult> {
        return {
            result: true
        };
    }

    async sendMessage(message: string, data: any): Promise<SendMessageResult> {
        return {
            info: {}
        };
    }

}

export class AuthServiceHandler {
    constructor(private authConnector: AuthConnectorInterface) {
    }

    public instance;

    public static getInstance(): AuthServiceHandler {
        if (!this.prototype.instance) {
            const connector = new RestConnector();
            this.prototype.instance = new AuthServiceHandler(connector);
        }
        return this.prototype.instance;
    }

    public async login(username: string, password: string): Promise<string> {
        return (await this.authConnector.request('login', {
            username,
            password
        })).result;
    }

    public async validateToken(token: string): Promise<boolean> {
        return (await this.authConnector.request('validateToken', {
            token
        })).result;
    }
}
