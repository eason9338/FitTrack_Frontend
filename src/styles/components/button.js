import { StyleSheet } from 'react-native'
import { theme } from '../theme';

export const buttonStyles = StyleSheet.create({
    button: {
        height: 48,
        backgroundColor: theme.colors.primary,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing.large,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: theme.fontSize.medium,
        fontWeight: '600',
    },

    loginButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
    },

    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },

        // buttonStyles.js 中添加
    addButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: theme.spacing.small,
    },

    addButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },

    newExerciseButton: {
        flexDirection: 'row',
        backgroundColor: theme.colors.text,
        borderRadius: 12,
        padding: theme.spacing.medium,
        margin: theme.spacing.medium,
        justifyContent: 'center',
        alignItems: 'center',
    },

    newExerciseButtonText: {
        color: theme.colors.cardBg,
        fontSize: theme.fontSize.medium,
        fontWeight: '600',
        marginLeft: theme.spacing.small,
    },

    categoryButton: {
        paddingHorizontal: theme.spacing.medium,
        paddingVertical: theme.spacing.small,
        marginHorizontal: theme.spacing.xsmall,
        marginVertical: theme.spacing.small,
        borderRadius: 20,
        backgroundColor: theme.colors.background,
    },
    categoryButtonActive: {
        backgroundColor: theme.colors.primary,
    },
    categoryButtonText: {
        color: theme.colors.secondaryText,
        fontSize: theme.fontSize.small,
    },
    categoryButtonTextActive: {
        color: theme.colors.cardBg,
    },
});