export type account = {
     accountId?:number,
     firstName?: string,
     lastName?: string,
     email?: string,
        password?: string,
        district?: string | null,
        phoneNumber?: string,
        role?: 'admin' | 'organizer' | 'payroll',
        status?: 'active' | 'inactive' | 'banned'
}