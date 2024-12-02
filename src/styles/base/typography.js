import { StyleSheet } from 'react-native'
import { theme } from '../theme';

export const typography = StyleSheet.create({
    textBase: {  // 基礎文字樣式
        fontSize: theme.fontSize.small,
    },

    textPrimary: {  // 主要文字，黑色
        fontSize: theme.fontSize.small,
        color: theme.colors.text,
    },

    textSecondary: {  // 次要文字，灰色
        fontSize: theme.fontSize.small,
        color: theme.colors.secondaryText,
    },

    textLink: {  // 連結文字
        fontSize: theme.fontSize.small,
        color: theme.colors.primary,
        fontWeight: '600',
    },

    title: {
        fontSize: theme.fontSize.xlarge,
        fontWeight: 'bold',
        color: theme.colors.text,
        textAlign: 'center',
        marginBottom: theme.spacing.xlarge,
    },

    headerTitle: {
        fontSize: theme.fontSize.medium,
        fontWeight: '600',
        color: theme.colors.text,
    },

    userName: {
        fontSize: 16,
        fontWeightt: '600',
        color: '#000',
    },

    exerciseTitle: {
        fontSize: theme.fontSize.large,
        fontWeight: '600',
        marginBottom: theme.spacing.medium,
    },
    
    exerciseNumber: {
        width: 30,
        fontSize: theme.fontSize.medium,
        color: theme.colors.secondaryText,
    },

    modalTitle: {
        fontSize: theme.fontSize.medium,
        fontWeight: '600',
        color: theme.colors.text,
    },
    modalButtonText: {
        fontSize: theme.fontSize.medium,
        color: theme.colors.secondaryText,
    },
    modalButtonTextPrimary: {
        fontSize: theme.fontSize.medium,
        color: theme.colors.primary,
        fontWeight: '600',
    },
    exerciseItemTitle: {
        fontSize: theme.fontSize.medium,
        fontWeight: '600',
        marginBottom: theme.spacing.xsmall,
        color: theme.colors.text,
    },
    exerciseItemDescription: {
        fontSize: theme.fontSize.small,
        color: theme.colors.secondaryText,
        marginBottom: theme.spacing.small,
    },
    exerciseItemTag: {
        fontSize: theme.fontSize.xsmall,
        color: theme.colors.primary,
    },
});