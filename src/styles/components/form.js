import { StyleSheet } from 'react-native'
import { theme } from '../theme';

export const formStyles = StyleSheet.create({
    formGroup: {  // 改名更具描述性
        marginBottom: theme.spacing.large,
    },
    label: {
        fontSize: theme.fontSize.medium,
        color: theme.colors.secondaryText,
        marginBottom: theme.spacing.small,
        fontWeight: '500',
    },
    input: {
        height: 48,
        borderWidth: 1.5,
        borderColor: theme.colors.border,
        borderRadius: 12,
        paddingHorizontal: theme.spacing.medium,
        fontSize: theme.fontSize.medium,
        color: theme.colors.text,
        backgroundColor: theme.colors.cardBg,
    },
    inputFocused: {
        borderColor: theme.colors.primary,
        borderWidth: 1.5,
    },

    exerciseInput: {
        backgroundColor: theme.colors.background,
        borderRadius: 8,
        padding: theme.spacing.small,
        fontSize: theme.fontSize.medium,
        color: theme.colors.text,
    },
});