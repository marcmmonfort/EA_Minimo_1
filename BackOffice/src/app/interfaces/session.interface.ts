export interface Session {
    _id?: string
    userSession: string
    loginDateSession: string
    logoutDateSession?: string
    loginReason: string
    createdAt: string;
    updatedAt: string;
}