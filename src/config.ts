interface IConfig {
    port: number;
    mongoUrl: string;
}

export const config: IConfig = {
    port: parseInt(process.env.PORT )| 3000,
    mongoUrl: 'mongodb://localhost:27017/simple-app'
}