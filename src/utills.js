export function getItem(label, key, icon , children, type){
    return{
        key,
        icon,
        children,
        label,
        type,
    }
}

export const getBase64 = (file) => 
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });