export interface FormType{
    control:any
    onSubmit:any
    errors:any
    isLoading:boolean
    register:any
    handleSubmit:any
}
export interface RegisterFormType{
    email:string
    password:string
    code:string
}

export interface ConnectionFormTypes{
    email:string
    password:string
}
export interface ForgetPasswordFormTypes{
    email:string
}
export interface UpdatePasswordFormTypes{
    password:string
}
export interface UpdateEmailFormTypes{
    email:string
}