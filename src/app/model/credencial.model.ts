export class Credencial {
    
    id: number;
    username: string;
	password: string;
	role: string;
    pessoa: null;
    
    constructor() {
        this.id = 0;
        this.role = "ROLE_ADMIN";
    }

}