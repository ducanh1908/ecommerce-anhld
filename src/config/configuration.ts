interface EnvironmentsVariables {
    appUrl: string;
    port: number;
    node_env: string;
    http: {
        timeout: number;
        max_redirect:number
    };
    mysql: {
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
    }

}

export const configuration = ():EnvironmentsVariables => {
    const envVariable: EnvironmentsVariables={
        appUrl: process.env.APP_URL,
        port: parseInt(process.env.PORT, 10),
        node_env: process.env.NODE_ENV,
        mysql: {
            host:process.env.MYSQL_HOST,
            port: parseInt(process.env.MYSQL_PORT),
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DB

        },
        http: {
            timeout: parseInt(process.env.HTTP_TIMEOUT, 10),
            max_redirect: parseInt(process.env.HTTP_MAX_REDIRECT, 10)
        }
        

    }
    console.log('envVariable', envVariable)

    return envVariable
}