import api from "@/api";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { StoreIds } from "./storeIdList";
import { useCountryStore } from './countryList'



export const useBrokerListStore = defineStore(StoreIds.brokerList, () => {
    const isLoading = ref<boolean>(false)

    const country = useCountryStore()

    const isError = ref<boolean>(false)

    const list = ref<TiBrokers[]>([])



    const resetError = () => {
        isError.value = false
    }



    const listFilteredByCountry = computed(() => {
        if (country.selected) {
            return list.value.filter(el => el.country === country.selected)
        } else {
            return list.value
        }
    })


    const getListFromServer = async () => {
        try {
            isLoading.value = true
            resetError();
            list.value = await api.getBrokerList()
            const reqCountryList = new Set(list.value.map(el => el.country))

            country.setList([...reqCountryList])
        } catch (error) {
            isError.value = true
            console.log('error')
        } finally {
            isLoading.value = false
        }
    }

    const hardClearList = () => {
        list.value.length = 0
    }

    return {
        list,
        isLoading,
        isError,
        resetError,
        getListFromServer,
        hardClearList,
        listFilteredByCountry,
    }
})