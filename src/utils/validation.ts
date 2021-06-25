import { Alert } from 'react-native';

export function validateField(value: string, errorMessage: string): boolean {
    const requiredField: string = 'Campo Requerido';

    if (value.trim().length < 1) {
        Alert.alert(requiredField, errorMessage);
        return false;
    }

    return true;
}
