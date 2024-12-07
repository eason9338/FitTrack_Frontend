import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { theme } from '../styles/theme';
import RecordModal from '../components/RecordDetailModal';

const WorkoutCalendarTab = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const recordData = {
        exercises: [
            {
                exercise: {
                    name: "傳統臥推"
                },
                sets: [
                    { weight: 40, reps: 10 },
                    { weight: 40, reps: 10 }
                ]
            },
            {
                exercise: {
                    name: "啞鈴飛鳥"
                },
                sets: [
                    { weight: 10, reps: 12 }
                ]
            }
        ]
    };
    
    const markedDates = {
        '2024-12-01': { 
            marked: true, 
            dotColor: theme.colors.secondary  // 改用 secondary 顏色作為運動標記
        },
        '2024-12-03': { 
            marked: true, 
            dotColor: theme.colors.secondary 
        },
        ...(selectedDate ? {
            [selectedDate]: { 
                selected: true,
                selectedColor: theme.colors.primary,
                selectedTextColor: theme.colors.textLight
            }
        } : {})
    };

    return (
        <View style={styles.container}>
            <View style={styles.calendarContainer}>
                <Calendar
                    onDayPress={day => {
                        setSelectedDate(day.dateString);
                        setModalVisible(true);
                    }}
                    markedDates={markedDates}
                    theme={{
                        // 文字顏色設定
                        todayTextColor: theme.colors.primary,
                        dayTextColor: theme.colors.text,
                        textDisabledColor: theme.colors.textTertiary,
                        monthTextColor: theme.colors.text,
                        textSectionTitleColor: theme.colors.textSecondary,
                        
                        // 基本字體設定
                        textDayFontSize: 16,
                        textMonthFontSize: 18,
                        textDayHeaderFontSize: 14,
                        
                        // 字體粗細
                        textDayFontWeight: '400',
                        textMonthFontWeight: '600',
                        textDayHeaderFontWeight: '500',
                        
                        // 箭頭顏色
                        arrowColor: theme.colors.primary,
                        
                        // 自定義日期格子樣式
                        'stylesheet.day.basic': {
                            base: {
                                width: 32,
                                height: 32,
                                alignItems: 'center',
                                justifyContent: 'center',
                            },
                            selected: {
                                backgroundColor: theme.colors.primary,
                                borderRadius: 8,
                            },
                            today: {
                                backgroundColor: theme.colors.primaryLight,
                                borderRadius: 8,
                            }
                        },
                    }}
                    style={ styles.calendar }
                />
            </View>
            
            <RecordModal 
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                selectedDate={selectedDate}
                recordData={recordData}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.surfaceLight,
    },
    calendarContainer: {
        paddingBottom: 10,
    },
    calendar: {
        height: 320,
        borderRadius: 12,
        padding: 10,
        backgroundColor: theme.colors.surfaceLight,
    },
    content: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
        marginTop: 10,
    },
    title: {
        fontSize: theme.fontSize.large,
        color: theme.colors.text,
        marginBottom: 20,
    },
    button: {
        backgroundColor: theme.colors.primary,
        padding: 15,
        borderRadius: theme.radius.medium,
        alignItems: 'center',
    },
    buttonText: {
        color: theme.colors.textLight,
        fontSize: theme.fontSize.medium,
        fontWeight: '500',
    }
});

export default WorkoutCalendarTab;