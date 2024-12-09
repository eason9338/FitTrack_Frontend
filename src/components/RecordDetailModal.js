import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
    ScrollView,
    SafeAreaView,
    Alert,
} from 'react-native';
import { theme } from '../styles/theme';

const RecordDetailModal = ({ 
    visible, 
    onClose, 
    selectedDate,
    recordData
}) => {
    const handleDelete = () => {
        Alert.alert(
            "確認刪除",
            "確定要刪除這天的訓練記錄嗎？",
            [
                { text: "取消", style: "cancel" },
                { 
                    text: "刪除", 
                    onPress: () => onClose(),
                    style: "destructive"
                }
            ]
        );
    };

    const renderExercise = (exercise) => (
        <View style={styles.exerciseItem} key={exercise._id}>
            <Text style={styles.exerciseName}>{exercise.exercise.name}</Text>
            {exercise.sets.map((set, index) => (
                <View style={styles.setRow} key={set._id}>
                    <Text style={styles.setNumber}>第 {index + 1} 組</Text>
                    <Text style={styles.setDetail}>{set.weight} kg × {set.reps} 下</Text>
                </View>
            ))}
        </View>
    );

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <SafeAreaView style={styles.modalContent}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>{selectedDate} 的訓練紀錄</Text>
                    <TouchableOpacity 
                        style={styles.closeButton}
                        onPress={onClose}
                    >
                        <Text style={styles.closeButtonText}>關閉</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.modalScroll}>
                    <View style={styles.exercisesList}>
                        {recordData && recordData[0]?.exercises ? 
                            recordData[0].exercises.map(exercise => renderExercise(exercise)) 
                            : 
                            <Text>無資料</Text>
                        }
                    </View>
                </ScrollView>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={[styles.actionButton, styles.deleteButton]}
                        onPress={handleDelete}
                    >
                        <Text style={styles.deleteButtonText}>刪除訓練</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={[styles.actionButton, styles.editButton]}
                        onPress={() => {/* 處理編輯 */}}
                    >
                        <Text style={styles.editButtonText}>編輯訓練</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        backgroundColor: theme.colors.surfaceLight,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    modalTitle: {
        fontSize: theme.fontSize.large,
        fontWeight: '600',
        color: theme.colors.text,
    },
    closeButton: {
        padding: 8,
    },
    closeButtonText: {
        color: theme.colors.primary,
        fontSize: theme.fontSize.medium,
    },
    modalScroll: {
        flex: 1,
    },
    exercisesList: {
        padding: 16,
        gap: 16,
    },
    exerciseItem: {
        backgroundColor: theme.colors.surface,
        borderRadius: 12,
        padding: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    exerciseName: {
        fontSize: theme.fontSize.medium,
        fontWeight: '600',
        color: theme.colors.text,
        marginBottom: 12,
    },
    setRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    setNumber: {
        fontSize: theme.fontSize.small,
        color: theme.colors.textSecondary,
    },
    setDetail: {
        fontSize: theme.fontSize.small,
        color: theme.colors.text,
        fontWeight: '500',
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 16,
        gap: 12,
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
        backgroundColor: theme.colors.surfaceLight,
    },
    actionButton: {
        flex: 1,
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButton: {
        backgroundColor: theme.colors.surfaceLight,
        borderWidth: 1,
        borderColor: theme.colors.error,
    },
    editButton: {
        backgroundColor: theme.colors.primary,
    },
    deleteButtonText: {
        color: theme.colors.error,
        fontSize: theme.fontSize.medium,
        fontWeight: '500',
    },
    editButtonText: {
        color: theme.colors.textLight,
        fontSize: theme.fontSize.medium,
        fontWeight: '500',
    },
});

export default RecordDetailModal;