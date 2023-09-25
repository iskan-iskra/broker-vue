import { defineStore } from "pinia";
import { StoreIds } from "./storeIdList";
import { ref } from "vue";

export const useCountryStore = defineStore(StoreIds.countryList, () => {
    const selected = ref<TiBrokers['country']>()
    const list = ref<TiBrokers['country'][]>([])
    const setSelected = (value: TiBrokers['country']) => {
        selected.value = value
    }
    const setList = (value: TiBrokers['country'][]) => {
        list.value = value
    }
    return {
        selected,
        setSelected,
        list,
        setList,
    }
})