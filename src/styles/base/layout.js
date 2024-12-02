import { StyleSheet, Dimensions } from 'react-native'
import { theme } from '../theme';

const screenWidth = Dimensions.get('window').width;

export const layout = StyleSheet.create({
    baseContainer: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },

    // 置中的容器，用於登入、註冊等需要置中的頁面
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        padding: theme.spacing.large,
    },

    // Profile 頁面的容器
    pageContainer: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },

    headerContainer: {
        padding: 16,
        backgroundColor: '#fff',
        height :90,
    },

    exerciseContainer: {
        backgroundColor: theme.colors.cardBg,
        borderRadius: 12,
        margin: theme.spacing.medium,
        padding: theme.spacing.medium,
        ...theme.shadows.small,
    },

    card: {  // 改名為更通用的名稱
        width: Math.min(400, screenWidth - 40),
        backgroundColor: theme.colors.cardBg,
        borderRadius: 16,
        padding: theme.spacing.xlarge,
        ...theme.shadows.small,
    },

    capsule: {
        flexDirection: 'row',            // 水平排列
        alignItems: 'center',            // 垂直置中
        justifyContent: 'space-between', // 元素分散對齊
        padding: 10,                     // 內邊距
        backgroundColor: '#f5f5f5',      
        borderRadius: 20,
        marginBottom: 10,
        gap: 10,                        // 子元素間距
    },

    capsuleContentLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },

    rowCenter: {  // 更通用的名稱
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    inputWrapper: {
        flex: 1,
        marginHorizontal: theme.spacing.small/2,
    },

    exerciseRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing.small,
    },

    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        flex: 1,
        backgroundColor: theme.colors.cardBg,
        marginTop: 50,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing.medium,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    searchContainer: {
        padding: theme.spacing.small,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    categoriesContainer: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    exerciseList: {
        flex: 1,
    },
    exerciseListItem: {
        padding: theme.spacing.medium,
        backgroundColor: theme.colors.cardBg,
    },
    separator: {
        height: 1,
        backgroundColor: theme.colors.border,
    },
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});