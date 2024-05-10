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

export function convertBase64ToPNG(base64Data) {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const image = new Image();
    
        image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);
        canvas.toBlob((blob) => {
            resolve(blob);
        }, 'image/png');
        };
    
        image.onerror = (error) => {
        reject(error);
        };
    
        image.src = base64Data;
    });
    }
