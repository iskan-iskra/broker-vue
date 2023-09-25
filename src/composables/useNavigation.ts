import { RouterPath } from "@/router";
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";


export const useNavigation = () => {
    type TiAvailableRoute = {
        name: string;
        icon: string;
        path: RouterPath;
    };

    const route = useRoute();

    const router = useRouter();

    const currentPage = ref<TiAvailableRoute>();

    const availableRoutes = ref<TiAvailableRoute[]>([
        {
            name: "Home",
            icon: "mdi-home",
            path: RouterPath.HomePage,
        },
        {
            name: "About",
            icon: "mdi-information",
            path: RouterPath.About,
        },
    ]);

    const routerClick = (value: TiAvailableRoute) => {
        currentPage.value = value;

        redirect(value.path);
    };

    const redirect = (path: RouterPath) => {
        router.push({ path });
    };

    watchEffect(() => {
        const currentRoutePath = route.fullPath;

        const reqValue = availableRoutes.value.find(
            (el) => currentRoutePath === el.path
        );

        currentPage.value = reqValue;
    });


    return {
        currentPage,
        availableRoutes,
        routerClick,
    }
}