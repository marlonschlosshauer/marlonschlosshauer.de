export const wasteTime = async (ms: number = 500) => {
    await new Promise(resolve => setTimeout(() => resolve(true), ms));
};
