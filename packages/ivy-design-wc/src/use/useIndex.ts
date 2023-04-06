import { ref } from "vue";

export default () => {
    const index = ref(0);
    const generateIndex = () => {
        return index.value++;
    };
    return {
        index,
        generateIndex,
    };
};
