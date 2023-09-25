import coreApi from "./core";


const ENDPOINT = 'brokers'


const getBrokerList = (): Promise<TiBrokers[]> => coreApi.get<TiBrokers[]>(`${ENDPOINT}`).then(res => res.data)


export {
    getBrokerList
}